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

/***/ "./components/MintButton.js":
/*!**********************************!*\
  !*** ./components/MintButton.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _Contract_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contract.js */ \"./components/Contract.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MintButton(param) {\n    let { address  } = param;\n    _s();\n    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    async function handleMintClick() {\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.BrowserProvider(window.ethereum);\n        const signer = await provider.getSigner();\n        const nft = _Contract_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].connect(signer);\n        console.log(address);\n        try {\n            await nft.safeMint(address, id);\n            setId(id + 1);\n            console.log(\"mint sucsess\");\n        } catch (error) {\n            console.error(error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: handleMintClick,\n            children: \"MINT\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\MintButton.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(MintButton, \"bmFZgDoUeoYEX5gTxJvVtW5v7b4=\");\n_c = MintButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MintButton);\nvar _c;\n$RefreshReg$(_c, \"MintButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01pbnRCdXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBRUM7QUFFUjtBQUVqQyxTQUFTSSxXQUFXLEtBQVcsRUFBRTtRQUFiLEVBQUVDLFFBQU8sRUFBRSxHQUFYOztJQUNsQixNQUFNLENBQUNDLElBQUlDLE1BQU0sR0FBR04sK0NBQVFBLENBQUM7SUFDN0IsZUFBZU8sa0JBQWtCO1FBQy9CLE1BQU1DLFdBQVcsSUFBSVAsbURBQWVBLENBQUNRLE9BQU9DLFFBQVE7UUFDcEQsTUFBTUMsU0FBUyxNQUFNSCxTQUFTSSxTQUFTO1FBQ3ZDLE1BQU1DLE1BQU1YLDREQUFZLENBQUNTO1FBRXpCSSxRQUFRQyxHQUFHLENBQUNaO1FBRVosSUFBSTtZQUNGLE1BQU1TLElBQUlJLFFBQVEsQ0FBQ2IsU0FBU0M7WUFDNUJDLE1BQU1ELEtBQUs7WUFDWFUsUUFBUUMsR0FBRyxDQUFDO1FBQ2QsRUFBRSxPQUFPRSxPQUFPO1lBQ2RILFFBQVFHLEtBQUssQ0FBQ0E7UUFDaEI7SUFDRjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFPQyxTQUFTYjtzQkFBaUI7Ozs7Ozs7QUFHeEM7R0F2QlNKO0tBQUFBO0FBeUJULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWludEJ1dHRvbi5qcz9kMDI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgQnJvd3NlclByb3ZpZGVyIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5cclxuaW1wb3J0IE5GVDIgZnJvbSBcIi4vQ29udHJhY3QuanNcIjtcclxuXHJcbmZ1bmN0aW9uIE1pbnRCdXR0b24oeyBhZGRyZXNzIH0pIHtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKDApO1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZU1pbnRDbGljaygpIHtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IEJyb3dzZXJQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICBjb25zdCBuZnQgPSBORlQyLmNvbm5lY3Qoc2lnbmVyKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhhZGRyZXNzKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBuZnQuc2FmZU1pbnQoYWRkcmVzcywgaWQpO1xyXG4gICAgICBzZXRJZChpZCArIDEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm1pbnQgc3Vjc2Vzc1wiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTWludENsaWNrfT5NSU5UPC9idXR0b24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNaW50QnV0dG9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJyb3dzZXJQcm92aWRlciIsIk5GVDIiLCJNaW50QnV0dG9uIiwiYWRkcmVzcyIsImlkIiwic2V0SWQiLCJoYW5kbGVNaW50Q2xpY2siLCJwcm92aWRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwibmZ0IiwiY29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJzYWZlTWludCIsImVycm9yIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MintButton.js\n"));

/***/ })

});