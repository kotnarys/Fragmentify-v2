"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Index",{

/***/ "./components/SplitButton.js":
/*!***********************************!*\
  !*** ./components/SplitButton.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n\n\n\nfunction SplitButton() {\n    async function handleSplitClick() {\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.BrowserProvider(window.ethereum);\n        const signer = await provider.getSigner();\n        const splitb = split.connect(signer);\n        try {\n            const aprove = await splitb.approve(\"0x2885CaDfAa67Bfa3A96961de436B1276A1d36701\", 0);\n            aprove.wait();\n            await splitb.split(\"0xe20c22146e9456fefde9304922a071cc1d7efb6b\", 100, 50, 1000, 0, \"hrmo\", \"HFX\", 1);\n            console.log(\"splt succses\");\n        } catch (error) {\n            console.error(error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"greenbtn\",\n            onClick: handleSplitClick,\n            children: \"SPLIT\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitButton.js\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = SplitButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SplitButton);\nvar _c;\n$RefreshReg$(_c, \"SplitButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NwbGl0QnV0dG9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFFZTtBQUV6QyxTQUFTRSxjQUFjO0lBQ3JCLGVBQWVDLG1CQUFtQjtRQUNoQyxNQUFNQyxXQUFXLElBQUlILG1EQUFlQSxDQUFDSSxPQUFPQyxRQUFRO1FBQ3BELE1BQU1DLFNBQVMsTUFBTUgsU0FBU0ksU0FBUztRQUN2QyxNQUFNQyxTQUFTQyxNQUFNQyxPQUFPLENBQUNKO1FBRTdCLElBQUk7WUFDRixNQUFNSyxTQUFTLE1BQU1ILE9BQU9JLE9BQU8sQ0FDakMsOENBQ0E7WUFFRkQsT0FBT0UsSUFBSTtZQUNYLE1BQU1MLE9BQU9DLEtBQUssQ0FDaEIsOENBQ0EsS0FDQSxJQUNBLE1BQ0EsR0FDQSxRQUNBLE9BQ0E7WUFVRkssUUFBUUMsR0FBRyxDQUFDO1FBQ2QsRUFBRSxPQUFPQyxPQUFPO1lBQ2RGLFFBQVFFLEtBQUssQ0FBQ0E7UUFDaEI7SUFDRjtJQUNBLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFPQyxXQUFVO1lBQVdDLFNBQVNqQjtzQkFBa0I7Ozs7Ozs7QUFLOUQ7S0ExQ1NEO0FBNENULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3BsaXRCdXR0b24uanM/NGQyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBCcm93c2VyUHJvdmlkZXIgfSBmcm9tIFwiZXRoZXJzXCI7XHJcblxyXG5mdW5jdGlvbiBTcGxpdEJ1dHRvbigpIHtcclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTcGxpdENsaWNrKCkge1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgQnJvd3NlclByb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuICAgIGNvbnN0IHNwbGl0YiA9IHNwbGl0LmNvbm5lY3Qoc2lnbmVyKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBhcHJvdmUgPSBhd2FpdCBzcGxpdGIuYXBwcm92ZShcclxuICAgICAgICBcIjB4Mjg4NUNhRGZBYTY3QmZhM0E5Njk2MWRlNDM2QjEyNzZBMWQzNjcwMVwiLFxyXG4gICAgICAgIDBcclxuICAgICAgKTtcclxuICAgICAgYXByb3ZlLndhaXQoKTtcclxuICAgICAgYXdhaXQgc3BsaXRiLnNwbGl0KFxyXG4gICAgICAgIFwiMHhlMjBjMjIxNDZlOTQ1NmZlZmRlOTMwNDkyMmEwNzFjYzFkN2VmYjZiXCIsXHJcbiAgICAgICAgMTAwLFxyXG4gICAgICAgIDUwLFxyXG4gICAgICAgIDEwMDAsXHJcbiAgICAgICAgMCxcclxuICAgICAgICBcImhybW9cIixcclxuICAgICAgICBcIkhGWFwiLFxyXG4gICAgICAgIDFcclxuICAgICAgICAvKiAgIEVSQzcyMSBuZnRDb250cmFjdCwgXHJcbiAgICAgICAgdWludCBfbWF4VG9rZW5TdXBwbHksXHJcbiAgICAgICAgdWludDI1NiBfbWluUmVzZXJ2ZWRUb2tlbixcclxuICAgICAgICB1aW50MjU2IHByaWNlLFxyXG4gICAgICAgIHVpbnQyNTYgdG9rZW5JZCxcclxuICAgICAgICBzdHJpbmcgbWVtb3J5IG5hbWUsXHJcbiAgICAgICAgc3RyaW5nIG1lbW9yeSBzeW1ib2wsXHJcbiAgICAgICAgdWludCBfZGF5Q291bnQgKi9cclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS5sb2coXCJzcGx0IHN1Y2NzZXNcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ3JlZW5idG5cIiBvbkNsaWNrPXtoYW5kbGVTcGxpdENsaWNrfT5cclxuICAgICAgICBTUExJVFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwbGl0QnV0dG9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCcm93c2VyUHJvdmlkZXIiLCJTcGxpdEJ1dHRvbiIsImhhbmRsZVNwbGl0Q2xpY2siLCJwcm92aWRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwic3BsaXRiIiwic3BsaXQiLCJjb25uZWN0IiwiYXByb3ZlIiwiYXBwcm92ZSIsIndhaXQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SplitButton.js\n"));

/***/ })

});