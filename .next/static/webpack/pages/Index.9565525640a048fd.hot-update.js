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

/***/ "./components/NFT/fetchNFTs.js":
/*!*************************************!*\
  !*** ./components/NFT/fetchNFTs.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n// Go to www.alchemy.com and create an account to grab your own api key!\nconst apiKey = \"sKaPjjjxG03aHv0sJPVMc0HeqYNI6iC2\";\nconst endpoint = \"https://eth-goerli.g.alchemy.com/v2/\".concat(apiKey);\nconst fetchNFTs = async (owner, contractAddress, setNFTs, retryAttempt)=>{\n    if (retryAttempt === 5) {\n        return;\n    }\n    if (owner) {\n        let data;\n        try {\n            if (contractAddress) {\n                data = await fetch(\"\".concat(endpoint, \"/getNFTs?owner=\").concat(owner, \"&contractAddresses%5B%5D=\").concat(contractAddress)).then((data)=>data.json());\n            } else {\n                data = await fetch(\"\".concat(endpoint, \"/getNFTs?owner=\").concat(owner)).then((data)=>data.json());\n            }\n        } catch (e) {\n            fetchNFTs(endpoint, owner, contractAddress, setNFTs, retryAttempt + 1);\n        }\n        setNFTs(data.ownedNfts);\n        return data;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchNFTs);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05GVC9mZXRjaE5GVHMuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLHdFQUF3RTtBQUN4RSxNQUFNQSxTQUFTO0FBQ2YsTUFBTUMsV0FBVyx1Q0FBOEMsT0FBUEQ7QUFFeEQsTUFBTUUsWUFBWSxPQUFPQyxPQUFPQyxpQkFBaUJDLFNBQVNDLGVBQWlCO0lBQ3pFLElBQUlBLGlCQUFpQixHQUFHO1FBQ3RCO0lBQ0YsQ0FBQztJQUNELElBQUlILE9BQU87UUFDVCxJQUFJSTtRQUNKLElBQUk7WUFDRixJQUFJSCxpQkFBaUI7Z0JBQ25CRyxPQUFPLE1BQU1DLE1BQ1gsR0FBNkJMLE9BQTFCRixVQUFTLG1CQUFrREcsT0FBakNELE9BQU0sNkJBQTJDLE9BQWhCQyxrQkFDOURLLElBQUksQ0FBQyxDQUFDRixPQUFTQSxLQUFLRyxJQUFJO1lBQzVCLE9BQU87Z0JBQ0xILE9BQU8sTUFBTUMsTUFBTSxHQUE2QkwsT0FBMUJGLFVBQVMsbUJBQXVCLE9BQU5FLFFBQVNNLElBQUksQ0FBQyxDQUFDRixPQUM3REEsS0FBS0csSUFBSTtZQUViLENBQUM7UUFDSCxFQUFFLE9BQU9DLEdBQUc7WUFDVlQsVUFBVUQsVUFBVUUsT0FBT0MsaUJBQWlCQyxTQUFTQyxlQUFlO1FBQ3RFO1FBRUFELFFBQVFFLEtBQUtLLFNBQVM7UUFDdEIsT0FBT0w7SUFDVCxDQUFDO0FBQ0g7QUFFQSwrREFBZUwsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05GVC9mZXRjaE5GVHMuanM/MTk5YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHbyB0byB3d3cuYWxjaGVteS5jb20gYW5kIGNyZWF0ZSBhbiBhY2NvdW50IHRvIGdyYWIgeW91ciBvd24gYXBpIGtleSFcclxuY29uc3QgYXBpS2V5ID0gXCJzS2FQampqeEcwM2FIdjBzSlBWTWMwSGVxWU5JNmlDMlwiO1xyXG5jb25zdCBlbmRwb2ludCA9IGBodHRwczovL2V0aC1nb2VybGkuZy5hbGNoZW15LmNvbS92Mi8ke2FwaUtleX1gO1xyXG5cclxuY29uc3QgZmV0Y2hORlRzID0gYXN5bmMgKG93bmVyLCBjb250cmFjdEFkZHJlc3MsIHNldE5GVHMsIHJldHJ5QXR0ZW1wdCkgPT4ge1xyXG4gIGlmIChyZXRyeUF0dGVtcHQgPT09IDUpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKG93bmVyKSB7XHJcbiAgICBsZXQgZGF0YTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChjb250cmFjdEFkZHJlc3MpIHtcclxuICAgICAgICBkYXRhID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICBgJHtlbmRwb2ludH0vZ2V0TkZUcz9vd25lcj0ke293bmVyfSZjb250cmFjdEFkZHJlc3NlcyU1QiU1RD0ke2NvbnRyYWN0QWRkcmVzc31gXHJcbiAgICAgICAgKS50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0YSA9IGF3YWl0IGZldGNoKGAke2VuZHBvaW50fS9nZXRORlRzP293bmVyPSR7b3duZXJ9YCkudGhlbigoZGF0YSkgPT5cclxuICAgICAgICAgIGRhdGEuanNvbigpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBmZXRjaE5GVHMoZW5kcG9pbnQsIG93bmVyLCBjb250cmFjdEFkZHJlc3MsIHNldE5GVHMsIHJldHJ5QXR0ZW1wdCArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE5GVHMoZGF0YS5vd25lZE5mdHMpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hORlRzO1xyXG4iXSwibmFtZXMiOlsiYXBpS2V5IiwiZW5kcG9pbnQiLCJmZXRjaE5GVHMiLCJvd25lciIsImNvbnRyYWN0QWRkcmVzcyIsInNldE5GVHMiLCJyZXRyeUF0dGVtcHQiLCJkYXRhIiwiZmV0Y2giLCJ0aGVuIiwianNvbiIsImUiLCJvd25lZE5mdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NFT/fetchNFTs.js\n"));

/***/ })

});