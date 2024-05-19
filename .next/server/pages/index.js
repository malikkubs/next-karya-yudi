"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/component/BottomNav.tsx":
/*!*************************************!*\
  !*** ./src/component/BottomNav.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BottomNav)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/BottomNavigation */ \"@material-ui/core/BottomNavigation\");\n/* harmony import */ var _material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/BottomNavigationAction */ \"@material-ui/core/BottomNavigationAction\");\n/* harmony import */ var _material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_Restore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Restore */ \"@material-ui/icons/Restore\");\n/* harmony import */ var _material_ui_icons_Restore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Restore__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Favorite */ \"@material-ui/icons/Favorite\");\n/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ \"@material-ui/icons/LocationOn\");\n/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction BottomNav({ url  }) {\n    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(url);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_2___default()), {\n        value: value,\n        onChange: (event, newValue)=>{\n            // setValue(newValue);\n            console.log(\"====================================\");\n            console.log(newValue);\n            console.log(\"====================================\");\n        },\n        showLabels: true,\n        className: \"bottomnav\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3___default()), {\n                label: \"Recents\",\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Restore__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, void 0, void 0)\n            }, void 0, false, {\n                fileName: \"C:\\\\MyProject\\\\NextJs\\\\next-bg-app\\\\src\\\\component\\\\BottomNav.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3___default()), {\n                label: \"Favorites\",\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, void 0, void 0)\n            }, void 0, false, {\n                fileName: \"C:\\\\MyProject\\\\NextJs\\\\next-bg-app\\\\src\\\\component\\\\BottomNav.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3___default()), {\n                label: \"Nearby\",\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, void 0, void 0)\n            }, void 0, false, {\n                fileName: \"C:\\\\MyProject\\\\NextJs\\\\next-bg-app\\\\src\\\\component\\\\BottomNav.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3___default()), {\n                label: \"Favorites\",\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, void 0, void 0)\n            }, void 0, false, {\n                fileName: \"C:\\\\MyProject\\\\NextJs\\\\next-bg-app\\\\src\\\\component\\\\BottomNav.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3___default()), {\n                label: \"Nearby\",\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, void 0, void 0)\n            }, void 0, false, {\n                fileName: \"C:\\\\MyProject\\\\NextJs\\\\next-bg-app\\\\src\\\\component\\\\BottomNav.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\MyProject\\\\NextJs\\\\next-bg-app\\\\src\\\\component\\\\BottomNav.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L0JvdHRvbU5hdi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUM7QUFDeUI7QUFDWTtBQUN6QjtBQUNFO0FBQ0k7QUFHNUMsU0FBU00sVUFBVSxFQUFFQyxJQUFHLEVBQUUsRUFBRTtJQUN6QyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1QscURBQWMsQ0FBQ087SUFFekMscUJBQ0UsOERBQUNOLDJFQUFnQkE7UUFDZk8sT0FBT0E7UUFDUEcsVUFBVSxDQUFDQyxPQUFPQyxXQUFxQjtZQUNyQyxzQkFBc0I7WUFDdEJDLFFBQVFDLEdBQUcsQ0FBQztZQUNaRCxRQUFRQyxHQUFHLENBQUNGO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQztRQUNkO1FBQ0FDLFVBQVU7UUFDVkMsV0FBVTs7MEJBRVYsOERBQUNmLGlGQUFzQkE7Z0JBQUNnQixPQUFNO2dCQUFVQyxvQkFBTSw4REFBQ2hCLG1FQUFXQTs7Ozs7OzBCQUMxRCw4REFBQ0QsaUZBQXNCQTtnQkFBQ2dCLE9BQU07Z0JBQVlDLG9CQUFNLDhEQUFDZixvRUFBWUE7Ozs7OzswQkFDN0QsOERBQUNGLGlGQUFzQkE7Z0JBQUNnQixPQUFNO2dCQUFTQyxvQkFBTSw4REFBQ2Qsc0VBQWNBOzs7Ozs7MEJBQzVELDhEQUFDSCxpRkFBc0JBO2dCQUFDZ0IsT0FBTTtnQkFBWUMsb0JBQU0sOERBQUNmLG9FQUFZQTs7Ozs7OzBCQUM3RCw4REFBQ0YsaUZBQXNCQTtnQkFBQ2dCLE9BQU07Z0JBQVNDLG9CQUFNLDhEQUFDZCxzRUFBY0E7Ozs7Ozs7Ozs7OztBQUdsRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF0ZXJpYWx1aV9uZXh0Ly4vc3JjL2NvbXBvbmVudC9Cb3R0b21OYXYudHN4PzZmYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQm90dG9tTmF2aWdhdGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm90dG9tTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgQm90dG9tTmF2aWdhdGlvbkFjdGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm90dG9tTmF2aWdhdGlvbkFjdGlvblwiO1xyXG5pbXBvcnQgUmVzdG9yZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9SZXN0b3JlXCI7XHJcbmltcG9ydCBGYXZvcml0ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZVwiO1xyXG5pbXBvcnQgTG9jYXRpb25Pbkljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Mb2NhdGlvbk9uXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3R0b21OYXYoeyB1cmwgfSkge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUodXJsKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3R0b21OYXZpZ2F0aW9uXHJcbiAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgb25DaGFuZ2U9eyhldmVudCwgbmV3VmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIC8vIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdWYWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIik7XHJcbiAgICAgIH19XHJcbiAgICAgIHNob3dMYWJlbHNcclxuICAgICAgY2xhc3NOYW1lPVwiYm90dG9tbmF2XCJcclxuICAgID5cclxuICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gbGFiZWw9XCJSZWNlbnRzXCIgaWNvbj17PFJlc3RvcmVJY29uIC8+fSAvPlxyXG4gICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIkZhdm9yaXRlc1wiIGljb249ezxGYXZvcml0ZUljb24gLz59IC8+XHJcbiAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPVwiTmVhcmJ5XCIgaWNvbj17PExvY2F0aW9uT25JY29uIC8+fSAvPlxyXG4gICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIkZhdm9yaXRlc1wiIGljb249ezxGYXZvcml0ZUljb24gLz59IC8+XHJcbiAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPVwiTmVhcmJ5XCIgaWNvbj17PExvY2F0aW9uT25JY29uIC8+fSAvPlxyXG4gICAgPC9Cb3R0b21OYXZpZ2F0aW9uPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm90dG9tTmF2aWdhdGlvbiIsIkJvdHRvbU5hdmlnYXRpb25BY3Rpb24iLCJSZXN0b3JlSWNvbiIsIkZhdm9yaXRlSWNvbiIsIkxvY2F0aW9uT25JY29uIiwiQm90dG9tTmF2IiwidXJsIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwib25DaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwiY29uc29sZSIsImxvZyIsInNob3dMYWJlbHMiLCJjbGFzc05hbWUiLCJsYWJlbCIsImljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/component/BottomNav.tsx\n");

