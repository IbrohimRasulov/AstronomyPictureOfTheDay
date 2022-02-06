/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/nasalization-cufonfonts-webfont/nasalization rg.woff */ \"./src/assets/nasalization-cufonfonts-webfont/nasalization rg.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Helvetica-Font/Helvetica.ttf */ \"./src/assets/Helvetica-Font/Helvetica.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"Nasalization\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n@font-face {\\n  font-family: \\\"Helvetica\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"truetype\\\");\\n}\\n\\n:root {\\n  --light-violet: #be9ce7;\\n  --dark-violet: #411d6e;\\n  --dark-background: #18161e;\\n  --light-background: #1b1a27;\\n  --custom-red: #eb3f5e;\\n}\\n\\nbody {\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"Helvetica\\\", sans-serif;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\n.app-container {\\n  width: 100%;\\n  height: 100vh;\\n  overflow: hidden;\\n  box-sizing: border-box;\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  grid-template-rows: auto auto 1fr auto auto;\\n  grid-template-areas:\\n    \\\"top-decoration\\\"\\n    \\\"header\\\"\\n    \\\"main\\\"\\n    \\\"footer\\\";\\n  border: 4px solid var(--light-violet);\\n  background-color: var(--dark-background);\\n}\\n\\n.browser {\\n  grid-area: top-decoration;\\n  display: flex;\\n  flex-direction: column;\\n  text-align: center;\\n  border-bottom: 4px solid var(--light-violet);\\n}\\n\\n.browser-navigation {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-around;\\n  align-items: center;\\n  padding: 1.5vh 30px;\\n}\\n\\n.browser-navigation img {\\n  width: auto;\\n  height: 43px;\\n}\\n\\n.address-bar {\\n  text-align: left;\\n  box-sizing: border-box;\\n  margin-bottom: 1vh;\\n  padding: 8px;\\n  width: 60vw;\\n  height: 40px;\\n  border: 4px solid var(--light-violet);\\n  background-color: var(--dark-background);\\n  color: var(--light-violet);\\n  font-weight: bold;\\n  border-radius: 10px;\\n}\\n\\n#address {\\n  margin: 0;\\n}\\n\\nheader {\\n  background-color: var(--light-background);\\n  grid-area: header;\\n  margin: 15px 20px;\\n  padding: 5px 0 5px 40px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  border: 3px solid var(--light-violet);\\n  border-radius: 10px;\\n}\\n\\nnav ul li a {\\n  text-decoration: none;\\n}\\n\\n.web-title {\\n  font-family: \\\"Nasalization\\\", sans-serif;\\n  font-size: 2.7rem;\\n  margin: 0 0;\\n}\\n\\n.web-title a {\\n  color: var(--custom-red);\\n}\\n\\n.content {\\n  grid-area: main;\\n  overflow-y: auto;\\n  margin: 0 5vw;\\n}\\n\\n.title {\\n  text-align: center;\\n  font-family: \\\"Nasalization\\\", sans-serif;\\n  font-size: 2.5rem;\\n  margin-bottom: 3vw;\\n}\\n\\n.title-link {\\n  color: var(--light-violet);\\n}\\n\\n.github-link:hover {\\n  color: var(--light-violet);\\n}\\n\\n.item-grid {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  justify-items: center;\\n}\\n\\n.card {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  border: 3px solid #fff;\\n  border-radius: 15px;\\n  width: 25vw;\\n  margin-bottom: 8vh;\\n  animation-name: out;\\n  transition: ease-in-out 0.4s;\\n}\\n\\n.card:hover {\\n  border-color: var(--dark-violet);\\n  transform: scale(1.05);\\n  transition: ease-in-out 0.4s;\\n  animation-name: in;\\n}\\n\\n@keyframes in {\\n  from {\\n    transform: scale(1);\\n  }\\n\\n  to {\\n    transform: scale(1.02);\\n  }\\n}\\n\\n@keyframes out {\\n  from {\\n    transform: scale(1.05);\\n  }\\n\\n  to {\\n    transform: scale(1);\\n  }\\n}\\n\\n.picture {\\n  width: 20vw;\\n  height: 15vw;\\n  border-radius: 15px;\\n  object-fit: cover;\\n  margin-top: 5vh;\\n}\\n\\n.picture:hover {\\n  cursor: pointer;\\n}\\n\\n.video {\\n  width: 20vw;\\n  height: 15vw;\\n  border-radius: 15px;\\n  margin-top: 5vh;\\n}\\n\\n.title-container {\\n  width: 18vw;\\n  text-align: center;\\n  align-items: center;\\n}\\n\\n.card-title {\\n  font-size: 1.4rem;\\n}\\n\\n.card-title:hover {\\n  color: var(--light-violet);\\n  cursor: pointer;\\n}\\n\\n.content-container {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 18vw;\\n  margin-bottom: 3vh;\\n}\\n\\n.likes-container {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.comment-btn {\\n  color: #fff;\\n  background-color: var(--dark-background);\\n  border: 3px solid #fff;\\n  font-family: \\\"Helvetica\\\", sans-serif;\\n  font-weight: bold;\\n  font-size: 1.2rem;\\n}\\n\\n.comment-btn:hover {\\n  color: var(--light-violet);\\n  border-color: var(--light-violet);\\n  cursor: pointer;\\n}\\n\\n.fa-heart {\\n  margin-right: 15px;\\n  font-size: 1.3rem;\\n  color: var(--custom-red);\\n}\\n\\n.fa-heart:hover {\\n  cursor: pointer;\\n}\\n\\nfooter {\\n  grid-area: footer;\\n  border: 3px solid var(--light-violet);\\n  height: 50px;\\n  margin: 15px 20px 15px 20px;\\n  padding-left: 20px;\\n  background-color: var(--light-background);\\n  border-radius: 10px;\\n}\\n\\n@media screen and (max-width: 1200px) {\\n  .browser-navigation img {\\n    display: none;\\n  }\\n}\\n\\n* {\\n  color: #ebebeb;\\n}\\n\\nsection {\\n  margin-bottom: 100px;\\n}\\n\\nheader p {\\n  font-size: 1.2rem;\\n}\\n\\nnav ul li {\\n  list-style-type: none;\\n  display: inline;\\n  padding: 0 20px;\\n  font-size: 1.2rem;\\n}\\n\\nnav ul li:hover {\\n  transform: scale(1.5);\\n}\\n\\n.active-tab {\\n  color: var(--light-violet);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesForComment.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesForComment.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".comment-model {\\n  position: fixed;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  overflow: auto;\\n  z-index: -1;\\n  opacity: 0;\\n  animation: hide 0.25s;\\n  transform: scale(0);\\n}\\n\\n@keyframes hide {\\n  from {\\n    z-index: 2;\\n    transform: scale(1);\\n    opacity: 1;\\n  }\\n\\n  to {\\n    z-index: -1;\\n    transform: scale(0);\\n    opacity: 0;\\n  }\\n}\\n\\n.active {\\n  opacity: 1;\\n  z-index: 2;\\n  animation: show 0.2s;\\n  transform: scale(1);\\n}\\n\\n@keyframes show {\\n  from {\\n    transform: scale(0);\\n    opacity: 0;\\n    z-index: -1;\\n  }\\n\\n  to {\\n    transform: scale(1);\\n    opacity: 1;\\n    z-index: 2;\\n  }\\n}\\n\\n.comment-card {\\n  width: 70%;\\n  margin: 3rem auto;\\n  border: 4px solid #be9ce7;\\n  background-color: #111624;\\n  border-radius: 15px;\\n}\\n\\n.close-icon {\\n  float: right;\\n  margin: 10px 18px;\\n  font-size: 2.5rem;\\n  cursor: pointer;\\n}\\n\\n.close-icon i:hover {\\n  color: red;\\n  transform: scale(1.3);\\n  transition: 0.4s;\\n}\\n\\n.main-description {\\n  padding: 80px 130px;\\n}\\n\\n.mediaImage {\\n  width: 100%;\\n  border-radius: 10px;\\n}\\n\\n.mediaVideo {\\n  width: 100%;\\n  height: 50vh;\\n}\\n\\n::-webkit-scrollbar {\\n  display: none;\\n}\\n\\n.image-title {\\n  text-align: center;\\n  font-size: 2rem;\\n}\\n\\n.image-explanation {\\n  font-style: italic;\\n}\\n\\n.image-date {\\n  float: right;\\n}\\n\\n.comment-card h2 {\\n  text-align: center;\\n}\\n\\nform {\\n  width: 50%;\\n  margin: 0 auto;\\n}\\n\\n.name-input {\\n  outline: none;\\n  color: #111624;\\n  font-size: 1rem;\\n  padding: 10px;\\n  border-radius: 5px;\\n  width: 100%;\\n  border: none;\\n  box-sizing: border-box;\\n  background-color: snow;\\n}\\n\\n.comment-input {\\n  width: 100%;\\n  height: 150px;\\n  outline: none;\\n  padding: 10px;\\n  color: #111624;\\n  border: none;\\n  border-radius: 5px;\\n  font-size: 1rem;\\n  font-family: inherit;\\n  resize: none;\\n  margin: 25px 0;\\n  box-sizing: border-box;\\n  background-color: snow;\\n}\\n\\nform button {\\n  width: 100%;\\n  background-color: #3ac4;\\n  border: none;\\n  font-size: 1.2rem;\\n  padding: 10px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n}\\n\\nform button:hover {\\n  background-color: rgba(64, 214, 255, 0.527);\\n}\\n\\n.comment-message {\\n  margin: 20px auto;\\n  display: block;\\n  padding: 10px 20px;\\n  font-size: 1.5rem;\\n  color: black;\\n  width: 200px;\\n  cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/stylesForComment.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/style.css?");

/***/ }),

