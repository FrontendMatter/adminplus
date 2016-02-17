(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AdminPlus"] = factory();
	else
		root["AdminPlus"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _sidebar = __webpack_require__(1);\n\nvar _sidebar2 = _interopRequireDefault(_sidebar);\n\n__webpack_require__(7);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// STYLING\n\n\n// LIBRARY\n// COMPONENTS\nvar AdminPlus = {\n\tSidebar: new _sidebar2.default()\n};\n\n// EXPORT ES6\nexports.default = AdminPlus;\n\n// EXPORT ES5\n\nmodule.exports = exports.default;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/index.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/index.js?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _classCallCheck2 = __webpack_require__(2);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(3);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Class Sidebar\n */\n\nvar Sidebar = function () {\n\n\t/**\n  * Contruct Sidebar\n  * @return {Sidebar} The Sidebar instance\n  */\n\n\tfunction Sidebar() {\n\t\t(0, _classCallCheck3.default)(this, Sidebar);\n\n\t\t// INTERNAL OPTIONS\n\t\tthis.SCREEN_DESKTOP = null;\n\t\tthis.UPDATE_SCREEN_DEBOUNCE = 30;\n\n\t\t// DOM SELECTORS\n\t\tthis.SELECTOR = '.sidebar';\n\t\tthis.TOGGLE_SELECTOR = '[data-toggle=sidebar]';\n\t\tthis.NAV_SELECTOR = '.nav';\n\t\tthis.NAV_ITEM_SELECTOR = '.nav-item';\n\t\tthis.NAV_BUTTON_SELECTOR = this.NAV_ITEM_SELECTOR + ' > a';\n\t\tthis.SIDEBAR_NAV_BUTTON_SELECTOR = this.SELECTOR + ' ' + this.NAV_BUTTON_SELECTOR;\n\n\t\t// INTERNAL TIMERS\n\t\tthis._updateScreenDebounce = null;\n\t}\n\n\t/**\n  * Toggle a sidebar\n  * @param  {String|jQuery} sidebar \tA sidebar jQuery element or String DOM selector\n  */\n\n\n\t(0, _createClass3.default)(Sidebar, [{\n\t\tkey: 'toggle',\n\t\tvalue: function toggle(sidebar) {\n\t\t\tsidebar = this._sidebar(sidebar);\n\t\t\tsidebar.hasClass('visible') ? this.hide(sidebar) : this.show(sidebar);\n\t\t}\n\n\t\t/**\n   * Show a sidebar\n   * @param  {String|jQuery} sidebar \tA sidebar jQuery element or String DOM selector\n   * @param  {Boolean} transition \tUse transition (default true)\n   */\n\n\t}, {\n\t\tkey: 'show',\n\t\tvalue: function show(sidebar) {\n\t\t\tvar transition = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];\n\n\t\t\tsidebar = this._sidebar(sidebar);\n\t\t\tthis._hideAll();\n\t\t\t// DISABLE PAGE SCROLL ON MOBILE\n\t\t\t$('body').css('overflow', this.SCREEN_DESKTOP ? 'auto' : 'hidden');\n\t\t\t// USE TRANSITION\n\t\t\tif (transition) {\n\t\t\t\tsidebar.addClass('sidebar-transition');\n\t\t\t\treturn setTimeout(function () {\n\t\t\t\t\treturn sidebar.addClass('visible');\n\t\t\t\t}, 10);\n\t\t\t}\n\t\t\t// WITHOUT TRANSITION\n\t\t\tsidebar.addClass('visible');\n\t\t}\n\n\t\t/**\n   * Hide a sidebar\n   * @param  {String|jQuery} sidebar \tA sidebar jQuery element or String DOM selector\n   */\n\n\t}, {\n\t\tkey: 'hide',\n\t\tvalue: function hide(sidebar) {\n\t\t\tsidebar = this._sidebar(sidebar);\n\t\t\tif (sidebar.hasClass('visible')) {\n\t\t\t\t// ENABLE PAGE SCROLL\n\t\t\t\t$('body').css('overflow', 'auto');\n\t\t\t\t// HIDE SIDEBAR\n\t\t\t\tsidebar.removeClass('visible');\n\t\t\t\tsetTimeout(function () {\n\t\t\t\t\treturn sidebar.removeClass('sidebar-transition');\n\t\t\t\t}, 450);\n\t\t\t}\n\t\t}\n\n\t\t/**\n   * Internal helper that always returns a jQuery element\n   * @param  {jQuery|String} sidebar \tA sidebar jQuery element or String DOM selector\n   * @return {jQuery}         \t\tA sidebar jQuery element\n   */\n\n\t}, {\n\t\tkey: '_sidebar',\n\t\tvalue: function _sidebar(sidebar) {\n\t\t\tif (sidebar instanceof jQuery === true) {\n\t\t\t\treturn sidebar;\n\t\t\t}\n\t\t\treturn $(sidebar);\n\t\t}\n\n\t\t/**\n   * Run callback on each sidebar element\n   * @param  {Function} callback The callback\n   */\n\n\t}, {\n\t\tkey: '_each',\n\t\tvalue: function _each(callback) {\n\t\t\tvar _this = this;\n\n\t\t\t$(this.SELECTOR).each(function (k, sidebar) {\n\t\t\t\treturn callback.call(_this, $(sidebar));\n\t\t\t});\n\t\t}\n\n\t\t/**\n   * Hide all visible sidebars on mobile screens and \n   * sidebars with .closable-desktop class on desktop screens\n   */\n\n\t}, {\n\t\tkey: '_hideAll',\n\t\tvalue: function _hideAll() {\n\t\t\tvar _this2 = this;\n\n\t\t\tthis._each(function (sidebar) {\n\t\t\t\tif (sidebar.hasClass('visible') && !_this2.SCREEN_DESKTOP || sidebar.hasClass('closable-desktop')) {\n\t\t\t\t\t_this2.hide(sidebar);\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\n\t\t/**\n   * Show sidebars with .show-desktop class on desktop screens\n   */\n\n\t}, {\n\t\tkey: '_showDesktop',\n\t\tvalue: function _showDesktop() {\n\t\t\tvar _this3 = this;\n\n\t\t\tthis._each(function (sidebar) {\n\t\t\t\tif (sidebar.hasClass('show-desktop') && _this3.SCREEN_DESKTOP) {\n\t\t\t\t\t_this3.show(sidebar, false);\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\n\t\t/**\n   * Internal method to keep track of the screen size\n   */\n\n\t}, {\n\t\tkey: '_updateScreen',\n\t\tvalue: function _updateScreen() {\n\t\t\tvar _this4 = this;\n\n\t\t\tclearTimeout(this._updateScreenDebounce);\n\t\t\tthis._updateScreenDebounce = setTimeout(function () {\n\t\t\t\t_this4.SCREEN_DESKTOP = $(window).width() >= 768;\n\t\t\t\tif (_this4.SCREEN_DESKTOP) {\n\t\t\t\t\treturn _this4._showDesktop();\n\t\t\t\t}\n\t\t\t\t_this4._hideAll();\n\t\t\t}, this.UPDATE_SCREEN_DEBOUNCE);\n\t\t}\n\n\t\t/**\n   * Body touchstart or click event handler when on mobile\n   * @param  {DOMEvent} e \tThe DOM event\n   */\n\n\t}, {\n\t\tkey: '_closeBody',\n\t\tvalue: function _closeBody(e) {\n\t\t\tvar _this5 = this;\n\n\t\t\tthis._each(function (sidebar) {\n\t\t\t\tif (sidebar.hasClass('visible') && !_this5.SCREEN_DESKTOP || sidebar.hasClass('closable-desktop')) {\n\t\t\t\t\t// if the target of the click is NOT the sidebar container\n\t\t\t\t\t// or a descendant of the sidebar container\n\t\t\t\t\tif (!sidebar.is(e.target) && sidebar.has(e.target).length === 0) {\n\t\t\t\t\t\t_this5.hide(sidebar);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\n\t\t/**\n   * Initialize Sidebars\n   */\n\n\t}, {\n\t\tkey: 'init',\n\t\tvalue: function init() {\n\t\t\tvar _this6 = this;\n\n\t\t\t// UPDATE THE INITIAL SCREEN SIZE\n\t\t\tthis._updateScreen();\n\n\t\t\t// SHOW SIDEBARS ON DESKTOP SCREENS\n\t\t\tthis._showDesktop();\n\n\t\t\t// KEEP TRACK OF THE SCREEN SIZE\n\t\t\t$(window).resize(this._updateScreen.bind(this));\n\n\t\t\t// SIDEBAR COLLAPSE MENUS\n\t\t\t$(this.SIDEBAR_NAV_BUTTON_SELECTOR).on('click', function (e) {\n\t\t\t\tvar button = $(e.currentTarget);\n\t\t\t\tif (button.next('ul').html()) {\n\t\t\t\t\te.preventDefault();\n\t\t\t\t\tvar parent = button.parent();\n\t\t\t\t\t// Toggle Open Classes\n\t\t\t\t\tif (parent.hasClass('open')) {\n\t\t\t\t\t\tparent.removeClass('open');\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar nav = button.closest(_this6.NAV_SELECTOR);\n\t\t\t\t\t\tvar submenuOpen = nav.find(_this6.NAV_ITEM_SELECTOR + '.open');\n\t\t\t\t\t\t// Close Parent Open Submenus\n\t\t\t\t\t\tsubmenuOpen.removeClass('open');\n\t\t\t\t\t\tparent.addClass('open');\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t// TOGGLE SIDEBAR\n\t\t\t$(this.TOGGLE_SELECTOR).on('click', function (e) {\n\t\t\t\te.stopPropagation();\n\t\t\t\tvar sidebar = $($(e.currentTarget).data('target'));\n\t\t\t\tif (sidebar) {\n\t\t\t\t\t_this6.toggle(sidebar);\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t// CLOSE SIDEBAR ON MOBILE OR FLOATING WHEN BODY IS CLICKED\n\t\t\t$('body').on('click touchstart', this._closeBody.bind(this));\n\t\t}\n\t}]);\n\treturn Sidebar;\n}();\n\nexports.default = Sidebar;\n\nmodule.exports = exports.default;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/js/sidebar.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/js/sidebar.js?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nexports.__esModule = true;\n\nexports.default = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/helpers/classCallCheck.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/helpers/classCallCheck.js?");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nexports.__esModule = true;\n\nvar _defineProperty = __webpack_require__(4);\n\nvar _defineProperty2 = _interopRequireDefault(_defineProperty);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if (\"value\" in descriptor) descriptor.writable = true;\n      (0, _defineProperty2.default)(target, descriptor.key, descriptor);\n    }\n  }\n\n  return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) defineProperties(Constructor, staticProps);\n    return Constructor;\n  };\n})();\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/helpers/createClass.js\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/helpers/createClass.js?");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = { \"default\": __webpack_require__(5), __esModule: true };\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/core-js/object/define-property.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/core-js/object/define-property.js?");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("var $ = __webpack_require__(6);\nmodule.exports = function defineProperty(it, key, desc){\n  return $.setDesc(it, key, desc);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/core-js/library/fn/object/define-property.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/core-js/library/fn/object/define-property.js?");

/***/ },
/* 6 */
/***/ function(module, exports) {

	eval("var $Object = Object;\nmodule.exports = {\n  create:     $Object.create,\n  getProto:   $Object.getPrototypeOf,\n  isEnum:     {}.propertyIsEnumerable,\n  getDesc:    $Object.getOwnPropertyDescriptor,\n  setDesc:    $Object.defineProperty,\n  setDescs:   $Object.defineProperties,\n  getKeys:    $Object.keys,\n  getNames:   $Object.getOwnPropertyNames,\n  getSymbols: $Object.getOwnPropertySymbols,\n  each:       [].forEach\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/core-js/library/modules/$.js\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/core-js/library/modules/$.js?");

/***/ },
/* 7 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/sass/style.scss\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/sass/style.scss?");

/***/ }
/******/ ])
});
;