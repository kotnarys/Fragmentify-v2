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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SplitButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SplitButton */ \"./components/SplitButton.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction SplitModal(param) {\n    let { isVisible , onClose , nftContractAddress  } = param;\n    _s();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [piecePrice, setPiecePrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [period, setPeriod] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [fractionCount, setFractionCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    if (!isVisible) return null;\n    function handleClose(e) {\n        if (e.target.id == \"wrapper\") onClose();\n    }\n    function handleFormSplitSubmit(e) {\n        e.preventDefault();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center \",\n        id: \"wrapper\",\n        onClick: handleClose,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-[1000px] flex flex-col \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>onClose(),\n                    className: \"text-white text-xl place-self-end\",\n                    children: \"Х\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-modalbg p2 rounded \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-[800px] text-black\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"flex flex-col\",\n                                onSubmit: handleFormSplitSubmit,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        value: count,\n                                        onChange: (e)=>setCount(e.target.value),\n                                        htmlFor: \"Count\",\n                                        className: \"text-xl m-5 font-lalezar flex flex-col items-center bg-nftbg w-72 text-black rounded-full\",\n                                        children: [\n                                            \"COUNT:\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"Count\",\n                                                className: \" h-5 bg-nftbg w-40 text-black text-center\",\n                                                placeholder: \"1-99999\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 19\n                                            }, this),\n                                            \"\\xa0\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        value: piecePrice,\n                                        onChange: (e)=>setPiecePrice(e.target.value),\n                                        htmlFor: \"PiecePrice\",\n                                        className: \"text-xl m-5 font-lalezar flex flex-col items-center bg-nftbg w-72 text-black rounded-full\",\n                                        children: [\n                                            \"PiecePrice:\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"PiecePrice\",\n                                                className: \" h-5 bg-nftbg w-40 text-black text-center\",\n                                                placeholder: \"ETH\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 19\n                                            }, this),\n                                            \"\\xa0\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        value: period,\n                                        onChange: (e)=>setPeriod(e.target.value),\n                                        htmlFor: \"Period\",\n                                        className: \"text-xl m-5 font-lalezar flex flex-col items-center bg-nftbg w-72 text-black rounded-full\",\n                                        children: [\n                                            \"Period:\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"Days\",\n                                                className: \" h-5 bg-nftbg w-40 text-black text-center\",\n                                                placeholder: \"ETH\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 19\n                                            }, this),\n                                            \"\\xa0\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        value: fractionCount,\n                                        onChange: (e)=>setFractionCount(e.target.value),\n                                        htmlFor: \"Fraction count\",\n                                        className: \"text-xl m-5 font-lalezar flex flex-col items-center bg-nftbg w-72 text-black rounded-full\",\n                                        children: [\n                                            \"Fraction count:\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"Fraction count\",\n                                                className: \" h-5 bg-nftbg w-40 text-black text-center\",\n                                                placeholder: \"ETH\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                                lineNumber: 90,\n                                                columnNumber: 19\n                                            }, this),\n                                            \"\\xa0\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SplitButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        nftContractAddress: nftContractAddress,\n                                        fractionCount: fractionCount,\n                                        period: period,\n                                        piecePrice: piecePrice,\n                                        count: count\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(SplitModal, \"fFG6SxCo+M901ZBxPvkS9XbyLSA=\");\n_c = SplitModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SplitModal);\nvar _c;\n$RefreshReg$(_c, \"SplitModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NwbGl0TW9kYWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFFQTtBQUV4QyxTQUFTRyxXQUFXLEtBQTBDLEVBQUU7UUFBNUMsRUFBRUMsVUFBUyxFQUFFQyxRQUFPLEVBQUVDLG1CQUFrQixFQUFFLEdBQTFDOztJQUNsQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1UsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNZLGVBQWVDLGlCQUFpQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUVuRCxJQUFJLENBQUNHLFdBQVcsT0FBTyxJQUFJO0lBRTNCLFNBQVNXLFlBQVlDLENBQUMsRUFBRTtRQUN0QixJQUFJQSxFQUFFQyxNQUFNLENBQUNDLEVBQUUsSUFBSSxXQUFXYjtJQUNoQztJQUVBLFNBQVNjLHNCQUFzQkgsQ0FBQyxFQUFFO1FBQ2hDQSxFQUFFSSxjQUFjO0lBQ2xCO0lBRUEscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVU7UUFDVkosSUFBRztRQUNISyxTQUFTUjtrQkFFVCw0RUFBQ007WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNFO29CQUNDRCxTQUFTLElBQU1sQjtvQkFDZmlCLFdBQVU7OEJBQ1g7Ozs7Ozs4QkFHRCw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDtzQ0FDQyw0RUFBQ0k7Z0NBQUtILFdBQVU7Z0NBQWdCSSxVQUFVUDs7a0RBQ3hDLDhEQUFDUTt3Q0FDQ0MsT0FBT3JCO3dDQUNQc0IsVUFBVSxDQUFDYixJQUFNUixTQUFTUSxFQUFFQyxNQUFNLENBQUNXLEtBQUs7d0NBQ3hDRSxTQUFRO3dDQUNSUixXQUFVOzs0Q0FDWDswREFFQyw4REFBQ1M7Z0RBQ0NiLElBQUc7Z0RBQ0hJLFdBQVU7Z0RBQ1ZVLGFBQVk7Ozs7Ozs0Q0FDWjs7Ozs7OztrREFJSiw4REFBQ0w7d0NBQ0NDLE9BQU9uQjt3Q0FDUG9CLFVBQVUsQ0FBQ2IsSUFBTU4sY0FBY00sRUFBRUMsTUFBTSxDQUFDVyxLQUFLO3dDQUM3Q0UsU0FBUTt3Q0FDUlIsV0FBVTs7NENBQ1g7MERBRUMsOERBQUNTO2dEQUNDYixJQUFHO2dEQUNISSxXQUFVO2dEQUNWVSxhQUFZOzs7Ozs7NENBQ1o7Ozs7Ozs7a0RBSUosOERBQUNMO3dDQUNDQyxPQUFPakI7d0NBQ1BrQixVQUFVLENBQUNiLElBQU1KLFVBQVVJLEVBQUVDLE1BQU0sQ0FBQ1csS0FBSzt3Q0FDekNFLFNBQVE7d0NBQ1JSLFdBQVU7OzRDQUNYOzBEQUVDLDhEQUFDUztnREFDQ2IsSUFBRztnREFDSEksV0FBVTtnREFDVlUsYUFBWTs7Ozs7OzRDQUNaOzs7Ozs7O2tEQUlKLDhEQUFDTDt3Q0FDQ0MsT0FBT2Y7d0NBQ1BnQixVQUFVLENBQUNiLElBQU1GLGlCQUFpQkUsRUFBRUMsTUFBTSxDQUFDVyxLQUFLO3dDQUNoREUsU0FBUTt3Q0FDUlIsV0FBVTs7NENBQ1g7MERBRUMsOERBQUNTO2dEQUNDYixJQUFHO2dEQUNISSxXQUFVO2dEQUNWVSxhQUFZOzs7Ozs7NENBQ1o7Ozs7Ozs7a0RBR0osOERBQUM5QixvREFBV0E7d0NBQ1ZJLG9CQUFvQkE7d0NBQ3BCTyxlQUFlQTt3Q0FDZkYsUUFBUUE7d0NBQ1JGLFlBQVlBO3dDQUNaRixPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTekI7R0ExR1NKO0tBQUFBO0FBNEdULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3BsaXRNb2RhbC5qcz9hZTlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFNwbGl0QnV0dG9uIGZyb20gXCIuL1NwbGl0QnV0dG9uXCI7XHJcblxyXG5mdW5jdGlvbiBTcGxpdE1vZGFsKHsgaXNWaXNpYmxlLCBvbkNsb3NlLCBuZnRDb250cmFjdEFkZHJlc3MgfSkge1xyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BpZWNlUHJpY2UsIHNldFBpZWNlUHJpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BlcmlvZCwgc2V0UGVyaW9kXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmcmFjdGlvbkNvdW50LCBzZXRGcmFjdGlvbkNvdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBpZiAoIWlzVmlzaWJsZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNsb3NlKGUpIHtcclxuICAgIGlmIChlLnRhcmdldC5pZCA9PSBcIndyYXBwZXJcIikgb25DbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRm9ybVNwbGl0U3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctYmxhY2sgYmctb3BhY2l0eS0yNSBiYWNrZHJvcC1ibHVyLXNtIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIFwiXHJcbiAgICAgIGlkPVwid3JhcHBlclwiXHJcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzEwMDBweF0gZmxleCBmbGV4LWNvbCBcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsb3NlKCl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgcGxhY2Utc2VsZi1lbmRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgINClXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1tb2RhbGJnIHAyIHJvdW5kZWQgXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzgwMHB4XSB0ZXh0LWJsYWNrXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiIG9uU3VibWl0PXtoYW5kbGVGb3JtU3BsaXRTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb3VudH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb3VudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJDb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgbS01ICBmb250LWxhbGV6YXIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctbmZ0Ymcgdy03MiB0ZXh0LWJsYWNrIHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIENPVU5UOlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cIkNvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgaC01IGJnLW5mdGJnIHctNDAgdGV4dC1ibGFjayB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxLTk5OTk5XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgwqBcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwaWVjZVByaWNlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBpZWNlUHJpY2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwiUGllY2VQcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgbS01ICBmb250LWxhbGV6YXIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctbmZ0Ymcgdy03MiB0ZXh0LWJsYWNrIHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFBpZWNlUHJpY2U6XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiUGllY2VQcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGgtNSBiZy1uZnRiZyB3LTQwIHRleHQtYmxhY2sgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRVRIXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgwqBcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJpb2R9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGVyaW9kKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIlBlcmlvZFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgbS01ICBmb250LWxhbGV6YXIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctbmZ0Ymcgdy03MiB0ZXh0LWJsYWNrIHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFBlcmlvZDpcclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJEYXlzXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgaC01IGJnLW5mdGJnIHctNDAgdGV4dC1ibGFjayB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFVEhcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICDCoFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZyYWN0aW9uQ291bnR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RnJhY3Rpb25Db3VudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJGcmFjdGlvbiBjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgbS01ICBmb250LWxhbGV6YXIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctbmZ0Ymcgdy03MiB0ZXh0LWJsYWNrIHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEZyYWN0aW9uIGNvdW50OlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cIkZyYWN0aW9uIGNvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgaC01IGJnLW5mdGJnIHctNDAgdGV4dC1ibGFjayB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFVEhcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICDCoFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxTcGxpdEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBuZnRDb250cmFjdEFkZHJlc3M9e25mdENvbnRyYWN0QWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgZnJhY3Rpb25Db3VudD17ZnJhY3Rpb25Db3VudH1cclxuICAgICAgICAgICAgICAgICAgcGVyaW9kPXtwZXJpb2R9XHJcbiAgICAgICAgICAgICAgICAgIHBpZWNlUHJpY2U9e3BpZWNlUHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgIGNvdW50PXtjb3VudH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwbGl0TW9kYWw7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiU3BsaXRCdXR0b24iLCJTcGxpdE1vZGFsIiwiaXNWaXNpYmxlIiwib25DbG9zZSIsIm5mdENvbnRyYWN0QWRkcmVzcyIsImNvdW50Iiwic2V0Q291bnQiLCJwaWVjZVByaWNlIiwic2V0UGllY2VQcmljZSIsInBlcmlvZCIsInNldFBlcmlvZCIsImZyYWN0aW9uQ291bnQiLCJzZXRGcmFjdGlvbkNvdW50IiwiaGFuZGxlQ2xvc2UiLCJlIiwidGFyZ2V0IiwiaWQiLCJoYW5kbGVGb3JtU3BsaXRTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJidXR0b24iLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsInZhbHVlIiwib25DaGFuZ2UiLCJodG1sRm9yIiwiaW5wdXQiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SplitModal.js\n"));

/***/ })

});