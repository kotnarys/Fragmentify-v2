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

/***/ "./components/SplitModal.js":
/*!**********************************!*\
  !*** ./components/SplitModal.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SplitButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SplitButton */ \"./components/SplitButton.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction SplitModal(param) {\n    let { isVisible , onClose , nftContractAddress  } = param;\n    _s();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [piecePrice, setPiecePrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [period, setPeriod] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [fractionCount, setFractionCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    if (!isVisible) return null;\n    function handleClose(e) {\n        if (e.target.id == \"wrapper\") onClose();\n    }\n    function handleFormSplitSubmit(e) {\n        e.preventDefault();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center \",\n        id: \"wrapper\",\n        onClick: handleClose,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-[1000px] flex flex-col \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>onClose(),\n                    className: \"text-white text-xl place-self-end\",\n                    children: \"Х\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-modalbg p2 rounded \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-[800px] text-black\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-center text-white font-lalezar text-5xl\",\n                                    children: \"SPLIT\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    className: \"flex items-center justify-center h-[640px]\",\n                                    onSubmit: handleFormSplitSubmit,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-center \",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    value: count,\n                                                    onChange: (e)=>setCount(e.target.value),\n                                                    htmlFor: \"Count\",\n                                                    className: \"text-xl m-5 font-lalezar flex flex-col items-center bg-nftbg w-72 text-black rounded-full\",\n                                                    children: [\n                                                        \"COUNT:\",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            id: \"Count\",\n                                                            className: \" h-5 bg-nftbg w-40 text-black text-center\",\n                                                            placeholder: \"1-99999\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                                            lineNumber: 53,\n                                                            columnNumber: 21\n                                                        }, this),\n                                                        \"\\xa0\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    value: piecePrice,\n                                                    onChange: (e)=>setPiecePrice(e.target.value),\n                                                    htmlFor: \"PiecePrice\",\n                                                    className: \"text-xl m-5 font-lalezar flex flex-col items-center bg-nftbg w-72 text-black rounded-full\",\n                                                    children: [\n                                                        \"PiecePrice:\",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            id: \"PiecePrice\",\n                                                            className: \" h-5 bg-nftbg w-40 text-black text-center\",\n                                                            placeholder: \"ETH\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                                            lineNumber: 68,\n                                                            columnNumber: 21\n                                                        }, this),\n                                                        \"\\xa0\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    value: period,\n                                                    onChange: (e)=>setPeriod(e.target.value),\n                                                    htmlFor: \"Period\",\n                                                    className: \"text-xl m-5 font-lalezar flex flex-col items-center bg-nftbg w-72 text-black rounded-full\",\n                                                    children: [\n                                                        \"Period:\",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            id: \"Period\",\n                                                            className: \" h-5 bg-nftbg w-40 text-black text-center\",\n                                                            placeholder: \"Hours\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                                            lineNumber: 83,\n                                                            columnNumber: 21\n                                                        }, this),\n                                                        \"\\xa0\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    value: fractionCount,\n                                                    onChange: (e)=>setFractionCount(e.target.value),\n                                                    htmlFor: \"Fraction count\",\n                                                    className: \"text-xl m-5 font-lalezar flex flex-col items-center bg-nftbg w-72 text-black rounded-full\",\n                                                    children: [\n                                                        \"Fraction count:\",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            id: \"1-99999\",\n                                                            className: \" h-5 bg-nftbg w-40 text-black text-center\",\n                                                            placeholder: \"ETH\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                                            lineNumber: 98,\n                                                            columnNumber: 21\n                                                        }, this),\n                                                        \"\\xa0\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SplitButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                    nftContractAddress: nftContractAddress,\n                                                    fractionCount: fractionCount,\n                                                    period: period,\n                                                    piecePrice: piecePrice,\n                                                    count: count\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                                    lineNumber: 105,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/NFT_2.jpg\",\n                                            className: \"w-[450px] ml-60\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                            lineNumber: 113,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(SplitModal, \"fFG6SxCo+M901ZBxPvkS9XbyLSA=\");\n_c = SplitModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SplitModal);\nvar _c;\n$RefreshReg$(_c, \"SplitModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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anM/YWU5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBTcGxpdEJ1dHRvbiBmcm9tIFwiLi9TcGxpdEJ1dHRvblwiO1xyXG5cclxuZnVuY3Rpb24gU3BsaXRNb2RhbCh7IGlzVmlzaWJsZSwgb25DbG9zZSwgbmZ0Q29udHJhY3RBZGRyZXNzIH0pIHtcclxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwaWVjZVByaWNlLCBzZXRQaWVjZVByaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwZXJpb2QsIHNldFBlcmlvZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZnJhY3Rpb25Db3VudCwgc2V0RnJhY3Rpb25Db3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgaWYgKCFpc1Zpc2libGUpIHJldHVybiBudWxsO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZShlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuaWQgPT0gXCJ3cmFwcGVyXCIpIG9uQ2xvc2UoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZvcm1TcGxpdFN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktMjUgYmFja2Ryb3AtYmx1ci1zbSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBcIlxyXG4gICAgICBpZD1cIndyYXBwZXJcIlxyXG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVsxMDAwcHhdIGZsZXggZmxleC1jb2wgXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbG9zZSgpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsIHBsYWNlLXNlbGYtZW5kXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICDQpVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbW9kYWxiZyBwMiByb3VuZGVkIFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVs4MDBweF0gdGV4dC1ibGFja1wiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGZvbnQtbGFsZXphciB0ZXh0LTV4bFwiPlxyXG4gICAgICAgICAgICAgICAgU1BMSVRcclxuICAgICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtWzY0MHB4XVwiXHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlRm9ybVNwbGl0U3VibWl0fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvdW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiQ291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgbS01ICBmb250LWxhbGV6YXIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctbmZ0Ymcgdy03MiB0ZXh0LWJsYWNrIHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDT1VOVDpcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiQ291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGgtNSBiZy1uZnRiZyB3LTQwIHRleHQtYmxhY2sgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxLTk5OTk5XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIMKgXHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGllY2VQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBpZWNlUHJpY2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJQaWVjZVByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIG0tNSAgZm9udC1sYWxlemFyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLW5mdGJnIHctNzIgdGV4dC1ibGFjayByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUGllY2VQcmljZTpcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUGllY2VQcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgaC01IGJnLW5mdGJnIHctNDAgdGV4dC1ibGFjayB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVUSFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICDCoFxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BlcmlvZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBlcmlvZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIlBlcmlvZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCBtLTUgIGZvbnQtbGFsZXphciBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBiZy1uZnRiZyB3LTcyIHRleHQtYmxhY2sgcm91bmRlZC1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFBlcmlvZDpcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUGVyaW9kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBoLTUgYmctbmZ0Ymcgdy00MCB0ZXh0LWJsYWNrIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSG91cnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgwqBcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmcmFjdGlvbkNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RnJhY3Rpb25Db3VudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIkZyYWN0aW9uIGNvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIG0tNSAgZm9udC1sYWxlemFyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLW5mdGJnIHctNzIgdGV4dC1ibGFjayByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRnJhY3Rpb24gY291bnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIjEtOTk5OTlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGgtNSBiZy1uZnRiZyB3LTQwIHRleHQtYmxhY2sgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFVEhcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgwqBcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFNwbGl0QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgbmZ0Q29udHJhY3RBZGRyZXNzPXtuZnRDb250cmFjdEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhY3Rpb25Db3VudD17ZnJhY3Rpb25Db3VudH1cclxuICAgICAgICAgICAgICAgICAgICBwZXJpb2Q9e3BlcmlvZH1cclxuICAgICAgICAgICAgICAgICAgICBwaWVjZVByaWNlPXtwaWVjZVByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50PXtjb3VudH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvTkZUXzIuanBnXCIgY2xhc3NOYW1lPVwidy1bNDUwcHhdIG1sLTYwXCIgLz5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BsaXRNb2RhbDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTcGxpdEJ1dHRvbiIsIlNwbGl0TW9kYWwiLCJpc1Zpc2libGUiLCJvbkNsb3NlIiwibmZ0Q29udHJhY3RBZGRyZXNzIiwiY291bnQiLCJzZXRDb3VudCIsInBpZWNlUHJpY2UiLCJzZXRQaWVjZVByaWNlIiwicGVyaW9kIiwic2V0UGVyaW9kIiwiZnJhY3Rpb25Db3VudCIsInNldEZyYWN0aW9uQ291bnQiLCJoYW5kbGVDbG9zZSIsImUiLCJ0YXJnZXQiLCJpZCIsImhhbmRsZUZvcm1TcGxpdFN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImJ1dHRvbiIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiaHRtbEZvciIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SplitModal.js\n"));

/***/ })

});