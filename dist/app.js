/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/about.js":
/*!******************************!*\
  !*** ./src/scripts/about.js ***!
  \******************************/
/***/ (() => {

eval("AOS.init();\n\n// const observeSkill = document.querySelectorAll(\".skill\");\n\n// const myObserve = new IntersectionObserver((item) => {\n//     item.forEach((element) => {\n//         if (element.isIntersecting) {\n//             element.target.classList.add(\"skill_active\");\n//         } else {\n//             element.target.classList.remove(\"skill_active\");\n//         };\n//     });\n// });\n\n// observeSkill.forEach((e) => {\n//     myObserve.observe(e);\n// });\n\n//# sourceURL=webpack://webpack/./src/scripts/about.js?");

/***/ }),

/***/ "./src/scripts/banner.js":
/*!*******************************!*\
  !*** ./src/scripts/banner.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typed.js */ \"./node_modules/typed.js/dist/typed.module.js\");\nAOS.init();\n\nvar options = {\n  strings: [\"A passionate frontend developer\", \"A passionate frontend developer\"],\n  typeSpeed: 150,\n  backSpeed: 10,\n  startDelay: 1000,\n  loop: true,\n  showCursor: false\n};\nvar typed = new typed_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.banner_title', options);\n\n//# sourceURL=webpack://webpack/./src/scripts/banner.js?");

/***/ }),

/***/ "./src/scripts/contact.js":
/*!********************************!*\
  !*** ./src/scripts/contact.js ***!
  \********************************/
/***/ (() => {

eval("var observerContact = document.querySelectorAll(\".contact\");\nvar observer = new IntersectionObserver(function (element) {\n  element.forEach(function (observeE) {\n    if (observeE.isIntersecting) {\n      observeE.target.classList.add(\"contact_content_active\");\n    } else {\n      observeE.target.classList.remove(\"contact_content_active\");\n    }\n  });\n});\nobserverContact.forEach(function (item) {\n  observer.observe(item);\n});\n\n//# sourceURL=webpack://webpack/./src/scripts/contact.js?");

/***/ }),

/***/ "./src/scripts/hero.js":
/*!*****************************!*\
  !*** ./src/scripts/hero.js ***!
  \*****************************/
