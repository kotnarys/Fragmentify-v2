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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _Contract_SplitContract_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contract/SplitContract.js */ \"./components/Contract/SplitContract.js\");\n\n\n\n\nfunction SplitButton(param) {\n    let { address , setIsVisible  } = param;\n    async function handleSplit() {\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.BrowserProvider(window.ethereum);\n        const signer = await provider.getSigner();\n        const splitb = _Contract_SplitContract_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].connect(signer);\n        try {\n            splitb.balanceOf(address);\n            await splitb.split(\"0x8F3A64D4cB8FEf31c57b27427F8FE922965F55A4\", 1000, 500, 10000, 0, \"hrom\", \"hda\", 1);\n            console.log(\"splt succses\");\n        } catch (error) {\n            console.log(address);\n            console.error(error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"greenbtn\",\n            onClick: handleSplit,\n            children: \"SPLIT\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitButton.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = SplitButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SplitButton);\nvar _c;\n$RefreshReg$(_c, \"SplitButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NwbGl0QnV0dG9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRWU7QUFFTztBQUVoRCxTQUFTRyxZQUFZLEtBQXlCLEVBQUU7UUFBM0IsRUFBRUMsUUFBTyxFQUFFQyxhQUFZLEVBQUUsR0FBekI7SUFDbkIsZUFBZUMsY0FBYztRQUMzQixNQUFNQyxXQUFXLElBQUlOLG1EQUFlQSxDQUFDTyxPQUFPQyxRQUFRO1FBQ3BELE1BQU1DLFNBQVMsTUFBTUgsU0FBU0ksU0FBUztRQUN2QyxNQUFNQyxTQUFTViwwRUFBYSxDQUFDUTtRQUU3QixJQUFJO1lBQ0ZFLE9BQU9FLFNBQVMsQ0FBQ1Y7WUFDakIsTUFBTVEsT0FBT1YsS0FBSyxDQUNoQiw4Q0FDQSxNQUNBLEtBQ0EsT0FDQSxHQUNBLFFBQ0EsT0FDQTtZQUVGYSxRQUFRQyxHQUFHLENBQUM7UUFDZCxFQUFFLE9BQU9DLE9BQU87WUFDZEYsUUFBUUMsR0FBRyxDQUFDWjtZQUNaVyxRQUFRRSxLQUFLLENBQUNBO1FBQ2hCO0lBQ0Y7SUFDQSxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBT0MsV0FBVTtZQUFXQyxTQUFTZDtzQkFBYTs7Ozs7OztBQUt6RDtLQS9CU0g7QUFpQ1QsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcGxpdEJ1dHRvbi5qcz80ZDJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IEJyb3dzZXJQcm92aWRlciB9IGZyb20gXCJldGhlcnNcIjtcclxuXHJcbmltcG9ydCBzcGxpdCBmcm9tIFwiLi9Db250cmFjdC9TcGxpdENvbnRyYWN0LmpzXCI7XHJcblxyXG5mdW5jdGlvbiBTcGxpdEJ1dHRvbih7IGFkZHJlc3MsIHNldElzVmlzaWJsZSB9KSB7XHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3BsaXQoKSB7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBCcm93c2VyUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcclxuICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgY29uc3Qgc3BsaXRiID0gc3BsaXQuY29ubmVjdChzaWduZXIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHNwbGl0Yi5iYWxhbmNlT2YoYWRkcmVzcyk7XHJcbiAgICAgIGF3YWl0IHNwbGl0Yi5zcGxpdChcclxuICAgICAgICBcIjB4OEYzQTY0RDRjQjhGRWYzMWM1N2IyNzQyN0Y4RkU5MjI5NjVGNTVBNFwiLFxyXG4gICAgICAgIDEwMDAsXHJcbiAgICAgICAgNTAwLFxyXG4gICAgICAgIDEwMDAwLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgXCJocm9tXCIsXHJcbiAgICAgICAgXCJoZGFcIixcclxuICAgICAgICAxXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3BsdCBzdWNjc2VzXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coYWRkcmVzcyk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJncmVlbmJ0blwiIG9uQ2xpY2s9e2hhbmRsZVNwbGl0fT5cclxuICAgICAgICBTUExJVFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwbGl0QnV0dG9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCcm93c2VyUHJvdmlkZXIiLCJzcGxpdCIsIlNwbGl0QnV0dG9uIiwiYWRkcmVzcyIsInNldElzVmlzaWJsZSIsImhhbmRsZVNwbGl0IiwicHJvdmlkZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInNpZ25lciIsImdldFNpZ25lciIsInNwbGl0YiIsImNvbm5lY3QiLCJiYWxhbmNlT2YiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SplitButton.js\n"));

/***/ })

});