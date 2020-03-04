import { interpolate } from 'd3-interpolate';

export default {
  install(Vue, options = {}) {
    const opt = {
      directive: 'keyframes',
      keyframesAttrName: 'data-keyframes',
      pxOffset: 0,
      percentualOffset: 0,
      updateEveryMS: 128,
      transitionTimingFunction: 'ease-out',
      transitionProperty: 'all',
      transitionDuration: '700ms',
      ...options,
    };
    const keyFramedElements = [];
    let wrapperElement = null;
    let updater = {};

    Vue.directive(opt.directive, {
      inserted(el) {
        wrapperElement = el;
        updateElementsList(wrapperElement.querySelectorAll(`[${opt.keyframesAttrName}]`));
        Vue.nextTick(updateElementStyles);
        window.addEventListener('scroll', updateElementStyles);
      },
      componentUpdated(el) {
        updateElementsList(el.querySelectorAll(`[${opt.keyframesAttrName}]`));
        Vue.nextTick(updateElementStyles);
      },
      unbind(el) {
        wrapperElement = null;
        window.removeEventListener('scroll', updateElementStyles);
      }
    });
    const updateElementStyles = () => updateStyles(keyFramedElements);

    function updateElementsList(nodeList) {
      Vue.nextTick(() => {
        if (nodeList instanceof NodeList) {
          for (const node of nodeList) {
            if (node.hasAttribute(opt.keyframesAttrName)) {
              try {
                node._vueKeyframes = {...JSON.parse(node.getAttribute(opt.keyframesAttrName))};
                keyFramedElements.push(node);
                node.style.transitionTimingFunction = opt.transitionTimingFunction;
                node.style.transitionProperty = opt.transitionProperty;
                node.style.transitionDuration = opt.transitionDuration;
              } catch (e) {
                console.warn(node, 'Invalid JSON keyframes!', e)
              }
              node.removeAttribute(opt.keyframesAttrName)
            }
          }
        }
      });
    }

    function ratioMinMax(value) {
      return Math.min(1, Math.max(0, value));
    }

    function updateStyles(nodes) {
      const thisTime = Date.now();
      if (nodes.length && thisTime - updater.lastTime < opt.updateEveryMS) {
        if (updater.timeout) {
          clearTimeout(updater.timeout);
        }
        updater.timeout = setTimeout(updateElementStyles, opt.updateEveryMS);
        return
      }
      updater.lastTime = thisTime;

      const wrapperRect = wrapperElement.getBoundingClientRect();
      const offset = opt.pxOffset + (wrapperRect.height * opt.percentualOffset);
      const crossedRatio = ratioMinMax(1 - (wrapperRect.height + wrapperRect.y + offset) / wrapperRect.height);
      const keyframe = crossedRatio * 100;
      for (const node of nodes) {
        const neighbours = [];
        for(const key of Object.keys(node._vueKeyframes)) {
          let doBreak = false;
          if (Number(key) < keyframe) {
            neighbours.push(key);
          } else {
            neighbours.push(key);
            doBreak = true;
          }
          if (neighbours.length > 2) {
            neighbours.shift();
          }
          if (doBreak) {
            break;
          }
        }
        const ratio = ratioMinMax((keyframe - Number(neighbours[0])) / (Number(neighbours[1]) - Number(neighbours[0])));

        const resultStyle = {};
        let secondRun = false;

        for (const frame of neighbours) {
          for (const [key, value] of Object.entries(node._vueKeyframes[frame])) {
            if(secondRun) {
              resultStyle[key] = interpolate(resultStyle[key], value)(ratio);
            } else {
              resultStyle[key] = value;
            }
          }
          secondRun = true;
        }

        for (const style in resultStyle) {
          node.style[style] = resultStyle[style];
        }
      }
    }
  },
};

