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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _Contract_NftContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contract/NftContract */ \"./components/Contract/NftContract.js\");\n/* harmony import */ var _Contract_SplitContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contract/SplitContract */ \"./components/Contract/SplitContract.js\");\n\n\n\n\n\nfunction SplitButton() {\n    async function handleSplitClick(nftContractAddress) {\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.BrowserProvider(window.ethereum);\n        const signer = await provider.getSigner();\n        const splitb = _Contract_SplitContract__WEBPACK_IMPORTED_MODULE_3__[\"default\"].connect(signer);\n        const nft = _Contract_NftContract__WEBPACK_IMPORTED_MODULE_2__[\"default\"].connect(signer);\n        const adr = \"0xB2b322C04A6FDa12Ca343CECC0C0D864842b1F2f\";\n        const idNFT = \"0x0000000000000000000000000000000000000000000000000000000000000000\";\n        try {\n            const aprove = await nft.approve(\"0x2885CaDfAa67Bfa3A96961de436B1276A1d36701\", BigInt(idNFT));\n            aprove.wait();\n            await splitb.split(adr, BigInt(100), BigInt(50), BigInt((0,ethers__WEBPACK_IMPORTED_MODULE_4__.parseEther)(\"0.0001\")), BigInt(idNFT), \"hrmo\", \"HFX\", BigInt(5), {\n                gasLimit: \"300000\"\n            });\n            console.log(\"splt succses\");\n        } catch (error) {\n            console.error(error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"greenbtn\",\n            onClick: handleSplitClick,\n            children: \"SPLIT\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kotna\\\\Desktop\\\\GITHUB\\\\project\\\\components\\\\SplitButton.js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = SplitButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SplitButton);\nvar _c;\n$RefreshReg$(_c, \"SplitButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NwbGl0QnV0dG9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUUyQjtBQUVYO0FBQ0c7QUFFN0MsU0FBU0ssY0FBYztJQUNyQixlQUFlQyxpQkFBaUJDLGtCQUFrQixFQUFFO1FBQ2xELE1BQU1DLFdBQVcsSUFBSVAsbURBQWVBLENBQUNRLE9BQU9DLFFBQVE7UUFDcEQsTUFBTUMsU0FBUyxNQUFNSCxTQUFTSSxTQUFTO1FBQ3ZDLE1BQU1DLFNBQVNULHVFQUFhLENBQUNPO1FBQzdCLE1BQU1JLE1BQU1aLHFFQUFZLENBQUNRO1FBQ3pCLE1BQU1LLE1BQU07UUFDWixNQUFNQyxRQUNKO1FBRUYsSUFBSTtZQUNGLE1BQU1DLFNBQVMsTUFBTUgsSUFBSUksT0FBTyxDQUM5Qiw4Q0FDQUMsT0FBT0g7WUFFVEMsT0FBT0csSUFBSTtZQUNYLE1BQU1SLE9BQU9ULEtBQUssQ0FDaEJZLEtBQ0FJLE9BQU8sTUFDUEEsT0FBTyxLQUNQQSxPQUFPbEIsa0RBQVVBLENBQUMsWUFDbEJrQixPQUFPSCxRQUNQLFFBQ0EsT0FDQUcsT0FBTyxJQUNQO2dCQUFFRSxVQUFVO1lBQVM7WUFXdkJDLFFBQVFDLEdBQUcsQ0FBQztRQUNkLEVBQUUsT0FBT0MsT0FBTztZQUNkRixRQUFRRSxLQUFLLENBQUNBO1FBQ2hCO0lBQ0Y7SUFDQSxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBT0MsV0FBVTtZQUFXQyxTQUFTdEI7c0JBQWtCOzs7Ozs7O0FBSzlEO0tBaERTRDtBQWtEVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NwbGl0QnV0dG9uLmpzPzRkMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgQnJvd3NlclByb3ZpZGVyLCBwYXJzZUV0aGVyIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5cclxuaW1wb3J0IE5GVDMgZnJvbSBcIi4vQ29udHJhY3QvTmZ0Q29udHJhY3RcIjtcclxuaW1wb3J0IHNwbGl0IGZyb20gXCIuL0NvbnRyYWN0L1NwbGl0Q29udHJhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFNwbGl0QnV0dG9uKCkge1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVNwbGl0Q2xpY2sobmZ0Q29udHJhY3RBZGRyZXNzKSB7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBCcm93c2VyUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcclxuICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgY29uc3Qgc3BsaXRiID0gc3BsaXQuY29ubmVjdChzaWduZXIpO1xyXG4gICAgY29uc3QgbmZ0ID0gTkZUMy5jb25uZWN0KHNpZ25lcik7XHJcbiAgICBjb25zdCBhZHIgPSBcIjB4QjJiMzIyQzA0QTZGRGExMkNhMzQzQ0VDQzBDMEQ4NjQ4NDJiMUYyZlwiO1xyXG4gICAgY29uc3QgaWRORlQgPVxyXG4gICAgICBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwiO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGFwcm92ZSA9IGF3YWl0IG5mdC5hcHByb3ZlKFxyXG4gICAgICAgIFwiMHgyODg1Q2FEZkFhNjdCZmEzQTk2OTYxZGU0MzZCMTI3NkExZDM2NzAxXCIsXHJcbiAgICAgICAgQmlnSW50KGlkTkZUKVxyXG4gICAgICApO1xyXG4gICAgICBhcHJvdmUud2FpdCgpO1xyXG4gICAgICBhd2FpdCBzcGxpdGIuc3BsaXQoXHJcbiAgICAgICAgYWRyLFxyXG4gICAgICAgIEJpZ0ludCgxMDApLFxyXG4gICAgICAgIEJpZ0ludCg1MCksXHJcbiAgICAgICAgQmlnSW50KHBhcnNlRXRoZXIoXCIwLjAwMDFcIikpLFxyXG4gICAgICAgIEJpZ0ludChpZE5GVCksXHJcbiAgICAgICAgXCJocm1vXCIsXHJcbiAgICAgICAgXCJIRlhcIixcclxuICAgICAgICBCaWdJbnQoNSksXHJcbiAgICAgICAgeyBnYXNMaW1pdDogXCIzMDAwMDBcIiB9XHJcbiAgICAgICAgLyogICBFUkM3MjEgbmZ0Q29udHJhY3QsIFxyXG4gICAgICAgIHVpbnQgX21heFRva2VuU3VwcGx5LFxyXG4gICAgICAgIHVpbnQyNTYgX21pblJlc2VydmVkVG9rZW4sXHJcbiAgICAgICAgdWludDI1NiBwcmljZSxcclxuICAgICAgICB1aW50MjU2IHRva2VuSWQsXHJcbiAgICAgICAgc3RyaW5nIG1lbW9yeSBuYW1lLFxyXG4gICAgICAgIHN0cmluZyBtZW1vcnkgc3ltYm9sLFxyXG4gICAgICAgIHVpbnQgX2RheUNvdW50ICovXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcInNwbHQgc3VjY3Nlc1wiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJncmVlbmJ0blwiIG9uQ2xpY2s9e2hhbmRsZVNwbGl0Q2xpY2t9PlxyXG4gICAgICAgIFNQTElUXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BsaXRCdXR0b247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJyb3dzZXJQcm92aWRlciIsInBhcnNlRXRoZXIiLCJORlQzIiwic3BsaXQiLCJTcGxpdEJ1dHRvbiIsImhhbmRsZVNwbGl0Q2xpY2siLCJuZnRDb250cmFjdEFkZHJlc3MiLCJwcm92aWRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwic3BsaXRiIiwiY29ubmVjdCIsIm5mdCIsImFkciIsImlkTkZUIiwiYXByb3ZlIiwiYXBwcm92ZSIsIkJpZ0ludCIsIndhaXQiLCJnYXNMaW1pdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SplitButton.js\n"));

/***/ })

});