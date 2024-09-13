"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[601],{

/***/ 156:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(719);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);




const instance=axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  base:'http://localhost:3000'
})
console.log(instance)
const input=document.querySelector('input')
input.type='date'
console.log("production")

/***/ }),

/***/ 719:
/***/ ((module) => {

module.exports = axios;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(156));
/******/ }
]);