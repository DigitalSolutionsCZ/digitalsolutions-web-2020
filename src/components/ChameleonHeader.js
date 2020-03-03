const ChaHeader = function (element) {
  this.element = element;
  this.sections = document.querySelectorAll('[data-cha-section]'); //js-cha-section
  this.header = this.element.querySelector('[data-cha-header]'); // js-cha-header
  // handle mobile behaviour
  this.headerTrigger = this.element.getElementsByClassName('js-cha-header__trigger');
  this.modal = document.getElementsByClassName('js-cha-modal');
  this.focusMenu = false;
  this.firstFocusable = null;
  this.lastFocusable = null;
  initChaHeader(this);
};

function initChaHeader(element) {
  // set initial status
  for (let j = 0; j < element.sections.length; j++) {
    initSection(element, j);
  }

  // handle mobile behaviour
  if (element.headerTrigger.length > 0) {
    // initMobileVersion(element);
  }

  // make sure header element is visible when in focus
  element.header.addEventListener('focusin', (event) => {
    checkHeaderVisible(element);
  });
}

function initSection(element, index) {
  // clone header element inside each section
  const cloneItem = (index === 0) ? element.element : element.element.cloneNode(true);

  cloneItem.removeAttribute('[data-cha-header-clip]');
  const customClasses = element.sections[index].getAttribute('data-header-class');
  // hide clones to SR
  cloneItem.setAttribute('aria-hidden', 'true');
  if (customClasses) {
    cloneItem.querySelector('[data-cha-header]').classList.add(customClasses)
  }
  // keyborad users - make sure cloned items are not tabbable
  if (index !== 0) {
    // reset tab index
    resetTabIndex(cloneItem);
    element.sections[index].insertBefore(cloneItem, element.sections[index].firstChild);
  }
}

function resetTabIndex(clone) {
  const focusable = clone.querySelectorAll('[href], button, input');
  for (let i = 0; i < focusable.length; i++) {
    focusable[i].setAttribute('tabindex', '-1');
  }
}

function initMobileVersion(element) {
  // detect click on nav trigger
  const triggers = document.getElementsByClassName('js-cha-header__trigger');
  for (let i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener('click', (event) => {
      event.preventDefault();
      const ariaExpanded = !Util.hasClass(element.modal[0], 'is-visible');
      // show nav and update button aria value
      Util.toggleClass(element.modal[0], 'is-visible', ariaExpanded);
      element.headerTrigger[0].setAttribute('aria-expanded', ariaExpanded);
      if (ariaExpanded) { // opening menu -> move focus to first element inside nav
        getFocusableElements(element);
        element.firstFocusable.focus();
      } else if (element.focusMenu) {
        if (window.scrollY < element.focusMenu.offsetTop) element.focusMenu.focus();
        element.focusMenu = false;
      }
    });
  }


  // listen for key events
  window.addEventListener('keydown', (event) => {
    // listen for esc key
    if ((event.keyCode && event.keyCode === 27) || (event.key && event.key.toLowerCase() === 'escape')) {
      // close navigation on mobile if open
      if (element.headerTrigger[0].getAttribute('aria-expanded') === 'true' && isVisible(element.headerTrigger[0])) {
        closeModal(element);
      }
    }
    // listen for tab key
    if ((event.keyCode && event.keyCode === 9) || (event.key && event.key.toLowerCase() === 'tab')) {
      trapFocus(element, event);
    }
  });
}

function closeModal(element) {
  element.focusMenu = element.headerTrigger[0]; // move focus to menu trigger when menu is close
  element.headerTrigger[0].click();
}

function trapFocus(element, event) {
  if (element.firstFocusable === document.activeElement && event.shiftKey) {
    // on Shift+Tab -> focus last focusable element when focus moves out of modal
    event.preventDefault();
    element.lastFocusable.focus();
  }
  if (element.lastFocusable === document.activeElement && !event.shiftKey) {
    // on Tab -> focus first focusable element when focus moves out of modal
    event.preventDefault();
    element.firstFocusable.focus();
  }
}

function getFocusableElements(element) {
  // get all focusable elements inside the modal
  const allFocusable = element.modal[0].querySelectorAll('[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary');
  getFirstVisible(element, allFocusable);
  getLastVisible(element, allFocusable);
}

function getFirstVisible(element, elements) {
  // get first visible focusable element inside the modal
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].offsetWidth || elements[i].offsetHeight || elements[i].getClientRects().length) {
      element.firstFocusable = elements[i];
      return true;
    }
  }
}

function getLastVisible(element, elements) {
  // get last visible focusable element inside the modal
  for (let i = elements.length - 1; i >= 0; i--) {
    if (elements[i].offsetWidth || elements[i].offsetHeight || elements[i].getClientRects().length) {
      element.lastFocusable = elements[i];
      return true;
    }
  }
}

function checkHeaderVisible(element) {
  if (window.scrollY > element.sections[0].offsetHeight - element.header.offsetHeight) window.scrollTo(0, 0);
}

function isVisible(element) {
  return (element.offsetWidth || element.offsetHeight || element.getClientRects().length);
}

function cssSupports(property, value) {
  if ('CSS' in window) {
    return CSS.supports(property, value);
  }
  const jsProperty = property.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  return jsProperty in document.body.style;
}

// init the ChaHeader Object
export default function init () {
  const chaHeader = document.querySelectorAll('[data-cha-header-clip]') || [];
  const clipPathSupported = cssSupports('clip-path', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)') || cssSupports('-webkit-clip-path', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)');
  if (chaHeader.length > 0 && clipPathSupported) {
    for (let i = 0; i < chaHeader.length; i++) {
      new ChaHeader(chaHeader[i]);
    }
  }
}


