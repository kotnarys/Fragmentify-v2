"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./components/ImageSlider/ImageSlider.jsx":
/*!************************************************!*\
  !*** ./components/ImageSlider/ImageSlider.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageSlider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/scss */ \"./node_modules/swiper/swiper.scss\");\n/* harmony import */ var swiper_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css_effect_coverflow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/effect-coverflow */ \"./node_modules/swiper/modules/effect-coverflow/effect-coverflow.min.css\");\n/* harmony import */ var swiper_css_effect_coverflow__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_effect_coverflow__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _slider_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slider.module.scss */ \"./components/ImageSlider/slider.module.scss\");\n/* harmony import */ var _slider_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_slider_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/effect-cards */ \"./node_modules/swiper/modules/effect-cards/effect-cards.min.css\");\n/* harmony import */ var swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction ImageSlider() {\n    _s();\n    const [windowWidth, setWindowWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setWindowWidth(window.innerWidth);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleWindowResize = ()=>{\n            setWindowWidth(window.innerWidth);\n        };\n        window.addEventListener(\"resize\", handleWindowResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleWindowResize);\n        };\n    }, [\n        windowWidth\n    ]);\n    const desktopCarousel = {\n        effect: \"coverflow\",\n        coverflowEffect: {\n            rotate: 30,\n            stretch: 0,\n            depth: 100,\n            modifier: 1,\n            slideShadows: false\n        },\n        modules: [\n            swiper__WEBPACK_IMPORTED_MODULE_6__.EffectCoverflow,\n            swiper__WEBPACK_IMPORTED_MODULE_6__.Pagination\n        ],\n        parallax: true\n    };\n    const mobileCarousel = {\n        effect: \"cards\",\n        cardsEffect: {\n            slideShadows: false\n        },\n        modules: [\n            swiper__WEBPACK_IMPORTED_MODULE_6__.EffectCards\n        ]\n    };\n    console.log(windowWidth);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n        ...windowWidth > 1280 ? {\n            ...desktopCarousel\n        } : {\n            mobileCarousel\n        },\n        className: (_slider_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_slider_module_scss__WEBPACK_IMPORTED_MODULE_8___default().box),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/NFT_2.jpg\",\n                        alt: \"img1\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_slider_module_scss__WEBPACK_IMPORTED_MODULE_8___default().box),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/NFT_3.jpg\",\n                        alt: \"img3\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_slider_module_scss__WEBPACK_IMPORTED_MODULE_8___default().box),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/NFT_4.jpg\",\n                        alt: \"img4\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_slider_module_scss__WEBPACK_IMPORTED_MODULE_8___default().box),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/NFT_2.jpg\",\n                        alt: \"img2\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(ImageSlider, \"YsMsjTn8ohA0lMMQlR32ec28Dt8=\");\n_c = ImageSlider;\nvar _c;\n$RefreshReg$(_c, \"ImageSlider\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ltYWdlU2xpZGVyL0ltYWdlU2xpZGVyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0E7QUFDOUI7QUFDZ0I7QUFDTjtBQUNNO0FBQ2dCO0FBQ3BCO0FBQ0k7QUFFdEIsU0FBU1MsY0FBYzs7SUFDcEMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDO0lBQy9DRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RVLGVBQWVDLE9BQU9DLFVBQVU7SUFDbEMsR0FBRyxFQUFFO0lBQ0xaLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNYSxxQkFBcUIsSUFBTTtZQUMvQkgsZUFBZUMsT0FBT0MsVUFBVTtRQUNsQztRQUNBRCxPQUFPRyxnQkFBZ0IsQ0FBQyxVQUFVRDtRQUNsQyxPQUFPLElBQU07WUFDWEYsT0FBT0ksbUJBQW1CLENBQUMsVUFBVUY7UUFDdkM7SUFDRixHQUFHO1FBQUNKO0tBQVk7SUFDaEIsTUFBTU8sa0JBQWtCO1FBQ3RCQyxRQUFRO1FBQ1JDLGlCQUFpQjtZQUNmQyxRQUFRO1lBQ1JDLFNBQVM7WUFDVEMsT0FBTztZQUNQQyxVQUFVO1lBQ1ZDLGNBQWMsS0FBSztRQUNyQjtRQUNBQyxTQUFTO1lBQUNuQixtREFBZUE7WUFBRUMsOENBQVVBO1NBQUM7UUFFdENtQixVQUFVLElBQUk7SUFDaEI7SUFDQSxNQUFNQyxpQkFBaUI7UUFDckJULFFBQVE7UUFDUlUsYUFBYTtZQUNYSixjQUFjLEtBQUs7UUFDckI7UUFDQUMsU0FBUztZQUFDakIsK0NBQVdBO1NBQUM7SUFDeEI7SUFDQXFCLFFBQVFDLEdBQUcsQ0FBQ3BCO0lBQ1oscUJBQ0UsOERBQUNQLGdEQUFNQTtRQUNKLEdBQUlPLGNBQWMsT0FBTztZQUFFLEdBQUdPLGVBQWU7UUFBQyxJQUFJO1lBQUVVO1FBQWUsQ0FBQztRQUNyRUksV0FBVzFCLHNFQUFXOzswQkFFdEIsOERBQUNELHFEQUFXQTswQkFDViw0RUFBQzZCO29CQUFJRixXQUFXMUIsZ0VBQUs7OEJBQ25CLDRFQUFDOEI7d0JBQUlDLEtBQUk7d0JBQWFDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzlCLDhEQUFDakMscURBQVdBOzBCQUNWLDRFQUFDNkI7b0JBQUlGLFdBQVcxQixnRUFBSzs4QkFDbkIsNEVBQUM4Qjt3QkFBSUMsS0FBSTt3QkFBYUMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7OzswQkFHOUIsOERBQUNqQyxxREFBV0E7MEJBQ1YsNEVBQUM2QjtvQkFBSUYsV0FBVzFCLGdFQUFLOzhCQUNuQiw0RUFBQzhCO3dCQUFJQyxLQUFJO3dCQUFhQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUc5Qiw4REFBQ2pDLHFEQUFXQTswQkFDViw0RUFBQzZCO29CQUFJRixXQUFXMUIsZ0VBQUs7OEJBQ25CLDRFQUFDOEI7d0JBQUlDLEtBQUk7d0JBQWFDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEMsQ0FBQztHQTlEdUI1QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ltYWdlU2xpZGVyL0ltYWdlU2xpZGVyLmpzeD9iZGFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcbmltcG9ydCBcInN3aXBlci9zY3NzXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3MvZWZmZWN0LWNvdmVyZmxvd1wiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL3BhZ2luYXRpb25cIjtcclxuaW1wb3J0IHMgZnJvbSBcIi4vc2xpZGVyLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IEVmZmVjdENvdmVyZmxvdywgUGFnaW5hdGlvbiB9IGZyb20gXCJzd2lwZXJcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzcy9lZmZlY3QtY2FyZHNcIjtcclxuaW1wb3J0IHsgRWZmZWN0Q2FyZHMgfSBmcm9tIFwic3dpcGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZVNsaWRlcigpIHtcclxuICBjb25zdCBbd2luZG93V2lkdGgsIHNldFdpbmRvd1dpZHRoXSA9IHVzZVN0YXRlKDApO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVXaW5kb3dSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgIHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVXaW5kb3dSZXNpemUpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlV2luZG93UmVzaXplKTtcclxuICAgIH07XHJcbiAgfSwgW3dpbmRvd1dpZHRoXSk7XHJcbiAgY29uc3QgZGVza3RvcENhcm91c2VsID0ge1xyXG4gICAgZWZmZWN0OiBcImNvdmVyZmxvd1wiLFxyXG4gICAgY292ZXJmbG93RWZmZWN0OiB7XHJcbiAgICAgIHJvdGF0ZTogMzAsXHJcbiAgICAgIHN0cmV0Y2g6IDAsXHJcbiAgICAgIGRlcHRoOiAxMDAsXHJcbiAgICAgIG1vZGlmaWVyOiAxLFxyXG4gICAgICBzbGlkZVNoYWRvd3M6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG1vZHVsZXM6IFtFZmZlY3RDb3ZlcmZsb3csIFBhZ2luYXRpb25dLFxyXG5cclxuICAgIHBhcmFsbGF4OiB0cnVlLFxyXG4gIH07XHJcbiAgY29uc3QgbW9iaWxlQ2Fyb3VzZWwgPSB7XHJcbiAgICBlZmZlY3Q6IFwiY2FyZHNcIixcclxuICAgIGNhcmRzRWZmZWN0OiB7XHJcbiAgICAgIHNsaWRlU2hhZG93czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgbW9kdWxlczogW0VmZmVjdENhcmRzXSxcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKHdpbmRvd1dpZHRoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFN3aXBlclxyXG4gICAgICB7Li4uKHdpbmRvd1dpZHRoID4gMTI4MCA/IHsgLi4uZGVza3RvcENhcm91c2VsIH0gOiB7IG1vYmlsZUNhcm91c2VsIH0pfVxyXG4gICAgICBjbGFzc05hbWU9e3MuY29udGFpbmVyfVxyXG4gICAgPlxyXG4gICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuYm94fT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL05GVF8yLmpwZ1wiIGFsdD1cImltZzFcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuYm94fT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL05GVF8zLmpwZ1wiIGFsdD1cImltZzNcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuYm94fT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL05GVF80LmpwZ1wiIGFsdD1cImltZzRcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuYm94fT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL05GVF8yLmpwZ1wiIGFsdD1cImltZzJcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgPC9Td2lwZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwicyIsIkVmZmVjdENvdmVyZmxvdyIsIlBhZ2luYXRpb24iLCJFZmZlY3RDYXJkcyIsIkltYWdlU2xpZGVyIiwid2luZG93V2lkdGgiLCJzZXRXaW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoYW5kbGVXaW5kb3dSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRlc2t0b3BDYXJvdXNlbCIsImVmZmVjdCIsImNvdmVyZmxvd0VmZmVjdCIsInJvdGF0ZSIsInN0cmV0Y2giLCJkZXB0aCIsIm1vZGlmaWVyIiwic2xpZGVTaGFkb3dzIiwibW9kdWxlcyIsInBhcmFsbGF4IiwibW9iaWxlQ2Fyb3VzZWwiLCJjYXJkc0VmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJkaXYiLCJib3giLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ImageSlider/ImageSlider.jsx\n"));

/***/ })

});