/***/ (() => {

eval("var customCursor = document.querySelector(\".custom_cursor\");\nvar interactiveElements = document.querySelectorAll('a, i');\nvar gamil = document.querySelectorAll(\".my_gmail\");\ndocument.addEventListener(\"mousemove\", function (e) {\n  customCursor.style.left = e.pageX + 'px';\n  customCursor.style.top = e.pageY + 'px';\n});\ninteractiveElements.forEach(function (element) {\n  element.addEventListener(\"mouseenter\", function () {\n    customCursor.style.width = '40px';\n    customCursor.style.height = '40px';\n    customCursor.innerHTML = \"\";\n    customCursor.classList.add('active');\n  });\n  element.addEventListener(\"mouseleave\", function () {\n    customCursor.style.width = '10px';\n    customCursor.style.height = '10px';\n    customCursor.classList.remove('active');\n  });\n});\ngamil.forEach(function (mail) {\n  mail.addEventListener(\"mouseenter\", function () {\n    customCursor.style.width = \"70px\";\n    customCursor.style.height = \"70px\";\n    customCursor.innerHTML = \"copy\";\n    customCursor.style.textAlign = \"center\";\n    customCursor.style.lineHeight = \"30px\";\n  });\n  mail.addEventListener(\"mouseleave\", function () {\n    customCursor.style.width = \"10px\";\n    customCursor.style.height = \"10px\";\n  });\n});\n\n// var loader = document.querySelector(\".loaderSvgWrapper\");\n\n// window.addEventListener(\"load\", function () {\n//     loader.style.display = \"none\";\n// }\n// )\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var menuOpen = document.querySelector(\".header_small_screen_menu_open\");\n  var menuClose = document.querySelector(\".header_small_screen_close_menu_btn\");\n  var menu = document.querySelector(\".header_small_screen_menu\");\n  menuOpen.addEventListener(\"click\", function () {\n    menu.classList.add(\"header_small_screen_menu_active\");\n  });\n  menuClose.addEventListener(\"click\", function () {\n    menu.classList.remove(\"header_small_screen_menu_active\");\n  });\n  var menuItem = document.querySelectorAll(\".menu_item\");\n  menuItem.forEach(function (item) {\n    item.addEventListener(\"click\", function () {\n      menu.classList.remove(\"header_small_screen_menu_active\");\n    });\n  });\n});\n\n//# sourceURL=webpack://webpack/./src/scripts/hero.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero */ \"./src/scripts/hero.js\");\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hero__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner */ \"./src/scripts/banner.js\");\n/* harmony import */ var _work__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work */ \"./src/scripts/work.js\");\n/* harmony import */ var _work__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_work__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ \"./src/scripts/about.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_about__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ \"./src/scripts/contact.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_contact__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n//# sourceURL=webpack://webpack/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/work.js":
/*!*****************************!*\
  !*** ./src/scripts/work.js ***!
  \*****************************/
/***/ (() => {

eval("AOS.init();\nvar observeWork = document.querySelectorAll(\".work\");\nvar myObserve = new IntersectionObserver(function (element) {\n  element.forEach(function (item) {\n    if (item.isIntersecting) {\n      item.target.classList.add('work_active');\n    } else {\n      item.target.classList.remove('work_active');\n    }\n  });\n});\nobserveWork.forEach(function (item) {\n  myObserve.observe(item);\n});\n\n//# sourceURL=webpack://webpack/./src/scripts/work.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack/./src/styles/index.scss?");

/***/ }),

/***/ "./node_modules/typed.js/dist/typed.module.js":
/*!****************************************************!*\
  !*** ./node_modules/typed.js/dist/typed.module.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ i)\n/* harmony export */ });\nfunction t(){return t=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},t.apply(this,arguments)}var s={strings:[\"These are the default values...\",\"You know what you should do?\",\"Use your own!\",\"Have a great day!\"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:\"typed-fade-out\",fadeOutDelay:500,loop:!1,loopCount:Infinity,showCursor:!0,cursorChar:\"|\",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:\"html\",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,s){},onStringTyped:function(t,s){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,s){},onTypingResumed:function(t,s){},onReset:function(t){},onStop:function(t,s){},onStart:function(t,s){},onDestroy:function(t){}},e=new(/*#__PURE__*/function(){function e(){}var n=e.prototype;return n.load=function(e,n,i){if(e.el=\"string\"==typeof i?document.querySelector(i):i,e.options=t({},s,n),e.isInput=\"input\"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map(function(t){return t.trim()}),e.stringsElement=\"string\"==typeof e.options.stringsElement?document.querySelector(e.options.stringsElement):e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.cssText=\"clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;\";var r=Array.prototype.slice.apply(e.stringsElement.children),o=r.length;if(o)for(var a=0;a<o;a+=1)e.strings.push(r[a].innerHTML.trim())}for(var u in e.strPos=0,e.currentElContent=this.getCurrentElContent(e),e.currentElContent&&e.currentElContent.length>0&&(e.strPos=e.currentElContent.length-1,e.strings.unshift(e.currentElContent)),e.sequence=[],e.strings)e.sequence[u]=u;e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.pause={status:!1,typewrite:!0,curString:\"\",curStrPos:0},e.typingComplete=!1,e.autoInsertCss=e.options.autoInsertCss,e.autoInsertCss&&(this.appendCursorAnimationCss(e),this.appendFadeOutAnimationCss(e))},n.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:\"html\"===t.contentType?t.el.innerHTML:t.el.textContent},n.appendCursorAnimationCss=function(t){var s=\"data-typed-js-cursor-css\";if(t.showCursor&&!document.querySelector(\"[\"+s+\"]\")){var e=document.createElement(\"style\");e.setAttribute(s,\"true\"),e.innerHTML=\"\\n        .typed-cursor{\\n          opacity: 1;\\n        }\\n        .typed-cursor.typed-cursor--blink{\\n          animation: typedjsBlink 0.7s infinite;\\n          -webkit-animation: typedjsBlink 0.7s infinite;\\n                  animation: typedjsBlink 0.7s infinite;\\n        }\\n        @keyframes typedjsBlink{\\n          50% { opacity: 0.0; }\\n        }\\n        @-webkit-keyframes typedjsBlink{\\n          0% { opacity: 1; }\\n          50% { opacity: 0.0; }\\n          100% { opacity: 1; }\\n        }\\n      \",document.body.appendChild(e)}},n.appendFadeOutAnimationCss=function(t){var s=\"data-typed-fadeout-js-css\";if(t.fadeOut&&!document.querySelector(\"[\"+s+\"]\")){var e=document.createElement(\"style\");e.setAttribute(s,\"true\"),e.innerHTML=\"\\n        .typed-fade-out{\\n          opacity: 0;\\n          transition: opacity .25s;\\n        }\\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\\n          -webkit-animation: 0;\\n          animation: 0;\\n        }\\n      \",document.body.appendChild(e)}},e}()),n=new(/*#__PURE__*/function(){function t(){}var s=t.prototype;return s.typeHtmlChars=function(t,s,e){if(\"html\"!==e.contentType)return s;var n=t.substring(s).charAt(0);if(\"<\"===n||\"&\"===n){var i;for(i=\"<\"===n?\">\":\";\";t.substring(s+1).charAt(0)!==i&&!(1+ ++s>t.length););s++}return s},s.backSpaceHtmlChars=function(t,s,e){if(\"html\"!==e.contentType)return s;var n=t.substring(s).charAt(0);if(\">\"===n||\";\"===n){var i;for(i=\">\"===n?\"<\":\"&\";t.substring(s-1).charAt(0)!==i&&!(--s<0););s--}return s},t}()),i=/*#__PURE__*/function(){function t(t,s){e.load(this,s,t),this.begin()}var s=t.prototype;return s.toggle=function(){this.pause.status?this.start():this.stop()},s.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},s.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},s.destroy=function(){this.reset(!1),this.options.onDestroy(this)},s.reset=function(t){void 0===t&&(t=!0),clearInterval(this.timeout),this.replaceText(\"\"),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},s.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){0===t.strPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},s.typewrite=function(t,s){var e=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var i=this.humanizer(this.typeSpeed),r=1;!0!==this.pause.status?this.timeout=setTimeout(function(){s=n.typeHtmlChars(t,s,e);var i=0,o=t.substring(s);if(\"^\"===o.charAt(0)&&/^\\^\\d+/.test(o)){var a=1;a+=(o=/\\d+/.exec(o)[0]).length,i=parseInt(o),e.temporaryPause=!0,e.options.onTypingPaused(e.arrayPos,e),t=t.substring(0,s)+t.substring(s+a),e.toggleBlinking(!0)}if(\"`\"===o.charAt(0)){for(;\"`\"!==t.substring(s+r).charAt(0)&&(r++,!(s+r>t.length)););var u=t.substring(0,s),p=t.substring(u.length+1,s+r),c=t.substring(s+r+1);t=u+p+c,r--}e.timeout=setTimeout(function(){e.toggleBlinking(!1),s>=t.length?e.doneTyping(t,s):e.keepTyping(t,s,r),e.temporaryPause&&(e.temporaryPause=!1,e.options.onTypingResumed(e.arrayPos,e))},i)},i):this.setPauseStatus(t,s,!0)},s.keepTyping=function(t,s,e){0===s&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var n=t.substring(0,s+=e);this.replaceText(n),this.typewrite(t,s)},s.doneTyping=function(t,s){var e=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){e.backspace(t,s)},this.backDelay))},s.backspace=function(t,s){var e=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var i=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){s=n.backSpaceHtmlChars(t,s,e);var i=t.substring(0,s);if(e.replaceText(i),e.smartBackspace){var r=e.strings[e.arrayPos+1];e.stopNum=r&&i===r.substring(0,s)?s:0}s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.options.onLastStringBackspaced(),e.shuffleStringsIfNeeded(),e.begin()):e.typewrite(e.strings[e.sequence[e.arrayPos]],s))},i)}else this.setPauseStatus(t,s,!1)},s.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},s.setPauseStatus=function(t,s,e){this.pause.typewrite=e,this.pause.curString=t,this.pause.curStrPos=s},s.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add(\"typed-cursor--blink\"):this.cursor.classList.remove(\"typed-cursor--blink\")))},s.humanizer=function(t){return Math.round(Math.random()*t/2)+t},s.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},s.initFadeOut=function(){var t=this;return this.el.className+=\" \"+this.fadeOutClass,this.cursor&&(this.cursor.className+=\" \"+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(\"\"),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},s.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:\"html\"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},s.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener(\"focus\",function(s){t.stop()}),this.el.addEventListener(\"blur\",function(s){t.el.value&&0!==t.el.value.length||t.start()}))},s.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement(\"span\"),this.cursor.className=\"typed-cursor\",this.cursor.setAttribute(\"aria-hidden\",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}();\n//# sourceMappingURL=typed.module.js.map\n\n\n//# sourceURL=webpack://webpack/./node_modules/typed.js/dist/typed.module.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;