/***/ "./src/stylesForComment.css":
/*!**********************************!*\
  !*** ./src/stylesForComment.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_stylesForComment_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./stylesForComment.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesForComment.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_stylesForComment_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_stylesForComment_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_stylesForComment_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_stylesForComment_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/stylesForComment.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards */ \"./src/modules/cards.js\");\n/* harmony import */ var _stylesForComment_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stylesForComment.css */ \"./src/stylesForComment.css\");\n\n\n\n\nwindow.onload = (0,_modules_cards__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/index.js?");

/***/ }),

/***/ "./src/modules/APIcomments.js":
/*!************************************!*\
  !*** ./src/modules/APIcomments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"addComments\": () => (/* binding */ addComments)\n/* harmony export */ });\nconst getComments = async (itemId) => {\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PXvVn75NsImDnwHgqLa4/comments?item_id=${itemId}`);\n  const data = await response.json();\n  return data;\n};\n\nconst addComments = async (username, comment, itemID) => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PXvVn75NsImDnwHgqLa4/comments', {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: itemID,\n      username,\n      comment,\n    }),\n    headers: {\n      'Content-Type': 'application/json; charset=UTF-8',\n    },\n  });\n  return response.text();\n};\n\n\n\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/modules/APIcomments.js?");

/***/ }),

/***/ "./src/modules/GetRequest.js":
/*!***********************************!*\
  !*** ./src/modules/GetRequest.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getPictures)\n/* harmony export */ });\nconst baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=';\nconst key = 'j9gWflgyCduUULTGmKMfahoaNAbzAULMkGGuu9jN';\nconst startDate = '2022-01-25';\nconst endDate = '2022-02-06';\nconst url = `${baseUrl}${key}&start_date=${startDate}&end_date=${endDate}`;\n\nconst getPictures = async () => {\n  const response = await fetch(url);\n  const answer = await response.json();\n  return answer;\n};\n\n\n\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/modules/GetRequest.js?");

/***/ }),

/***/ "./src/modules/cards.js":
/*!******************************!*\
  !*** ./src/modules/cards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createCards)\n/* harmony export */ });\n/* harmony import */ var _GetRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetRequest */ \"./src/modules/GetRequest.js\");\n/* harmony import */ var _involvementApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involvementApp */ \"./src/modules/involvementApp.js\");\n/* harmony import */ var _showCommentsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showCommentsCard */ \"./src/modules/showCommentsCard.js\");\n/* harmony import */ var _count__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./count */ \"./src/modules/count.js\");\n\n\n // eslint-disable-line import/no-cycle\n\n\nconst itemGrid = document.querySelector('.item-grid');\n\nconst createCards = async () => {\n  const myPictures = await (0,_GetRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  myPictures.forEach((item, i) => {\n    const card = document.createElement('div');\n    card.classList.add('card');\n\n    if (item.media_type === 'image') {\n      const media = document.createElement('img');\n      media.classList.add('picture');\n      media.src = item.url;\n      card.appendChild(media);\n      media.addEventListener('click', async () => {\n        await (0,_showCommentsCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(item.title);\n        const modal = document.querySelector('.comment-model');\n        modal.classList.add('active');\n      });\n    } else {\n      const media = document.createElement('iframe');\n      media.classList.add('video');\n      media.src = item.url;\n      card.appendChild(media);\n    }\n\n    const titleContainer = document.createElement('div');\n    titleContainer.classList.add('title-container');\n\n    const cardTitle = document.createElement('h3');\n    cardTitle.textContent = item.title;\n    cardTitle.classList.add('card-title');\n\n    const contentContainer = document.createElement('div');\n    contentContainer.classList.add('content-container');\n\n    const likesContainer = document.createElement('div');\n    likesContainer.classList.add('likes-container');\n\n    const love = document.createElement('i');\n    love.classList.add('fas', 'fa-heart');\n    love.setAttribute('index', `${i}`);\n    likesContainer.appendChild(love);\n\n    const likes = document.createElement('p');\n    likes.textContent = '0 likes';\n\n    const likeNumber = async () => {\n      const itemLikes = await (0,_involvementApp__WEBPACK_IMPORTED_MODULE_1__.getLikes)();\n      itemLikes.forEach((like) => {\n        if (like.item_id === `picture-${i}`) {\n          likes.textContent = '';\n          likes.classList.add('like-number');\n          likes.textContent = `${like.likes} likes`;\n        }\n      });\n    };\n\n    love.addEventListener('click', async () => {\n      await (0,_involvementApp__WEBPACK_IMPORTED_MODULE_1__.postLike)(`picture-${i}`);\n      likeNumber();\n    });\n\n    likeNumber();\n    likesContainer.appendChild(likes);\n\n    const comment = document.createElement('button');\n    comment.classList.add('comment-btn');\n    comment.type = 'button';\n    comment.setAttribute('title', `${item.title}`);\n    comment.innerText = 'Comments';\n\n    comment.addEventListener('click', async () => {\n      await (0,_showCommentsCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(item.title);\n      const modal = document.querySelector('.comment-model');\n      modal.classList.add('active');\n    });\n\n    titleContainer.appendChild(cardTitle);\n    titleContainer.appendChild(contentContainer);\n    contentContainer.appendChild(likesContainer);\n    contentContainer.appendChild(comment);\n    card.appendChild(titleContainer);\n    card.setAttribute('index', `${i}`);\n    itemGrid.appendChild(card);\n  });\n\n  const counter = document.getElementById('picture-counter');\n  if (myPictures.length === 0) {\n    counter.textContent = 0;\n  } else {\n    counter.textContent = (0,_count__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  }\n};\n\n\n\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/modules/cards.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayComments)\n/* harmony export */ });\n/* harmony import */ var _APIcomments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APIcomments */ \"./src/modules/APIcomments.js\");\n\n\nconst displayComments = async (userID) => {\n  const comments = await (0,_APIcomments__WEBPACK_IMPORTED_MODULE_0__.getComments)(userID);\n\n  if (comments.length === undefined) {\n    const commentCounter = document.querySelector('.comment-counter');\n    commentCounter.innerHTML = '(0)';\n  } else {\n    comments.forEach((comment) => {\n      const commentContainer = document.querySelector('.comment-container');\n\n      const li = document.createElement('li');\n      li.classList.add('single-comment');\n      const time = document.createElement('span');\n      time.classList.add('comment-time');\n      time.innerText = `${comment.creation_date}, `;\n\n      const author = document.createElement('span');\n      author.classList.add('comment-author');\n      author.innerText = `${comment.username}: `;\n\n      const message = document.createElement('span');\n      message.classList.add('commentMsg');\n      message.innerText = comment.comment;\n\n      li.append(time, author, message);\n      commentContainer.appendChild(li);\n    });\n  }\n};\n\n\n\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/count.js":
/*!******************************!*\
  !*** ./src/modules/count.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countCards = () => {\n  const myArray = document.querySelectorAll('.card');\n  const count = myArray.length;\n  return count;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countCards);\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/modules/count.js?");

/***/ }),

/***/ "./src/modules/countComments.js":
/*!**************************************!*\
  !*** ./src/modules/countComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countComments = () => {\n  const allComments = document.querySelectorAll('.single-comment').length;\n  return allComments;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComments);\n\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/modules/countComments.js?");

/***/ }),

/***/ "./src/modules/involvementApp.js":
/*!***************************************!*\
  !*** ./src/modules/involvementApp.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postLike\": () => (/* binding */ postLike),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes)\n/* harmony export */ });\nconst postLike = async (itemId) => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PXvVn75NsImDnwHgqLa4/likes/', {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: itemId,\n    }),\n    headers: {\n      'Content-Type': 'application/json; charset=UTF-8',\n    },\n  });\n  return response.text();\n};\n\nconst getLikes = async () => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PXvVn75NsImDnwHgqLa4/likes/');\n  const data = await response.json();\n  return data;\n};\n\n\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/modules/involvementApp.js?");

/***/ }),

/***/ "./src/modules/showCommentsCard.js":
/*!*****************************************!*\
  !*** ./src/modules/showCommentsCard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showCommentCard)\n/* harmony export */ });\n/* harmony import */ var _GetRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetRequest */ \"./src/modules/GetRequest.js\");\n/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments */ \"./src/modules/comments.js\");\n/* harmony import */ var _APIcomments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./APIcomments */ \"./src/modules/APIcomments.js\");\n/* harmony import */ var _countComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countComments */ \"./src/modules/countComments.js\");\n\n\n\n\n\nconst showCommentCard = async (title) => {\n  const myPicturesJson = await (0,_GetRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const stringifiedJson = JSON.stringify(myPicturesJson);\n  const myPictures = JSON.parse(stringifiedJson);\n\n  myPictures.forEach((element, index) => {\n    if (element.title === title) {\n      const commentModel = document.querySelector('.comment-model');\n      const commentCard = document.createElement('div');\n      commentCard.classList.add('comment-card');\n      commentCard.setAttribute('index', index);\n\n      const closeIcon = document.createElement('div');\n      closeIcon.classList.add('close-icon');\n      const icon = document.createElement('i');\n      icon.classList.add('fas', 'fa-times');\n      closeIcon.appendChild(icon);\n\n      const closeClick = () => {\n        commentModel.classList.remove('active');\n        commentModel.innerHTML = '';\n      };\n\n      closeIcon.addEventListener('click', closeClick);\n\n      const mainDescription = document.createElement('div');\n      mainDescription.classList.add('main-description');\n\n      if (element.media_type === 'image') {\n        const media = document.createElement('img');\n        media.classList.add('mediaImage');\n        media.src = element.url;\n        mainDescription.appendChild(media);\n      } else {\n        const media = document.createElement('iframe');\n        media.classList.add('mediaVideo');\n        media.src = element.url;\n        mainDescription.appendChild(media);\n      }\n      const h1 = document.createElement('h1');\n      h1.classList.add('image-title');\n      h1.innerText = element.title;\n\n      const explanation = document.createElement('p');\n      explanation.classList.add('image-explanation');\n      explanation.innerText = element.explanation;\n\n      const extraExplanation = document.createElement('p');\n      const copyright = document.createElement('span');\n      copyright.classList.add('copyright');\n      copyright.innerText = `By ${element.copyright ?? 'Anonymous'}`;\n\n      const imageDate = document.createElement('span');\n      imageDate.classList.add('image-date');\n      imageDate.innerText = `${element.date}`;\n      extraExplanation.append(copyright, imageDate);\n\n      const h2 = document.createElement('h2');\n      h2.innerText = 'Comments ';\n      const commentCounter = document.createElement('span');\n      commentCounter.classList.add('comment-counter');\n\n      h2.appendChild(commentCounter);\n\n      const commentContainer = document.createElement('ul');\n      commentContainer.classList.add('comment-container');\n\n      const commentTitle = document.createElement('h2');\n      commentTitle.innerText = 'Add a comment';\n\n      const form = document.createElement('form');\n      form.innerHTML = `\n          <input type=\"text\" placeholder=\"Your name\" class=\"name-input\" required autocomplete=\"off\" />\n          <textarea name=\"comment-input\" class=\"comment-input\" placeholder=\"Your insights...\" required></textarea>\n          <button type=\"submit\">Comment</button>\n          `;\n\n      mainDescription.append(h1, explanation, extraExplanation, h2, commentContainer, commentTitle, form); // eslint-disable-line max-len\n      commentCard.append(closeIcon, mainDescription);\n      commentModel.appendChild(commentCard);\n\n      form.addEventListener('submit', async (event) => {\n        event.preventDefault();\n        commentContainer.innerHTML = '';\n\n        const username = document.querySelector('.name-input').value;\n        const commentMessage = document.querySelector('.comment-input').value;\n        const userID = commentCard.getAttribute('index');\n\n        await (0,_APIcomments__WEBPACK_IMPORTED_MODULE_2__.addComments)(username, commentMessage, userID);\n        await (0,_comments__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(userID);\n\n        form.reset();\n\n        const counter = document.querySelector('.comment-counter');\n        counter.innerText = `(${(0,_countComments__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()})`;\n      });\n    }\n  });\n\n  const commentCard = document.querySelector('.comment-card');\n  const userID = commentCard.getAttribute('index');\n  await (0,_comments__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(userID);\n\n  const commentCounter = document.querySelector('.comment-counter');\n  commentCounter.innerText = `(${(0,_countComments__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()})`;\n};\n\n\n\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/modules/showCommentsCard.js?");

/***/ }),

/***/ "./src/assets/Helvetica-Font/Helvetica.ttf":
/*!*************************************************!*\
  !*** ./src/assets/Helvetica-Font/Helvetica.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"06113bf748ae7dc33e05.ttf\";\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/assets/Helvetica-Font/Helvetica.ttf?");

/***/ }),

/***/ "./src/assets/nasalization-cufonfonts-webfont/nasalization rg.woff":
/*!*************************************************************************!*\
  !*** ./src/assets/nasalization-cufonfonts-webfont/nasalization rg.woff ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"329b50bddebde6dc070b.woff\";\n\n//# sourceURL=webpack://AstronomyPictureOfTheDay/./src/assets/nasalization-cufonfonts-webfont/nasalization_rg.woff?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;