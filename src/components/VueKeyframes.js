import {interpolate} from 'd3-interpolate';

export default {
  install(Vue, options = {}) {
    const defaultOptions = {
      directive: 'keyframes',
      keyframesAttrName: 'data-keyframes',
      pxOffset: 0,
      screenOffset: 0,
      ratioOffset: 0,
      updateEveryMS: 48,
      transitionTimingFunction: 'ease-out',
      transitionProperty: 'all',
      transitionDuration: '250ms',
      scrollContext: global || window,
      ...options,
    };

    Vue.directive(defaultOptions.directive, {
      inserted(el, binding, vnode) {
        updateInstance(el, binding, vnode);
      },
      componentUpdated(el, binding, vnode) {
        if (vnode.componentOptions) {
          vnode.componentOptions.scrollContext.removeEventListener('scroll', vnode.updateElementStyles);
        }
        updateInstance(el, binding, vnode);
      },
      unbind(el, binding, vnode) {
        vnode.componentOptions.scrollContext.removeEventListener('scroll', vnode.updateElementStyles);
      }
    });

    function updateInstance(el, binding, vnode) {
      vnode.componentOptions = {...defaultOptions, ...binding.value};
      const opt = vnode.componentOptions;
      updateElementsList(opt, vnode, el.querySelectorAll(`[${opt.keyframesAttrName}]`));
      vnode.updateElementStyles = () => updateStyles(opt, vnode, el, vnode._keyFramesElements);
      vnode.componentOptions.scrollContext.addEventListener('scroll', vnode.updateElementStyles);
      Vue.nextTick(vnode.updateElementStyles);
    }

    function updateElementsList(opt, vnode, nodeList) {
      if (vnode._keyFramesElements && vnode._keyFramesElements.length > 0) {
        for (const i in vnode._keyFramesElements) {
          if (document.contains(vnode._keyFramesElements[i])) {
            vnode._keyFramesElements.splice(i, 1);
          }
        }
      } else {
        vnode._keyFramesElements = [];
      }
      Vue.nextTick(() => {
        if (nodeList instanceof NodeList) {
          for (const node of nodeList) {
            if (node.hasAttribute(opt.keyframesAttrName)) {
              try {
                node._keyFrames = {...JSON.parse(node.getAttribute(opt.keyframesAttrName))};
                node.style.transitionTimingFunction = opt.transitionTimingFunction;
                node.style.transitionProperty = opt.transitionProperty;
                node.style.transitionDuration = opt.transitionDuration;
                vnode._keyFramesElements.push(node);
              } catch (e) {
                console.warn(node, 'Invalid JSON keyframes!', e)
              }
              node.removeAttribute(opt.keyframesAttrName)
            }
          }
        }
      });
    }

    function updateStyles(opt, vnode, wrapper, nodes) {
      const thisTime = Date.now();
      if (!vnode._keyFramesUpdater) {
        vnode._keyFramesUpdater = {};
      }
      if (nodes.length && thisTime - vnode._keyFramesUpdater.lastTime < opt.updateEveryMS) {
        if (vnode._keyFramesUpdater.timeout) {
          clearTimeout(vnode._keyFramesUpdater.timeout);
        }
        vnode._keyFramesUpdater.timeout = setTimeout(() => updateStyles(opt, vnode, wrapper, nodes), opt.updateEveryMS);
        return
      }
      window.requestAnimationFrame(() => {
        vnode._keyFramesUpdater.lastTime = thisTime;
        const wrapperRect = wrapper.getBoundingClientRect();
        const offset = opt.pxOffset +
          (wrapperRect.height * opt.ratioOffset) +
          (document.documentElement.clientHeight * (opt.screenOffset / 100));
        const crossedRatio = ratioMinMax(1 - (wrapperRect.height + wrapperRect.y + offset) / wrapperRect.height);
        const keyframe = crossedRatio * 100;
        for (const node of nodes) {
          const neighbours = [];
          for (const key of Object.keys(node._keyFrames)) {
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
            for (const [key, value] of Object.entries(node._keyFrames[frame])) {
              if (secondRun) {
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
      });
    }

    function ratioMinMax(value) {
      return Math.min(1, Math.max(0, value));
    }
  },
};

