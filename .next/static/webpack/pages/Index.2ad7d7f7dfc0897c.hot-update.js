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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SplitButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SplitButton */ \"./components/SplitButton.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction SplitModal(param) {\n    let { isVisible , onClose , nftContractAddress  } = param;\n    _s();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [piecePrice, setPiecePrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [period, setPeriod] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [FractionCount, setFractionCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    if (!isVisible) return null;\n    function handleClose(e) {\n        if (e.target.id == \"wrapper\") onClose();\n    }\n    function handleFormSplitSubmit(e) {\n        e.preventDefault();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center \",\n        id: \"wrapper\",\n        onClick: handleClose,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-[900px] flex flex-col \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>onClose(),\n                    className: \"text-white text-xl place-self-end\",\n                    children: \"Х\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-modalbg p2 rounded \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-[700px] text-black\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"flex flex-col\",\n                                onSubmit: handleFormSplitSubmit,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        value: count,\n                                        onChange: (e)=>setCount(e.target.value),\n                                        htmlFor: \"Count\",\n                                        className: \"text-xl m-5 text-white font-lalezar\",\n                                        children: [\n                                            \"Count:\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"Count\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        value: piecePrice,\n                                        onChange: (e)=>setPiecePrice(e.target.value),\n                                        htmlFor: \"PiecePrice\",\n                                        className: \"text-xl m-5 text-white font-lalezar\",\n                                        children: [\n                                            \"PiecePrice: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"PiecePrice\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 31\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        value: period,\n                                        onChange: (e)=>setPeriod(e.target.value),\n                                        htmlFor: \"Period\",\n                                        className: \"text-xl m-5 text-white font-lalezar\",\n                                        children: [\n                                            \"Period: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"Period\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 27\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        value: FractionCount,\n                                        onChange: (e)=>setFractionCount(e.target.value),\n                                        htmlFor: \"Fraction count\",\n                                        className: \"text-xl m-5 text-white font-lalezar\",\n                                        children: [\n                                            \"Fraction count: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"Fraction count\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 35\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SplitButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        nftContractAddress: nftContractAddress\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitModal.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(SplitModal, \"rQEH4JaFIX0S0OkpeFRtXVd3Vfs=\");\n_c = SplitModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SplitModal);\nvar _c;\n$RefreshReg$(_c, \"SplitModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NwbGl0TW9kYWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFFQTtBQUV4QyxTQUFTRyxXQUFXLEtBQTBDLEVBQUU7UUFBNUMsRUFBRUMsVUFBUyxFQUFFQyxRQUFPLEVBQUVDLG1CQUFrQixFQUFFLEdBQTFDOztJQUNsQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1UsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNZLGVBQWVDLGlCQUFpQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUVuRCxJQUFJLENBQUNHLFdBQVcsT0FBTyxJQUFJO0lBRTNCLFNBQVNXLFlBQVlDLENBQUMsRUFBRTtRQUN0QixJQUFJQSxFQUFFQyxNQUFNLENBQUNDLEVBQUUsSUFBSSxXQUFXYjtJQUNoQztJQUVBLFNBQVNjLHNCQUFzQkgsQ0FBQyxFQUFFO1FBQ2hDQSxFQUFFSSxjQUFjO0lBQ2xCO0lBRUEscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVU7UUFDVkosSUFBRztRQUNISyxTQUFTUjtrQkFFVCw0RUFBQ007WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNFO29CQUNDRCxTQUFTLElBQU1sQjtvQkFDZmlCLFdBQVU7OEJBQ1g7Ozs7Ozs4QkFHRCw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDtzQ0FDQyw0RUFBQ0k7Z0NBQUtILFdBQVU7Z0NBQWdCSSxVQUFVUDs7a0RBQ3hDLDhEQUFDUTt3Q0FDQ0MsT0FBT3JCO3dDQUNQc0IsVUFBVSxDQUFDYixJQUFNUixTQUFTUSxFQUFFQyxNQUFNLENBQUNXLEtBQUs7d0NBQ3hDRSxTQUFRO3dDQUNSUixXQUFVOzs0Q0FDWDswREFFQyw4REFBQ1M7Z0RBQU1iLElBQUc7Ozs7Ozs7Ozs7OztrREFHWiw4REFBQ1M7d0NBQ0NDLE9BQU9uQjt3Q0FDUG9CLFVBQVUsQ0FBQ2IsSUFBTU4sY0FBY00sRUFBRUMsTUFBTSxDQUFDVyxLQUFLO3dDQUM3Q0UsU0FBUTt3Q0FDUlIsV0FBVTs7NENBQ1g7MERBQ2EsOERBQUNTO2dEQUFNYixJQUFHOzs7Ozs7Ozs7Ozs7a0RBR3hCLDhEQUFDUzt3Q0FDQ0MsT0FBT2pCO3dDQUNQa0IsVUFBVSxDQUFDYixJQUFNSixVQUFVSSxFQUFFQyxNQUFNLENBQUNXLEtBQUs7d0NBQ3pDRSxTQUFRO3dDQUNSUixXQUFVOzs0Q0FDWDswREFDUyw4REFBQ1M7Z0RBQU1iLElBQUc7Ozs7Ozs7Ozs7OztrREFHcEIsOERBQUNTO3dDQUNDQyxPQUFPZjt3Q0FDUGdCLFVBQVUsQ0FBQ2IsSUFBTUYsaUJBQWlCRSxFQUFFQyxNQUFNLENBQUNXLEtBQUs7d0NBQ2hERSxTQUFRO3dDQUNSUixXQUFVOzs0Q0FDWDswREFDaUIsOERBQUNTO2dEQUFNYixJQUFHOzs7Ozs7Ozs7Ozs7a0RBRTVCLDhEQUFDaEIsb0RBQVdBO3dDQUFDSSxvQkFBb0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFqRDtHQTdFU0g7S0FBQUE7QUErRVQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcGxpdE1vZGFsLmpzP2FlOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgU3BsaXRCdXR0b24gZnJvbSBcIi4vU3BsaXRCdXR0b25cIjtcclxuXHJcbmZ1bmN0aW9uIFNwbGl0TW9kYWwoeyBpc1Zpc2libGUsIG9uQ2xvc2UsIG5mdENvbnRyYWN0QWRkcmVzcyB9KSB7XHJcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGllY2VQcmljZSwgc2V0UGllY2VQcmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGVyaW9kLCBzZXRQZXJpb2RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW0ZyYWN0aW9uQ291bnQsIHNldEZyYWN0aW9uQ291bnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGlmICghaXNWaXNpYmxlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xvc2UoZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0LmlkID09IFwid3JhcHBlclwiKSBvbkNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVGb3JtU3BsaXRTdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ibGFjayBiZy1vcGFjaXR5LTI1IGJhY2tkcm9wLWJsdXItc20gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgXCJcclxuICAgICAgaWQ9XCJ3cmFwcGVyXCJcclxuICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bOTAwcHhdIGZsZXggZmxleC1jb2wgXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbG9zZSgpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsIHBsYWNlLXNlbGYtZW5kXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICDQpVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbW9kYWxiZyBwMiByb3VuZGVkIFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVs3MDBweF0gdGV4dC1ibGFja1wiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIiBvblN1Ym1pdD17aGFuZGxlRm9ybVNwbGl0U3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y291bnR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q291bnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwiQ291bnRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIG0tNSB0ZXh0LXdoaXRlIGZvbnQtbGFsZXphclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIENvdW50OlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJDb3VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cGllY2VQcmljZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQaWVjZVByaWNlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIlBpZWNlUHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIG0tNSB0ZXh0LXdoaXRlIGZvbnQtbGFsZXphclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFBpZWNlUHJpY2U6IDxpbnB1dCBpZD1cIlBpZWNlUHJpY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3BlcmlvZH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQZXJpb2QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwiUGVyaW9kXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCBtLTUgdGV4dC13aGl0ZSBmb250LWxhbGV6YXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBQZXJpb2Q6IDxpbnB1dCBpZD1cIlBlcmlvZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17RnJhY3Rpb25Db3VudH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGcmFjdGlvbkNvdW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIkZyYWN0aW9uIGNvdW50XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCBtLTUgdGV4dC13aGl0ZSBmb250LWxhbGV6YXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBGcmFjdGlvbiBjb3VudDogPGlucHV0IGlkPVwiRnJhY3Rpb24gY291bnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxTcGxpdEJ1dHRvbiBuZnRDb250cmFjdEFkZHJlc3M9e25mdENvbnRyYWN0QWRkcmVzc30gLz5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BsaXRNb2RhbDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTcGxpdEJ1dHRvbiIsIlNwbGl0TW9kYWwiLCJpc1Zpc2libGUiLCJvbkNsb3NlIiwibmZ0Q29udHJhY3RBZGRyZXNzIiwiY291bnQiLCJzZXRDb3VudCIsInBpZWNlUHJpY2UiLCJzZXRQaWVjZVByaWNlIiwicGVyaW9kIiwic2V0UGVyaW9kIiwiRnJhY3Rpb25Db3VudCIsInNldEZyYWN0aW9uQ291bnQiLCJoYW5kbGVDbG9zZSIsImUiLCJ0YXJnZXQiLCJpZCIsImhhbmRsZUZvcm1TcGxpdFN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImJ1dHRvbiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwidmFsdWUiLCJvbkNoYW5nZSIsImh0bWxGb3IiLCJpbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SplitModal.js\n"));

/***/ })

});