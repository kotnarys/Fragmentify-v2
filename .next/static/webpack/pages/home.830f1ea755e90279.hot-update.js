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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageSlider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/scss */ \"./node_modules/swiper/swiper.scss\");\n/* harmony import */ var swiper_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css_effect_coverflow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/effect-coverflow */ \"./node_modules/swiper/modules/effect-coverflow/effect-coverflow.min.css\");\n/* harmony import */ var swiper_css_effect_coverflow__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_effect_coverflow__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _slider_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slider.module.scss */ \"./components/ImageSlider/slider.module.scss\");\n/* harmony import */ var _slider_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_slider_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/effect-cards */ \"./node_modules/swiper/modules/effect-cards/effect-cards.min.css\");\n/* harmony import */ var swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction ImageSlider() {\n    _s();\n    const [windowWidth, setWindowWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setWindowWidth(window.innerWidth);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleWindowResize = ()=>{\n            setWindowWidth(window.innerWidth);\n        };\n        window.addEventListener(\"resize\", handleWindowResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleWindowResize);\n        };\n    }, [\n        windowWidth\n    ]);\n    const desktopCarousel = {\n        effect: \"coverflow\",\n        coverflowEffect: {\n            rotate: 30,\n            stretch: 0,\n            depth: 100,\n            modifier: 1,\n            slideShadows: false\n        },\n        modules: [\n            swiper__WEBPACK_IMPORTED_MODULE_6__.EffectCoverflow,\n            swiper__WEBPACK_IMPORTED_MODULE_6__.Pagination\n        ],\n        slidesPerView: 3,\n        parallax: true\n    };\n    const mobileCarousel = {\n        effect: \"cards\",\n        cardsEffect: {\n            slideShadows: false\n        },\n        modules: [\n            swiper__WEBPACK_IMPORTED_MODULE_6__.EffectCards\n        ]\n    };\n    console.log(windowWidth);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n        ...windowWidth > 1280 ? {\n            ...desktopCarousel\n        } : {\n            mobileCarousel\n        },\n        className: (_slider_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_slider_module_scss__WEBPACK_IMPORTED_MODULE_8___default().box),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/NFT_2.jpg\",\n                        alt: \"img1\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_slider_module_scss__WEBPACK_IMPORTED_MODULE_8___default().box),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/NFT_3.jpg\",\n                        alt: \"img3\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_slider_module_scss__WEBPACK_IMPORTED_MODULE_8___default().box),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/NFT_4.jpg\",\n                        alt: \"img4\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_slider_module_scss__WEBPACK_IMPORTED_MODULE_8___default().box),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/NFT_2.jpg\",\n                        alt: \"img2\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Мои Документы\\\\Учеба\\\\Ethereum\\\\studyProject\\\\Fragmentify-v2\\\\components\\\\ImageSlider\\\\ImageSlider.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(ImageSlider, \"YsMsjTn8ohA0lMMQlR32ec28Dt8=\");\n_c = ImageSlider;\nvar _c;\n$RefreshReg$(_c, \"ImageSlider\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ltYWdlU2xpZGVyL0ltYWdlU2xpZGVyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0E7QUFDOUI7QUFDZ0I7QUFDTjtBQUNNO0FBQ2dCO0FBQ3BCO0FBQ0k7QUFFdEIsU0FBU1MsY0FBYzs7SUFDcEMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDO0lBQy9DRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RVLGVBQWVDLE9BQU9DLFVBQVU7SUFDbEMsR0FBRyxFQUFFO0lBQ0xaLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNYSxxQkFBcUIsSUFBTTtZQUMvQkgsZUFBZUMsT0FBT0MsVUFBVTtRQUNsQztRQUNBRCxPQUFPRyxnQkFBZ0IsQ0FBQyxVQUFVRDtRQUNsQyxPQUFPLElBQU07WUFDWEYsT0FBT0ksbUJBQW1CLENBQUMsVUFBVUY7UUFDdkM7SUFDRixHQUFHO1FBQUNKO0tBQVk7SUFDaEIsTUFBTU8sa0JBQWtCO1FBQ3RCQyxRQUFRO1FBQ1JDLGlCQUFpQjtZQUNmQyxRQUFRO1lBQ1JDLFNBQVM7WUFDVEMsT0FBTztZQUNQQyxVQUFVO1lBQ1ZDLGNBQWMsS0FBSztRQUNyQjtRQUNBQyxTQUFTO1lBQUNuQixtREFBZUE7WUFBRUMsOENBQVVBO1NBQUM7UUFDdENtQixlQUFlO1FBQ2ZDLFVBQVUsSUFBSTtJQUNoQjtJQUNBLE1BQU1DLGlCQUFpQjtRQUNyQlYsUUFBUTtRQUNSVyxhQUFhO1lBQ1hMLGNBQWMsS0FBSztRQUNyQjtRQUNBQyxTQUFTO1lBQUNqQiwrQ0FBV0E7U0FBQztJQUN4QjtJQUNBc0IsUUFBUUMsR0FBRyxDQUFDckI7SUFDWixxQkFDRSw4REFBQ1AsZ0RBQU1BO1FBQ0osR0FBSU8sY0FBYyxPQUFPO1lBQUUsR0FBR08sZUFBZTtRQUFDLElBQUk7WUFBRVc7UUFBZSxDQUFDO1FBQ3JFSSxXQUFXM0Isc0VBQVc7OzBCQUV0Qiw4REFBQ0QscURBQVdBOzBCQUNWLDRFQUFDOEI7b0JBQUlGLFdBQVczQixnRUFBSzs4QkFDbkIsNEVBQUMrQjt3QkFBSUMsS0FBSTt3QkFBYUMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7OzswQkFHOUIsOERBQUNsQyxxREFBV0E7MEJBQ1YsNEVBQUM4QjtvQkFBSUYsV0FBVzNCLGdFQUFLOzhCQUNuQiw0RUFBQytCO3dCQUFJQyxLQUFJO3dCQUFhQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUc5Qiw4REFBQ2xDLHFEQUFXQTswQkFDViw0RUFBQzhCO29CQUFJRixXQUFXM0IsZ0VBQUs7OEJBQ25CLDRFQUFDK0I7d0JBQUlDLEtBQUk7d0JBQWFDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzlCLDhEQUFDbEMscURBQVdBOzBCQUNWLDRFQUFDOEI7b0JBQUlGLFdBQVczQixnRUFBSzs4QkFDbkIsNEVBQUMrQjt3QkFBSUMsS0FBSTt3QkFBYUMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQyxDQUFDO0dBOUR1QjdCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSW1hZ2VTbGlkZXIvSW1hZ2VTbGlkZXIuanN4P2JkYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IFwic3dpcGVyL3Njc3NcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzcy9lZmZlY3QtY292ZXJmbG93XCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3MvcGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgcyBmcm9tIFwiLi9zbGlkZXIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgRWZmZWN0Q292ZXJmbG93LCBQYWdpbmF0aW9uIH0gZnJvbSBcInN3aXBlclwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL2VmZmVjdC1jYXJkc1wiO1xyXG5pbXBvcnQgeyBFZmZlY3RDYXJkcyB9IGZyb20gXCJzd2lwZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlU2xpZGVyKCkge1xyXG4gIGNvbnN0IFt3aW5kb3dXaWR0aCwgc2V0V2luZG93V2lkdGhdID0gdXNlU3RhdGUoMCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICB9LCBbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVdpbmRvd1Jlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvd1Jlc2l6ZSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVXaW5kb3dSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbd2luZG93V2lkdGhdKTtcclxuICBjb25zdCBkZXNrdG9wQ2Fyb3VzZWwgPSB7XHJcbiAgICBlZmZlY3Q6IFwiY292ZXJmbG93XCIsXHJcbiAgICBjb3ZlcmZsb3dFZmZlY3Q6IHtcclxuICAgICAgcm90YXRlOiAzMCxcclxuICAgICAgc3RyZXRjaDogMCxcclxuICAgICAgZGVwdGg6IDEwMCxcclxuICAgICAgbW9kaWZpZXI6IDEsXHJcbiAgICAgIHNsaWRlU2hhZG93czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgbW9kdWxlczogW0VmZmVjdENvdmVyZmxvdywgUGFnaW5hdGlvbl0sXHJcbiAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgcGFyYWxsYXg6IHRydWUsXHJcbiAgfTtcclxuICBjb25zdCBtb2JpbGVDYXJvdXNlbCA9IHtcclxuICAgIGVmZmVjdDogXCJjYXJkc1wiLFxyXG4gICAgY2FyZHNFZmZlY3Q6IHtcclxuICAgICAgc2xpZGVTaGFkb3dzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBtb2R1bGVzOiBbRWZmZWN0Q2FyZHNdLFxyXG4gIH07XHJcbiAgY29uc29sZS5sb2cod2luZG93V2lkdGgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3dpcGVyXHJcbiAgICAgIHsuLi4od2luZG93V2lkdGggPiAxMjgwID8geyAuLi5kZXNrdG9wQ2Fyb3VzZWwgfSA6IHsgbW9iaWxlQ2Fyb3VzZWwgfSl9XHJcbiAgICAgIGNsYXNzTmFtZT17cy5jb250YWluZXJ9XHJcbiAgICA+XHJcbiAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5ib3h9PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvTkZUXzIuanBnXCIgYWx0PVwiaW1nMVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5ib3h9PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvTkZUXzMuanBnXCIgYWx0PVwiaW1nM1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5ib3h9PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvTkZUXzQuanBnXCIgYWx0PVwiaW1nNFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5ib3h9PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvTkZUXzIuanBnXCIgYWx0PVwiaW1nMlwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICA8L1N3aXBlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJzIiwiRWZmZWN0Q292ZXJmbG93IiwiUGFnaW5hdGlvbiIsIkVmZmVjdENhcmRzIiwiSW1hZ2VTbGlkZXIiLCJ3aW5kb3dXaWR0aCIsInNldFdpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhhbmRsZVdpbmRvd1Jlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGVza3RvcENhcm91c2VsIiwiZWZmZWN0IiwiY292ZXJmbG93RWZmZWN0Iiwicm90YXRlIiwic3RyZXRjaCIsImRlcHRoIiwibW9kaWZpZXIiLCJzbGlkZVNoYWRvd3MiLCJtb2R1bGVzIiwic2xpZGVzUGVyVmlldyIsInBhcmFsbGF4IiwibW9iaWxlQ2Fyb3VzZWwiLCJjYXJkc0VmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJkaXYiLCJib3giLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ImageSlider/ImageSlider.jsx\n"));

/***/ })

});