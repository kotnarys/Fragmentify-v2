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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _Contract_NftContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contract/NftContract */ \"./components/Contract/NftContract.js\");\n/* harmony import */ var _Contract_SplitContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contract/SplitContract */ \"./components/Contract/SplitContract.js\");\n\n\n\n\n\nfunction SplitButton() {\n    async function handleSplitClick(nftContractAddress) {\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.BrowserProvider(window.ethereum);\n        const signer = await provider.getSigner();\n        const splitb = _Contract_SplitContract__WEBPACK_IMPORTED_MODULE_3__[\"default\"].connect(signer);\n        const nft = _Contract_NftContract__WEBPACK_IMPORTED_MODULE_2__[\"default\"].connect(signer);\n        const adr = \"0xb2b322c04a6fda12ca343cecc0c0d864842b1f2f\";\n        const idNFT = \"0x0000000000000000000000000000000000000000000000000000000000000000\";\n        try {\n            const aprove = await nft.approve(\"0x2885CaDfAa67Bfa3A96961de436B1276A1d36701\", BigInt(idNFT));\n            aprove.wait();\n            await splitb.split(adr, BigInt(100), BigInt(50), BigInt((0,ethers__WEBPACK_IMPORTED_MODULE_4__.parseEther)(\"0.0001\")), BigInt(idNFT), \"hrmo\", \"HFX\", BigInt(5), {\n                gasLimit: \"300000\"\n            });\n        } catch (error) {\n            console.error(error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"greenbtn\",\n            onClick: handleSplitClick,\n            children: \"SPLIT\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitButton.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = SplitButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SplitButton);\nvar _c;\n$RefreshReg$(_c, \"SplitButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NwbGl0QnV0dG9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUUyQjtBQUVYO0FBQ0c7QUFFN0MsU0FBU0ssY0FBYztJQUNyQixlQUFlQyxpQkFBaUJDLGtCQUFrQixFQUFFO1FBQ2xELE1BQU1DLFdBQVcsSUFBSVAsbURBQWVBLENBQUNRLE9BQU9DLFFBQVE7UUFDcEQsTUFBTUMsU0FBUyxNQUFNSCxTQUFTSSxTQUFTO1FBQ3ZDLE1BQU1DLFNBQVNULHVFQUFhLENBQUNPO1FBQzdCLE1BQU1JLE1BQU1aLHFFQUFZLENBQUNRO1FBQ3pCLE1BQU1LLE1BQU07UUFDWixNQUFNQyxRQUNKO1FBRUYsSUFBSTtZQUNGLE1BQU1DLFNBQVMsTUFBTUgsSUFBSUksT0FBTyxDQUM5Qiw4Q0FDQUMsT0FBT0g7WUFFVEMsT0FBT0csSUFBSTtZQUNYLE1BQU1SLE9BQU9ULEtBQUssQ0FDaEJZLEtBQ0FJLE9BQU8sTUFDUEEsT0FBTyxLQUNQQSxPQUFPbEIsa0RBQVVBLENBQUMsWUFDbEJrQixPQUFPSCxRQUNQLFFBQ0EsT0FDQUcsT0FBTyxJQUNQO2dCQUFFRSxVQUFVO1lBQVM7UUFVekIsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7UUFDaEI7SUFDRjtJQUNBLHFCQUNFO2tCQUNFLDRFQUFDRTtZQUFPQyxXQUFVO1lBQVdDLFNBQVNyQjtzQkFBa0I7Ozs7Ozs7QUFLOUQ7S0E5Q1NEO0FBZ0RULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3BsaXRCdXR0b24uanM/NGQyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBCcm93c2VyUHJvdmlkZXIsIHBhcnNlRXRoZXIgfSBmcm9tIFwiZXRoZXJzXCI7XHJcblxyXG5pbXBvcnQgTkZUMyBmcm9tIFwiLi9Db250cmFjdC9OZnRDb250cmFjdFwiO1xyXG5pbXBvcnQgc3BsaXQgZnJvbSBcIi4vQ29udHJhY3QvU3BsaXRDb250cmFjdFwiO1xyXG5cclxuZnVuY3Rpb24gU3BsaXRCdXR0b24oKSB7XHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3BsaXRDbGljayhuZnRDb250cmFjdEFkZHJlc3MpIHtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IEJyb3dzZXJQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICBjb25zdCBzcGxpdGIgPSBzcGxpdC5jb25uZWN0KHNpZ25lcik7XHJcbiAgICBjb25zdCBuZnQgPSBORlQzLmNvbm5lY3Qoc2lnbmVyKTtcclxuICAgIGNvbnN0IGFkciA9IFwiMHhiMmIzMjJjMDRhNmZkYTEyY2EzNDNjZWNjMGMwZDg2NDg0MmIxZjJmXCI7XHJcbiAgICBjb25zdCBpZE5GVCA9XHJcbiAgICAgIFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCI7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYXByb3ZlID0gYXdhaXQgbmZ0LmFwcHJvdmUoXHJcbiAgICAgICAgXCIweDI4ODVDYURmQWE2N0JmYTNBOTY5NjFkZTQzNkIxMjc2QTFkMzY3MDFcIixcclxuICAgICAgICBCaWdJbnQoaWRORlQpXHJcbiAgICAgICk7XHJcbiAgICAgIGFwcm92ZS53YWl0KCk7XHJcbiAgICAgIGF3YWl0IHNwbGl0Yi5zcGxpdChcclxuICAgICAgICBhZHIsXHJcbiAgICAgICAgQmlnSW50KDEwMCksXHJcbiAgICAgICAgQmlnSW50KDUwKSxcclxuICAgICAgICBCaWdJbnQocGFyc2VFdGhlcihcIjAuMDAwMVwiKSksXHJcbiAgICAgICAgQmlnSW50KGlkTkZUKSxcclxuICAgICAgICBcImhybW9cIixcclxuICAgICAgICBcIkhGWFwiLFxyXG4gICAgICAgIEJpZ0ludCg1KSxcclxuICAgICAgICB7IGdhc0xpbWl0OiBcIjMwMDAwMFwiIH1cclxuICAgICAgICAvKiAgIEVSQzcyMSBuZnRDb250cmFjdCwgXHJcbiAgICAgICAgdWludCBfbWF4VG9rZW5TdXBwbHksXHJcbiAgICAgICAgdWludDI1NiBfbWluUmVzZXJ2ZWRUb2tlbixcclxuICAgICAgICB1aW50MjU2IHByaWNlLFxyXG4gICAgICAgIHVpbnQyNTYgdG9rZW5JZCxcclxuICAgICAgICBzdHJpbmcgbWVtb3J5IG5hbWUsXHJcbiAgICAgICAgc3RyaW5nIG1lbW9yeSBzeW1ib2wsXHJcbiAgICAgICAgdWludCBfZGF5Q291bnQgKi9cclxuICAgICAgKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJncmVlbmJ0blwiIG9uQ2xpY2s9e2hhbmRsZVNwbGl0Q2xpY2t9PlxyXG4gICAgICAgIFNQTElUXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BsaXRCdXR0b247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJyb3dzZXJQcm92aWRlciIsInBhcnNlRXRoZXIiLCJORlQzIiwic3BsaXQiLCJTcGxpdEJ1dHRvbiIsImhhbmRsZVNwbGl0Q2xpY2siLCJuZnRDb250cmFjdEFkZHJlc3MiLCJwcm92aWRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwic3BsaXRiIiwiY29ubmVjdCIsIm5mdCIsImFkciIsImlkTkZUIiwiYXByb3ZlIiwiYXBwcm92ZSIsIkJpZ0ludCIsIndhaXQiLCJnYXNMaW1pdCIsImVycm9yIiwiY29uc29sZSIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SplitButton.js\n"));

/***/ })

});