/***/ }),

/***/ "./src/component/Layout.tsx":
/*!**********************************!*\
  !*** ./src/component/Layout.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _BottomNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BottomNav */ \"./src/component/BottomNav.tsx\");\n\n\n\n\n\nfunction Layout({ children  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const url = router.pathname;\n    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(0);\n    console.log(\"====================================\");\n    console.log(url);\n    console.log(\"====================================\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {\n        container: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\MyProject\\\\NextJs\\\\next-bg-app\\\\src\\\\component\\\\Layout.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BottomNav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                url: url\n            }, void 0, false, {\n                fileName: \"C:\\\\MyProject\\\\NextJs\\\\next-bg-app\\\\src\\\\component\\\\Layout.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\MyProject\\\\NextJs\\\\next-bg-app\\\\src\\\\component\\\\Layout.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L0xheW91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXlDO0FBQ0Q7QUFDQztBQUNMO0FBQ3BDLFNBQVNJLE9BQU8sRUFBRUMsU0FBUSxFQUFFLEVBQUU7SUFDNUIsTUFBTUMsU0FBU0wsc0RBQVNBO0lBQ3hCLE1BQU1NLE1BQU1ELE9BQU9FLFFBQVE7SUFDM0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdSLHFEQUFjLENBQUM7SUFFekNVLFFBQVFDLEdBQUcsQ0FBQztJQUNaRCxRQUFRQyxHQUFHLENBQUNOO0lBQ1pLLFFBQVFDLEdBQUcsQ0FBQztJQUNaLHFCQUNFLDhEQUFDYixtREFBSUE7UUFBQ2MsU0FBUzs7MEJBQ2IsOERBQUNkLG1EQUFJQTswQkFBRUs7Ozs7OzswQkFDUCw4REFBQ0Ysa0RBQVNBO2dCQUFDSSxLQUFLQTs7Ozs7Ozs7Ozs7O0FBR3RCO0FBRUEsaUVBQWVILE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRlcmlhbHVpX25leHQvLi9zcmMvY29tcG9uZW50L0xheW91dC50c3g/MTM2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCb3R0b21OYXYgZnJvbSBcIi4vQm90dG9tTmF2XCI7XHJcbmZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB1cmwgPSByb3V0ZXIucGF0aG5hbWU7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIik7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICA8R3JpZD57Y2hpbGRyZW59PC9HcmlkPlxyXG4gICAgICA8Qm90dG9tTmF2IHVybD17dXJsfSAvPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sIm5hbWVzIjpbIkdyaWQiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsIkJvdHRvbU5hdiIsIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVyIiwidXJsIiwicGF0aG5hbWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/component/Layout.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_component_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/component/Layout */ \"./src/component/Layout.tsx\");\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_component_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"test\"\n        }, void 0, false, {\n            fileName: \"C:\\\\MyProject\\\\NextJs\\\\next-bg-app\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\MyProject\\\\NextJs\\\\next-bg-app\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ3NCO0FBRWhELFNBQVNFLE9BQU87SUFDZCxxQkFDRSw4REFBQ0QsNkRBQU1BO2tCQUNMLDRFQUFDRTtzQkFBRTs7Ozs7Ozs7Ozs7QUFHVDtBQUVBLGlFQUFlRCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF0ZXJpYWx1aV9uZXh0Ly4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudC9MYXlvdXRcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxwPnRlc3Q8L3A+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJIb21lIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/BottomNavigation":
/*!*****************************************************!*\
  !*** external "@material-ui/core/BottomNavigation" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/BottomNavigation");

/***/ }),

/***/ "@material-ui/core/BottomNavigationAction":
/*!***********************************************************!*\
  !*** external "@material-ui/core/BottomNavigationAction" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/BottomNavigationAction");

/***/ }),

/***/ "@material-ui/icons/Favorite":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "@material-ui/icons/LocationOn":
/*!************************************************!*\
  !*** external "@material-ui/icons/LocationOn" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/LocationOn");

/***/ }),

/***/ "@material-ui/icons/Restore":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Restore" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Restore");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();