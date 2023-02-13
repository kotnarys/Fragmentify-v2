"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./components/Pattern.js":
/*!*******************************!*\
  !*** ./components/Pattern.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pattern; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Pattern(param) {\n    let { children  } = param;\n    _s();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    async function requestAccount() {\n        if (window.ethereum) {\n            try {\n                const accounts = await window.ethereum.request({\n                    method: \"eth_requestAccounts\"\n                });\n                setAccount(accounts[0]);\n            } catch (error) {\n                console.log(\"error\");\n            }\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-patterngrays\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"flex justify-between p-3 place-items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/home\",\n                            className: \"p-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/home.png\",\n                                className: \"h-12 active:translate-y-1 hover:opacity-80\",\n                                alt: \"HOME\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/marketplace\",\n                                    className: \"p-2 text-3xl active:translate-y-1 hover:text-blue-300 font-lalezar\",\n                                    children: \"MARKET\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"p-2 text-3xl font-lalezar\",\n                                    children: \"|\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/resale\",\n                                    className: \"p-2 text-3xl active:translate-y-1 hover:text-blue-300 font-lalezar\",\n                                    children: \"RESALE\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"p-2 text-3xl active:translate-y-1 hover:text-blue-300 font-lalezar bg-start-paragraph rounded-full\",\n                            href: \"/profile\",\n                            children: account\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: requestAccount,\n                            className: \"p-2 bg-start-paragraph text-white rounded-full h-11 w-60 text-2xl active:translate-y-1 hover:text-grays font-lalezar\",\n                            children: \"CONNECT WALLET\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-grays w-11/12 min-h-screen rounded-md\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Pattern, \"LzGhSkswLn6Y57C8gja4ikfWqZ8=\");\n_c = Pattern;\nvar _c;\n$RefreshReg$(_c, \"Pattern\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhdHRlcm4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdDO0FBRVg7QUFFZCxTQUFTRyxRQUFRLEtBQVksRUFBRTtRQUFkLEVBQUVDLFNBQVEsRUFBRSxHQUFaOztJQUM5QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUM7SUFFdkMsZUFBZU0saUJBQWlCO1FBQzlCLElBQUlDLE9BQU9DLFFBQVEsRUFBRTtZQUNuQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUYsT0FBT0MsUUFBUSxDQUFDRSxPQUFPLENBQUM7b0JBQzdDQyxRQUFRO2dCQUNWO2dCQUNBTixXQUFXSSxRQUFRLENBQUMsRUFBRTtZQUN4QixFQUFFLE9BQU9HLE9BQU87Z0JBQ2RDLFFBQVFDLEdBQUcsQ0FBQztZQUNkO1FBQ0YsQ0FBQztJQUNIO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNmLGtEQUFJQTs0QkFBQ2lCLE1BQUs7NEJBQVFGLFdBQVU7c0NBQzNCLDRFQUFDRztnQ0FDQ0MsS0FBSTtnQ0FDSkosV0FBVTtnQ0FDVkssS0FBSTs7Ozs7Ozs7Ozs7c0NBR1IsOERBQUNOOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ2Ysa0RBQUlBO29DQUNIaUIsTUFBSztvQ0FDTEYsV0FBVTs4Q0FDWDs7Ozs7OzhDQUdELDhEQUFDTTtvQ0FBR04sV0FBVTs4Q0FBNEI7Ozs7Ozs4Q0FDMUMsOERBQUNmLGtEQUFJQTtvQ0FDSGlCLE1BQUs7b0NBQ0xGLFdBQVU7OENBQ1g7Ozs7Ozs7Ozs7Ozt3QkFJRlosd0JBQ0MsOERBQUNILGtEQUFJQTs0QkFDSGUsV0FBVTs0QkFDVkUsTUFBSztzQ0FFSmQ7Ozs7O2lEQUdILDhEQUFDbUI7NEJBQ0NDLFNBQVNsQjs0QkFDVFUsV0FBVTtzQ0FDWDs7Ozs7Z0NBR0Y7Ozs7Ozs7OEJBRUgsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWmI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1iLENBQUM7R0FsRXVCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BhdHRlcm4uanM/MTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGF0dGVybih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdEFjY291bnQoKSB7XHJcbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldEFjY291bnQoYWNjb3VudHNbMF0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXBhdHRlcm5ncmF5c1wiPlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcC0zIHBsYWNlLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lXCIgY2xhc3NOYW1lPVwicC0xXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIvaG9tZS5wbmdcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTIgYWN0aXZlOnRyYW5zbGF0ZS15LTEgaG92ZXI6b3BhY2l0eS04MFwiXHJcbiAgICAgICAgICAgICAgYWx0PVwiSE9NRVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPVwiL21hcmtldHBsYWNlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgdGV4dC0zeGwgYWN0aXZlOnRyYW5zbGF0ZS15LTEgaG92ZXI6dGV4dC1ibHVlLTMwMCBmb250LWxhbGV6YXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTUFSS0VUXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInAtMiB0ZXh0LTN4bCBmb250LWxhbGV6YXJcIj58PC9oMz5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPVwiL3Jlc2FsZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHRleHQtM3hsIGFjdGl2ZTp0cmFuc2xhdGUteS0xIGhvdmVyOnRleHQtYmx1ZS0zMDAgZm9udC1sYWxlemFyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFJFU0FMRVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHthY2NvdW50ID8gKFxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiB0ZXh0LTN4bCBhY3RpdmU6dHJhbnNsYXRlLXktMSBob3Zlcjp0ZXh0LWJsdWUtMzAwIGZvbnQtbGFsZXphciBiZy1zdGFydC1wYXJhZ3JhcGggcm91bmRlZC1mdWxsXCJcclxuICAgICAgICAgICAgICBocmVmPVwiL3Byb2ZpbGVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2FjY291bnR9XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtyZXF1ZXN0QWNjb3VudH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYmctc3RhcnQtcGFyYWdyYXBoIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIGgtMTEgdy02MCB0ZXh0LTJ4bCBhY3RpdmU6dHJhbnNsYXRlLXktMSBob3Zlcjp0ZXh0LWdyYXlzIGZvbnQtbGFsZXphclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDT05ORUNUIFdBTExFVFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5cyB3LTExLzEyIG1pbi1oLXNjcmVlbiByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiUGF0dGVybiIsImNoaWxkcmVuIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJyZXF1ZXN0QWNjb3VudCIsIndpbmRvdyIsImV0aGVyZXVtIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibmF2IiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsImgzIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Pattern.js\n"));

/***/ })

});