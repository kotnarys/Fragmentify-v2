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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pattern; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Pattern(param) {\n    let { children  } = param;\n    _s();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    async function requestAccount() {\n        if (window.ethereum) {\n            try {\n                const accounts = await window.ethereum.request({\n                    method: \"eth_requestAccounts\"\n                });\n                setAccount(accounts[0]);\n            } catch (error) {\n                console.log(\"error\");\n            }\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-patterngrays\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"flex justify-between p-3 place-items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"p-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/home.png\",\n                                className: \"h-9 active:translate-y-1 hover:opacity-80\",\n                                alt: \"HOMEbutton\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"p-2 text-xl active:translate-y-1 hover:text-grays font-lalezar\",\n                                    children: \"MARKET\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"p-2 text-xl font-lalezar\",\n                                    children: \"|\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"p-2 text-xl active:translate-y-1 hover:text-grays font-lalezar\",\n                                    children: \"RESALE\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"p-2 text-xl active:translate-y-1 hover:text-grays font-lalezar\",\n                            href: \"/profile\",\n                            children: account\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: requestAccount,\n                            className: \"p-2 text-xl active:translate-y-1 hover:text-grays font-lalezar\",\n                            children: \"CONNECT WALLET\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-grays w-11/12 min-h-screen rounded-md\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\Pattern.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Pattern, \"LzGhSkswLn6Y57C8gja4ikfWqZ8=\");\n_c = Pattern;\nvar _c;\n$RefreshReg$(_c, \"Pattern\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhdHRlcm4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdDO0FBRVg7QUFFZCxTQUFTRyxRQUFRLEtBQVksRUFBRTtRQUFkLEVBQUVDLFNBQVEsRUFBRSxHQUFaOztJQUM5QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUM7SUFFdkMsZUFBZU0saUJBQWlCO1FBQzlCLElBQUlDLE9BQU9DLFFBQVEsRUFBRTtZQUNuQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUYsT0FBT0MsUUFBUSxDQUFDRSxPQUFPLENBQUM7b0JBQzdDQyxRQUFRO2dCQUNWO2dCQUNBTixXQUFXSSxRQUFRLENBQUMsRUFBRTtZQUN4QixFQUFFLE9BQU9HLE9BQU87Z0JBQ2RDLFFBQVFDLEdBQUcsQ0FBQztZQUNkO1FBQ0YsQ0FBQztJQUNIO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUFPRixXQUFVO3NDQUNoQiw0RUFBQ0c7Z0NBQ0NDLEtBQUk7Z0NBQ0pKLFdBQVU7Z0NBQ1ZLLEtBQUk7Ozs7Ozs7Ozs7O3NDQUdSLDhEQUFDTjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNFO29DQUFPRixXQUFVOzhDQUFpRTs7Ozs7OzhDQUduRiw4REFBQ007b0NBQUdOLFdBQVU7OENBQTJCOzs7Ozs7OENBQ3pDLDhEQUFDRTtvQ0FBT0YsV0FBVTs4Q0FBaUU7Ozs7Ozs7Ozs7Ozt3QkFJcEZaLHdCQUNDLDhEQUFDSCxrREFBSUE7NEJBQ0hlLFdBQVU7NEJBQ1ZPLE1BQUs7c0NBRUpuQjs7Ozs7aURBR0gsOERBQUNjOzRCQUNDTSxTQUFTbEI7NEJBQ1RVLFdBQVU7c0NBQ1g7Ozs7O2dDQUdGOzs7Ozs7OzhCQUVILDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1piOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYixDQUFDO0dBNUR1QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYXR0ZXJuLmpzPzEwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhdHRlcm4oeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RBY2NvdW50KCkge1xyXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRBY2NvdW50KGFjY291bnRzWzBdKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1wYXR0ZXJuZ3JheXNcIj5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHAtMyBwbGFjZS1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0xXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIvaG9tZS5wbmdcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOSBhY3RpdmU6dHJhbnNsYXRlLXktMSBob3ZlcjpvcGFjaXR5LTgwXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJIT01FYnV0dG9uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0yIHRleHQteGwgYWN0aXZlOnRyYW5zbGF0ZS15LTEgaG92ZXI6dGV4dC1ncmF5cyBmb250LWxhbGV6YXJcIj5cclxuICAgICAgICAgICAgICBNQVJLRVRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwLTIgdGV4dC14bCBmb250LWxhbGV6YXJcIj58PC9oMz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTIgdGV4dC14bCBhY3RpdmU6dHJhbnNsYXRlLXktMSBob3Zlcjp0ZXh0LWdyYXlzIGZvbnQtbGFsZXphclwiPlxyXG4gICAgICAgICAgICAgIFJFU0FMRVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2FjY291bnQgPyAoXHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHRleHQteGwgYWN0aXZlOnRyYW5zbGF0ZS15LTEgaG92ZXI6dGV4dC1ncmF5cyBmb250LWxhbGV6YXJcIlxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvcHJvZmlsZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7YWNjb3VudH1cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3JlcXVlc3RBY2NvdW50fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiB0ZXh0LXhsIGFjdGl2ZTp0cmFuc2xhdGUteS0xIGhvdmVyOnRleHQtZ3JheXMgZm9udC1sYWxlemFyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENPTk5FQ1QgV0FMTEVUXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXlzIHctMTEvMTIgbWluLWgtc2NyZWVuIHJvdW5kZWQtbWRcIj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJQYXR0ZXJuIiwiY2hpbGRyZW4iLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsInJlcXVlc3RBY2NvdW50Iiwid2luZG93IiwiZXRoZXJldW0iLCJhY2NvdW50cyIsInJlcXVlc3QiLCJtZXRob2QiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJuYXYiLCJidXR0b24iLCJpbWciLCJzcmMiLCJhbHQiLCJoMyIsImhyZWYiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Pattern.js\n"));

/***/ })

});