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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst NftCard = (param)=>{\n    let { image , id , title , address , description , attributes  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-64 h-80 mr-3 mb-4 bg-slate-100 rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-56 h-56 justify-center\",\n                children: image ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \" rounded-t-md\",\n                    src: image\n                }, id, false, {\n                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n                    lineNumber: 6,\n                    columnNumber: 11\n                }, undefined) : \"NO IMAGE\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n                lineNumber: 4,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-grow\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-xl\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n                                lineNumber: 15,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"\".concat(id.slice(0, 4), \"...\").concat(id.slice(id.length - 4))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n                                lineNumber: 16,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap justify-center items-center p-3 \",\n                children: (attributes === null || attributes === void 0 ? void 0 : attributes.length) > 0 && attributes.map((attribute)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/2 mb-2 flex justify-start flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mr-2 font-bold\",\n                                children: [\n                                    attribute.trait_type,\n                                    \":\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm\",\n                                children: attribute.value\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 15\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\NFT\\\\NftCard.jsx\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NftCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NftCard);\nvar _c;\n$RefreshReg$(_c, \"NftCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05GVC9OZnRDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsVUFBVSxTQUE0RDtRQUEzRCxFQUFFQyxNQUFLLEVBQUVDLEdBQUUsRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQUVDLFlBQVcsRUFBRUMsV0FBVSxFQUFFO0lBQ3JFLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pQLHNCQUNDLDhEQUFDUTtvQkFBSUQsV0FBVTtvQkFBeUJFLEtBQUtUO21CQUFUQzs7OztnQ0FFcEMsVUFDRDs7Ozs7OzBCQUdILDhEQUFDSztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0c7Z0NBQUdILFdBQVU7MENBQVdMOzs7Ozs7MENBQ3pCLDhEQUFDUzswQ0FBRyxHQUF1QlYsT0FBcEJBLEdBQUdXLEtBQUssQ0FBQyxHQUFHLElBQUcsT0FBNkIsT0FBeEJYLEdBQUdXLEtBQUssQ0FBQ1gsR0FBR1ksTUFBTSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVF0RCw4REFBQ1A7Z0JBQUlDLFdBQVU7MEJBQ1pGLENBQUFBLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWVEsTUFBTSxJQUFHLEtBQ3BCUixXQUFXUyxHQUFHLENBQUMsQ0FBQ0MsWUFBYztvQkFDNUIscUJBQ0UsOERBQUNUO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQUVKLFdBQVU7O29DQUFrQlEsVUFBVUMsVUFBVTtvQ0FBQzs7Ozs7OzswQ0FDcEQsOERBQUNMO2dDQUFFSixXQUFVOzBDQUFXUSxVQUFVRSxLQUFLOzs7Ozs7Ozs7Ozs7Z0JBRzdDOzs7Ozs7Ozs7Ozs7QUFJVjtLQXBDTWxCO0FBc0NOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTkZUL05mdENhcmQuanN4PzFhZDEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTmZ0Q2FyZCA9ICh7IGltYWdlLCBpZCwgdGl0bGUsIGFkZHJlc3MsIGRlc2NyaXB0aW9uLCBhdHRyaWJ1dGVzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTY0IGgtODAgbXItMyBtYi00IGJnLXNsYXRlLTEwMCByb3VuZGVkLW1kXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01NiBoLTU2IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAge2ltYWdlID8gKFxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCIgcm91bmRlZC10LW1kXCIga2V5PXtpZH0gc3JjPXtpbWFnZX0+PC9pbWc+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIFwiTk8gSU1BR0VcIlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWItM1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGxcIj57dGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPHA+e2Ake2lkLnNsaWNlKDAsIDQpfS4uLiR7aWQuc2xpY2UoaWQubGVuZ3RoIC0gNCl9YH08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNzAwXCIgaHJlZj17YGh0dHBzOi8vZXRoZXJzY2FuLmlvL3Rva2VuLyR7YWRkcmVzc31gfT57YCR7YWRkcmVzcy5zbGljZSgwLCA0KX0uLi4ke2FkZHJlc3Muc2xpY2UoYWRkcmVzcy5sZW5ndGggLSA0KX1gfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxwPntkZXNjcmlwdGlvbj8gZGVzY3JpcHRpb24uc2xpY2UoMCwgMjAwKSA6IFwiTm8gRGVzY3JpcHRpb25cIn08L3A+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC0zIFwiPlxyXG4gICAgICAgIHthdHRyaWJ1dGVzPy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICBhdHRyaWJ1dGVzLm1hcCgoYXR0cmlidXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBtYi0yIGZsZXgganVzdGlmeS1zdGFydCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXItMiBmb250LWJvbGRcIj57YXR0cmlidXRlLnRyYWl0X3R5cGV9OjwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj57YXR0cmlidXRlLnZhbHVlfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZnRDYXJkO1xyXG4iXSwibmFtZXMiOlsiTmZ0Q2FyZCIsImltYWdlIiwiaWQiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImF0dHJpYnV0ZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJoMyIsInAiLCJzbGljZSIsImxlbmd0aCIsIm1hcCIsImF0dHJpYnV0ZSIsInRyYWl0X3R5cGUiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NFT/NftCard.jsx\n"));

/***/ })

});