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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n// Go to www.alchemy.com and create an account to grab your own api key!\nconst apiKey = \"Un9qgOQpr_UvW9sykMNHyjhol3OSeifz\";\nconst endpoint = \"https://eth-goerli.g.alchemy.com/v2/\".concat(apiKey);\nconst fetchNFTs = async (owner, // contractAddress,\nsetNFTs, retryAttempt)=>{\n    if (retryAttempt === 5) {\n        return;\n    }\n    if (owner) {\n        let data;\n        try {\n            //     if (contractAddress) {\n            //     data = await fetch(\n            //     `${endpoint}/getNFTs?owner=${owner}&contractAddresses%5B%5D=${contractAddress}`\n            //       ).then((data) => data.json());\n            //      } else {\n            data = await fetch(\"\".concat(endpoint, \"/getNFTs?owner=\").concat(owner)).then((data)=>data.json());\n        //   }\n        } catch (e) {\n            fetchNFTs(endpoint, owner, setNFTs, retryAttempt + 1);\n        }\n        setNFTs(data.ownedNfts);\n        return data;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchNFTs);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05GVC9mZXRjaE5GVHMuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLHdFQUF3RTtBQUN4RSxNQUFNQSxTQUFTO0FBQ2YsTUFBTUMsV0FBVyx1Q0FBOEMsT0FBUEQ7QUFFeEQsTUFBTUUsWUFBWSxPQUNoQkMsT0FDQSxtQkFBbUI7QUFDbkJDLFNBQ0FDLGVBQ0c7SUFDSCxJQUFJQSxpQkFBaUIsR0FBRztRQUN0QjtJQUNGLENBQUM7SUFDRCxJQUFJRixPQUFPO1FBQ1QsSUFBSUc7UUFDSixJQUFJO1lBQ0YsNkJBQTZCO1lBQzdCLDBCQUEwQjtZQUMxQixzRkFBc0Y7WUFDdEYsdUNBQXVDO1lBQ3ZDLGdCQUFnQjtZQUNoQkEsT0FBTyxNQUFNQyxNQUFNLEdBQTZCSixPQUExQkYsVUFBUyxtQkFBdUIsT0FBTkUsUUFBU0ssSUFBSSxDQUFDLENBQUNGLE9BQzdEQSxLQUFLRyxJQUFJO1FBRVgsTUFBTTtRQUNSLEVBQUUsT0FBT0MsR0FBRztZQUNWUixVQUFVRCxVQUFVRSxPQUFPQyxTQUFTQyxlQUFlO1FBQ3JEO1FBRUFELFFBQVFFLEtBQUtLLFNBQVM7UUFDdEIsT0FBT0w7SUFDVCxDQUFDO0FBQ0g7QUFFQSwrREFBZUosU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05GVC9mZXRjaE5GVHMuanM/MTk5YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHbyB0byB3d3cuYWxjaGVteS5jb20gYW5kIGNyZWF0ZSBhbiBhY2NvdW50IHRvIGdyYWIgeW91ciBvd24gYXBpIGtleSFcclxuY29uc3QgYXBpS2V5ID0gXCJVbjlxZ09RcHJfVXZXOXN5a01OSHlqaG9sM09TZWlmelwiO1xyXG5jb25zdCBlbmRwb2ludCA9IGBodHRwczovL2V0aC1nb2VybGkuZy5hbGNoZW15LmNvbS92Mi8ke2FwaUtleX1gO1xyXG5cclxuY29uc3QgZmV0Y2hORlRzID0gYXN5bmMgKFxyXG4gIG93bmVyLFxyXG4gIC8vIGNvbnRyYWN0QWRkcmVzcyxcclxuICBzZXRORlRzLFxyXG4gIHJldHJ5QXR0ZW1wdFxyXG4pID0+IHtcclxuICBpZiAocmV0cnlBdHRlbXB0ID09PSA1KSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChvd25lcikge1xyXG4gICAgbGV0IGRhdGE7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyAgICAgaWYgKGNvbnRyYWN0QWRkcmVzcykge1xyXG4gICAgICAvLyAgICAgZGF0YSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAvLyAgICAgYCR7ZW5kcG9pbnR9L2dldE5GVHM/b3duZXI9JHtvd25lcn0mY29udHJhY3RBZGRyZXNzZXMlNUIlNUQ9JHtjb250cmFjdEFkZHJlc3N9YFxyXG4gICAgICAvLyAgICAgICApLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKTtcclxuICAgICAgLy8gICAgICB9IGVsc2Uge1xyXG4gICAgICBkYXRhID0gYXdhaXQgZmV0Y2goYCR7ZW5kcG9pbnR9L2dldE5GVHM/b3duZXI9JHtvd25lcn1gKS50aGVuKChkYXRhKSA9PlxyXG4gICAgICAgIGRhdGEuanNvbigpXHJcbiAgICAgICk7XHJcbiAgICAgIC8vICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBmZXRjaE5GVHMoZW5kcG9pbnQsIG93bmVyLCBzZXRORlRzLCByZXRyeUF0dGVtcHQgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRORlRzKGRhdGEub3duZWROZnRzKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZldGNoTkZUcztcclxuIl0sIm5hbWVzIjpbImFwaUtleSIsImVuZHBvaW50IiwiZmV0Y2hORlRzIiwib3duZXIiLCJzZXRORlRzIiwicmV0cnlBdHRlbXB0IiwiZGF0YSIsImZldGNoIiwidGhlbiIsImpzb24iLCJlIiwib3duZWROZnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NFT/fetchNFTs.js\n"));

/***/ })

});