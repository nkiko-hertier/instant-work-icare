"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Healthprogram/page",{

/***/ "(app-pages-browser)/./app/Healthprogram/page.tsx":
/*!************************************!*\
  !*** ./app/Healthprogram/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst healthPrograms = [\n    {\n        id: 1,\n        title: \"Weight Management Program\",\n        description: \"A comprehensive program to help you manage your weight effectively.\",\n        details: \"This program includes personalized meal plans, workout routines, and ongoing support from health professionals.\",\n        image: \"/images/weight_management.jpg\"\n    },\n    {\n        id: 2,\n        title: \"Diabetes Care Program\",\n        description: \"Manage your diabetes with our specialized care program.\",\n        details: \"Our program offers education on nutrition, blood sugar monitoring, and regular check-ups.\",\n        image: \"/images/diabetes_care.jpg\"\n    },\n    {\n        id: 3,\n        title: \"Heart Health Program\",\n        description: \"A program designed to improve your heart health.\",\n        details: \"Includes dietary guidance, exercise plans, and stress management techniques.\",\n        image: \"/images/heart_health.jpg\"\n    },\n    {\n        id: 4,\n        title: \"Mental Wellness Program\",\n        description: \"Support for mental health through counseling and resources.\",\n        details: \"This program provides access to therapy, support groups, and wellness activities.\",\n        image: \"/images/mental_wellness.jpg\"\n    }\n];\nconst faqs = [\n    {\n        question: \"Am I getting enough exercise?\",\n        answer: \"Most adults need at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity each week.\"\n    },\n    {\n        question: \"What should I eat to maintain a healthy diet?\",\n        answer: \"A balanced diet includes fruits, vegetables, whole grains, lean proteins, and healthy fats.\"\n    },\n    {\n        question: \"How can I manage stress effectively?\",\n        answer: \"Techniques include regular exercise, mindfulness meditation, and talking to a therapist.\"\n    },\n    {\n        question: \"What are the signs of a health issue I should be aware of?\",\n        answer: \"Common signs include persistent fatigue, unexplained weight changes, and chronic pain.\"\n    },\n    {\n        question: \"How often should I have health check-ups?\",\n        answer: \"It's recommended to have a check-up at least once a year, but it may vary based on individual health needs.\"\n    }\n];\nconst HealthProgramsPage = ()=>{\n    var _s = $RefreshSig$();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white min-h-screen p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-6 text-black\",\n                children: \"Health Programs\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Raymond\\\\Desktop\\\\instant-work-icare\\\\app\\\\Healthprogram\\\\page.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\",\n                children: healthPrograms.map((program)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-gray-100 rounded-lg shadow-md p-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: program.image,\n                                alt: program.title,\n                                className: \"w-full h-32 object-cover rounded-md\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Raymond\\\\Desktop\\\\instant-work-icare\\\\app\\\\Healthprogram\\\\page.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-semibold text-black mt-4\",\n                                children: program.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Raymond\\\\Desktop\\\\instant-work-icare\\\\app\\\\Healthprogram\\\\page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-2 text-gray-700\",\n                                children: program.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Raymond\\\\Desktop\\\\instant-work-icare\\\\app\\\\Healthprogram\\\\page.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/programs/\".concat(program.id),\n                                className: \"mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition\",\n                                children: \"Read More\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Raymond\\\\Desktop\\\\instant-work-icare\\\\app\\\\Healthprogram\\\\page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, program.id, true, {\n                        fileName: \"C:\\\\Users\\\\Raymond\\\\Desktop\\\\instant-work-icare\\\\app\\\\Healthprogram\\\\page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Raymond\\\\Desktop\\\\instant-work-icare\\\\app\\\\Healthprogram\\\\page.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold mt-10 mb-4 text-center text\",\n                children: \"Frequently Asked Questions\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Raymond\\\\Desktop\\\\instant-work-icare\\\\app\\\\Healthprogram\\\\page.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-4 flex flex-col items-center\",\n                children: faqs.map(_s((faq, index)=>{\n                    _s();\n                    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // State to manage visibility of the answer\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center w-full max-w-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center cursor-pointer text-lg text-gray-700\",\n                                onClick: ()=>setIsOpen(!isOpen),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-lg text-gray-700 mr-2\",\n                                        children: \"+\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Raymond\\\\Desktop\\\\instant-work-icare\\\\app\\\\Healthprogram\\\\page.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-gray-700\",\n                                        children: faq.question\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Raymond\\\\Desktop\\\\instant-work-icare\\\\app\\\\Healthprogram\\\\page.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Raymond\\\\Desktop\\\\instant-work-icare\\\\app\\\\Healthprogram\\\\page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-2 text-gray-600 transition-opacity duration-300 ease-in-out \".concat(isOpen ? \"opacity-100\" : \"opacity-0 pointer-events-none\"),\n                                style: {\n                                    maxHeight: isOpen ? \"100px\" : \"0\",\n                                    overflow: \"hidden\"\n                                },\n                                children: faq.answer\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Raymond\\\\Desktop\\\\instant-work-icare\\\\app\\\\Healthprogram\\\\page.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\Raymond\\\\Desktop\\\\instant-work-icare\\\\app\\\\Healthprogram\\\\page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, undefined);\n                }, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\"))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Raymond\\\\Desktop\\\\instant-work-icare\\\\app\\\\Healthprogram\\\\page.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Raymond\\\\Desktop\\\\instant-work-icare\\\\app\\\\Healthprogram\\\\page.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, undefined);\n};\n_c = HealthProgramsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HealthProgramsPage);\nvar _c;\n$RefreshReg$(_c, \"HealthProgramsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9IZWFsdGhwcm9ncmFtL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBRXdDO0FBVXhDLE1BQU1FLGlCQUFrQztJQUN0QztRQUNFQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxTQUFTO1FBQ1RDLE9BQU87SUFDVDtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLFNBQVM7UUFDVEMsT0FBTztJQUNUO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsU0FBUztRQUNUQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxTQUFTO1FBQ1RDLE9BQU87SUFDVDtDQUNEO0FBRUQsTUFBTUMsT0FBTztJQUNYO1FBQ0VDLFVBQVU7UUFDVkMsUUFBUTtJQUNWO0lBQ0E7UUFDRUQsVUFBVTtRQUNWQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFRCxVQUFVO1FBQ1ZDLFFBQVE7SUFDVjtJQUNBO1FBQ0VELFVBQVU7UUFDVkMsUUFBUTtJQUNWO0lBQ0E7UUFDRUQsVUFBVTtRQUNWQyxRQUFRO0lBQ1Y7Q0FDRDtBQUVELE1BQU1DLHFCQUErQjs7SUFDbkMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBcUM7Ozs7OzswQkFDbkQsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaWCxlQUFlYSxHQUFHLENBQUMsQ0FBQ0Msd0JBQ25CLDhEQUFDSjt3QkFBcUJDLFdBQVU7OzBDQUM5Qiw4REFBQ0k7Z0NBQUlDLEtBQUtGLFFBQVFULEtBQUs7Z0NBQUVZLEtBQUtILFFBQVFaLEtBQUs7Z0NBQUVTLFdBQVU7Ozs7OzswQ0FDdkQsOERBQUNPO2dDQUFHUCxXQUFVOzBDQUF5Q0csUUFBUVosS0FBSzs7Ozs7OzBDQUNwRSw4REFBQ2lCO2dDQUFFUixXQUFVOzBDQUFzQkcsUUFBUVgsV0FBVzs7Ozs7OzBDQUN0RCw4REFBQ2lCO2dDQUFFQyxNQUFNLGFBQXdCLE9BQVhQLFFBQVFiLEVBQUU7Z0NBQUlVLFdBQVU7MENBQXVGOzs7Ozs7O3VCQUo3SEcsUUFBUWIsRUFBRTs7Ozs7Ozs7OzswQkFVeEIsOERBQUNpQjtnQkFBR1AsV0FBVTswQkFBaUQ7Ozs7OzswQkFDL0QsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaTCxLQUFLTyxHQUFHLElBQUMsQ0FBQ1MsS0FBS0M7O29CQUNkLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHMUIsK0NBQVFBLENBQUMsUUFBUSwyQ0FBMkM7b0JBQ3hGLHFCQUNFLDhEQUFDVzt3QkFBZ0JDLFdBQVU7OzBDQUN6Qiw4REFBQ0Q7Z0NBQ0NDLFdBQVU7Z0NBQ1ZlLFNBQVMsSUFBTUQsVUFBVSxDQUFDRDs7a0RBRTFCLDhEQUFDRzt3Q0FBS2hCLFdBQVU7a0RBQTZCOzs7Ozs7a0RBQzdDLDhEQUFDZ0I7d0NBQUtoQixXQUFVO2tEQUFpQlcsSUFBSWYsUUFBUTs7Ozs7Ozs7Ozs7OzBDQUUvQyw4REFBQ0c7Z0NBQ0NDLFdBQVcsa0VBQTJILE9BQXpEYSxTQUFTLGdCQUFnQjtnQ0FDdEdJLE9BQU87b0NBQUVDLFdBQVdMLFNBQVMsVUFBVTtvQ0FBS00sVUFBVTtnQ0FBUzswQ0FFOURSLElBQUlkLE1BQU07Ozs7Ozs7dUJBWkxlOzs7OztnQkFnQmQ7Ozs7Ozs7Ozs7OztBQUlSO0tBekNNZDtBQTJDTiwrREFBZUEsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9IZWFsdGhwcm9ncmFtL3BhZ2UudHN4PzIwYTMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblwidXNlIGNsaWVudFwiOyAvLyBNYWtlIHN1cmUgdG8gaW5jbHVkZSB0aGlzIGlmIHlvdSdyZSB1c2luZyBOZXh0LmpzIHdpdGggUmVhY3QgMThcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgSGVhbHRoUHJvZ3JhbSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgZGV0YWlsczogc3RyaW5nO1xyXG4gIGltYWdlOiBzdHJpbmc7IC8vIEFkZCBhbiBpbWFnZSBwcm9wZXJ0eVxyXG59XHJcblxyXG5jb25zdCBoZWFsdGhQcm9ncmFtczogSGVhbHRoUHJvZ3JhbVtdID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6IFwiV2VpZ2h0IE1hbmFnZW1lbnQgUHJvZ3JhbVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQSBjb21wcmVoZW5zaXZlIHByb2dyYW0gdG8gaGVscCB5b3UgbWFuYWdlIHlvdXIgd2VpZ2h0IGVmZmVjdGl2ZWx5LlwiLFxyXG4gICAgZGV0YWlsczogXCJUaGlzIHByb2dyYW0gaW5jbHVkZXMgcGVyc29uYWxpemVkIG1lYWwgcGxhbnMsIHdvcmtvdXQgcm91dGluZXMsIGFuZCBvbmdvaW5nIHN1cHBvcnQgZnJvbSBoZWFsdGggcHJvZmVzc2lvbmFscy5cIixcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvd2VpZ2h0X21hbmFnZW1lbnQuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aHNcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6IFwiRGlhYmV0ZXMgQ2FyZSBQcm9ncmFtXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJNYW5hZ2UgeW91ciBkaWFiZXRlcyB3aXRoIG91ciBzcGVjaWFsaXplZCBjYXJlIHByb2dyYW0uXCIsXHJcbiAgICBkZXRhaWxzOiBcIk91ciBwcm9ncmFtIG9mZmVycyBlZHVjYXRpb24gb24gbnV0cml0aW9uLCBibG9vZCBzdWdhciBtb25pdG9yaW5nLCBhbmQgcmVndWxhciBjaGVjay11cHMuXCIsXHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2RpYWJldGVzX2NhcmUuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aHNcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0bGU6IFwiSGVhcnQgSGVhbHRoIFByb2dyYW1cIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkEgcHJvZ3JhbSBkZXNpZ25lZCB0byBpbXByb3ZlIHlvdXIgaGVhcnQgaGVhbHRoLlwiLFxyXG4gICAgZGV0YWlsczogXCJJbmNsdWRlcyBkaWV0YXJ5IGd1aWRhbmNlLCBleGVyY2lzZSBwbGFucywgYW5kIHN0cmVzcyBtYW5hZ2VtZW50IHRlY2huaXF1ZXMuXCIsXHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2hlYXJ0X2hlYWx0aC5qcGdcIiwgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBpbWFnZSBwYXRoc1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICB0aXRsZTogXCJNZW50YWwgV2VsbG5lc3MgUHJvZ3JhbVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiU3VwcG9ydCBmb3IgbWVudGFsIGhlYWx0aCB0aHJvdWdoIGNvdW5zZWxpbmcgYW5kIHJlc291cmNlcy5cIixcclxuICAgIGRldGFpbHM6IFwiVGhpcyBwcm9ncmFtIHByb3ZpZGVzIGFjY2VzcyB0byB0aGVyYXB5LCBzdXBwb3J0IGdyb3VwcywgYW5kIHdlbGxuZXNzIGFjdGl2aXRpZXMuXCIsXHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL21lbnRhbF93ZWxsbmVzcy5qcGdcIiwgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBpbWFnZSBwYXRoc1xyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBmYXFzID0gW1xyXG4gIHtcclxuICAgIHF1ZXN0aW9uOiBcIkFtIEkgZ2V0dGluZyBlbm91Z2ggZXhlcmNpc2U/XCIsXHJcbiAgICBhbnN3ZXI6IFwiTW9zdCBhZHVsdHMgbmVlZCBhdCBsZWFzdCAxNTAgbWludXRlcyBvZiBtb2RlcmF0ZSBhZXJvYmljIGFjdGl2aXR5IG9yIDc1IG1pbnV0ZXMgb2Ygdmlnb3JvdXMgYWN0aXZpdHkgZWFjaCB3ZWVrLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcXVlc3Rpb246IFwiV2hhdCBzaG91bGQgSSBlYXQgdG8gbWFpbnRhaW4gYSBoZWFsdGh5IGRpZXQ/XCIsXHJcbiAgICBhbnN3ZXI6IFwiQSBiYWxhbmNlZCBkaWV0IGluY2x1ZGVzIGZydWl0cywgdmVnZXRhYmxlcywgd2hvbGUgZ3JhaW5zLCBsZWFuIHByb3RlaW5zLCBhbmQgaGVhbHRoeSBmYXRzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcXVlc3Rpb246IFwiSG93IGNhbiBJIG1hbmFnZSBzdHJlc3MgZWZmZWN0aXZlbHk/XCIsXHJcbiAgICBhbnN3ZXI6IFwiVGVjaG5pcXVlcyBpbmNsdWRlIHJlZ3VsYXIgZXhlcmNpc2UsIG1pbmRmdWxuZXNzIG1lZGl0YXRpb24sIGFuZCB0YWxraW5nIHRvIGEgdGhlcmFwaXN0LlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcXVlc3Rpb246IFwiV2hhdCBhcmUgdGhlIHNpZ25zIG9mIGEgaGVhbHRoIGlzc3VlIEkgc2hvdWxkIGJlIGF3YXJlIG9mP1wiLFxyXG4gICAgYW5zd2VyOiBcIkNvbW1vbiBzaWducyBpbmNsdWRlIHBlcnNpc3RlbnQgZmF0aWd1ZSwgdW5leHBsYWluZWQgd2VpZ2h0IGNoYW5nZXMsIGFuZCBjaHJvbmljIHBhaW4uXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBxdWVzdGlvbjogXCJIb3cgb2Z0ZW4gc2hvdWxkIEkgaGF2ZSBoZWFsdGggY2hlY2stdXBzP1wiLFxyXG4gICAgYW5zd2VyOiBcIkl0J3MgcmVjb21tZW5kZWQgdG8gaGF2ZSBhIGNoZWNrLXVwIGF0IGxlYXN0IG9uY2UgYSB5ZWFyLCBidXQgaXQgbWF5IHZhcnkgYmFzZWQgb24gaW5kaXZpZHVhbCBoZWFsdGggbmVlZHMuXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IEhlYWx0aFByb2dyYW1zUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgbWluLWgtc2NyZWVuIHAtOFwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTYgdGV4dC1ibGFja1wiPkhlYWx0aCBQcm9ncmFtczwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNlwiPlxyXG4gICAgICAgIHtoZWFsdGhQcm9ncmFtcy5tYXAoKHByb2dyYW0pID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtwcm9ncmFtLmlkfSBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCByb3VuZGVkLWxnIHNoYWRvdy1tZCBwLTZcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb2dyYW0uaW1hZ2V9IGFsdD17cHJvZ3JhbS50aXRsZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtMzIgb2JqZWN0LWNvdmVyIHJvdW5kZWQtbWRcIiAvPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtYmxhY2sgbXQtNFwiPntwcm9ncmFtLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1ncmF5LTcwMFwiPntwcm9ncmFtLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPGEgaHJlZj17YC9wcm9ncmFtcy8ke3Byb2dyYW0uaWR9YH0gY2xhc3NOYW1lPVwibXQtNCBpbmxpbmUtYmxvY2sgYmctYmxhY2sgdGV4dC13aGl0ZSBweS0yIHB4LTQgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTgwMCB0cmFuc2l0aW9uXCI+XHJcbiAgICAgICAgICAgICAgUmVhZCBNb3JlXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtdC0xMCBtYi00IHRleHQtY2VudGVyIHRleHRcIj5GcmVxdWVudGx5IEFza2VkIFF1ZXN0aW9uczwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAge2ZhcXMubWFwKChmYXEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBTdGF0ZSB0byBtYW5hZ2UgdmlzaWJpbGl0eSBvZiB0aGUgYW5zd2VyXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHctZnVsbCBtYXgtdy1tZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIHRleHQtbGcgdGV4dC1ncmF5LTcwMFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9IC8vIFRvZ2dsZSB0aGUgYW5zd2VyIHZpc2liaWxpdHlcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS03MDAgbXItMlwiPis8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+e2ZhcS5xdWVzdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbXQtMiB0ZXh0LWdyYXktNjAwIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgJHtpc09wZW4gPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktMCBwb2ludGVyLWV2ZW50cy1ub25lJ31gfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiBpc09wZW4gPyAnMTAwcHgnIDogJzAnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZmFxLmFuc3dlcn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFsdGhQcm9ncmFtc1BhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJoZWFsdGhQcm9ncmFtcyIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRldGFpbHMiLCJpbWFnZSIsImZhcXMiLCJxdWVzdGlvbiIsImFuc3dlciIsIkhlYWx0aFByb2dyYW1zUGFnZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwicHJvZ3JhbSIsImltZyIsInNyYyIsImFsdCIsImgyIiwicCIsImEiLCJocmVmIiwiZmFxIiwiaW5kZXgiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJvbkNsaWNrIiwic3BhbiIsInN0eWxlIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Healthprogram/page.tsx\n"));

/***/ })

});