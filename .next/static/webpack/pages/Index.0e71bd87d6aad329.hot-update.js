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

/***/ "./components/NFT/NftCard.jsx":
/*!************************************!*\
  !*** ./components/NFT/NftCard.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst NftCard = (param)=>{\n    let { image , id , title , address , description , attributes  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-96 mr-3 mb-4 bg-slate-100 rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-56 h-56\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \" rounded-t-md\",\n                    src: image\n                }, id, false, {\n                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n                    lineNumber: 5,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n                lineNumber: 4,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-grow\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-xl\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n                                lineNumber: 11,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"\".concat(id.slice(0, 4), \"...\").concat(id.slice(id.length - 4))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n                                lineNumber: 12,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap justify-center items-center p-3 \",\n                children: (attributes === null || attributes === void 0 ? void 0 : attributes.length) > 0 && attributes.map((attribute)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/2 mb-2 flex justify-start flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mr-2 font-bold\",\n                                children: [\n                                    attribute.trait_type,\n                                    \":\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm\",\n                                children: attribute.value\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 15\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NftCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NftCard);\nvar _c;\n$RefreshReg$(_c, \"NftCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05GVC9OZnRDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsVUFBVSxTQUE0RDtRQUEzRCxFQUFFQyxNQUFLLEVBQUVDLEdBQUUsRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQUVDLFlBQVcsRUFBRUMsV0FBVSxFQUFFO0lBQ3JFLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFJRCxXQUFVO29CQUF5QkUsS0FBS1Q7bUJBQVRDOzs7Ozs7Ozs7OzBCQUd0Qyw4REFBQ0s7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFHSCxXQUFVOzBDQUFXTDs7Ozs7OzBDQUN6Qiw4REFBQ1M7MENBQUcsR0FBdUJWLE9BQXBCQSxHQUFHVyxLQUFLLENBQUMsR0FBRyxJQUFHLE9BQTZCLE9BQXhCWCxHQUFHVyxLQUFLLENBQUNYLEdBQUdZLE1BQU0sR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRdEQsOERBQUNQO2dCQUFJQyxXQUFVOzBCQUNaRixDQUFBQSx1QkFBQUEsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVlRLE1BQU0sSUFBRyxLQUNwQlIsV0FBV1MsR0FBRyxDQUFDLENBQUNDLFlBQWM7b0JBQzVCLHFCQUNFLDhEQUFDVDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNJO2dDQUFFSixXQUFVOztvQ0FBa0JRLFVBQVVDLFVBQVU7b0NBQUM7Ozs7Ozs7MENBQ3BELDhEQUFDTDtnQ0FBRUosV0FBVTswQ0FBV1EsVUFBVUUsS0FBSzs7Ozs7Ozs7Ozs7O2dCQUc3Qzs7Ozs7Ozs7Ozs7O0FBSVY7S0FoQ01sQjtBQWtDTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05GVC9OZnRDYXJkLmpzeD8xYWQxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE5mdENhcmQgPSAoeyBpbWFnZSwgaWQsIHRpdGxlLCBhZGRyZXNzLCBkZXNjcmlwdGlvbiwgYXR0cmlidXRlcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy05NiBtci0zIG1iLTQgYmctc2xhdGUtMTAwIHJvdW5kZWQtbWRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTU2IGgtNTZcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIiByb3VuZGVkLXQtbWRcIiBrZXk9e2lkfSBzcmM9e2ltYWdlfT48L2ltZz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtYi0zXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bFwiPnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICA8cD57YCR7aWQuc2xpY2UoMCwgNCl9Li4uJHtpZC5zbGljZShpZC5sZW5ndGggLSA0KX1gfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtci0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cInRleHQtYmx1ZS03MDBcIiBocmVmPXtgaHR0cHM6Ly9ldGhlcnNjYW4uaW8vdG9rZW4vJHthZGRyZXNzfWB9PntgJHthZGRyZXNzLnNsaWNlKDAsIDQpfS4uLiR7YWRkcmVzcy5zbGljZShhZGRyZXNzLmxlbmd0aCAtIDQpfWB9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPHA+e2Rlc2NyaXB0aW9uPyBkZXNjcmlwdGlvbi5zbGljZSgwLCAyMDApIDogXCJObyBEZXNjcmlwdGlvblwifTwvcD4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwLTMgXCI+XHJcbiAgICAgICAge2F0dHJpYnV0ZXM/Lmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIGF0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIG1iLTIgZmxleCBqdXN0aWZ5LXN0YXJ0IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtci0yIGZvbnQtYm9sZFwiPnthdHRyaWJ1dGUudHJhaXRfdHlwZX06PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPnthdHRyaWJ1dGUudmFsdWV9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5mdENhcmQ7XHJcbiJdLCJuYW1lcyI6WyJOZnRDYXJkIiwiaW1hZ2UiLCJpZCIsInRpdGxlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiYXR0cmlidXRlcyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImgzIiwicCIsInNsaWNlIiwibGVuZ3RoIiwibWFwIiwiYXR0cmlidXRlIiwidHJhaXRfdHlwZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NFT/NftCard.jsx\n"));

/***/ })

});