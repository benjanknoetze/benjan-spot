webpackHotUpdate_N_E("pages/development",{

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/gtag */ \"./lib/gtag.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Chuckie/Documents/GitHub/benjan-spot/components/MyLayout.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n//Global settings and layout\n\n/*You can use this built-in component to append elements to the <head> element of the page. More info here: https://github.com/zeit/next.js/#populating-head \r\nNotice that we add the link for the stylesheet for using React-Bootstrap components to the <Head>. */\n\n //Header component\n\n //Google analytics\n\n{\n  /* Global layout */\n}\n\nvar Layout = function Layout(props) {\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 2\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 3\n    }\n  }, __jsx(\"link\", {\n    rel: \"preload\",\n    href: \"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\",\n    integrity: \"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\",\n    crossOrigin: \"anonymous\",\n    as: \"style\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 4\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://fonts.googleapis.com/css?family=Allerta\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 4\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://fonts.googleapis.com/css?family=Bitter:400,700\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 4\n    }\n  }), __jsx(\"script\", {\n    async: true,\n    src: \"https://www.googletagmanager.com/gtag/js?id=\".concat(_lib_gtag__WEBPACK_IMPORTED_MODULE_3__[\"GA_TRACKING_ID\"]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 4\n    }\n  }), __jsx(\"script\", {\n    dangerouslySetInnerHTML: {\n      __html: \"\\n            window.dataLayer = window.dataLayer || [];\\n            function gtag(){dataLayer.push(arguments);}\\n            gtag('js', new Date());\\n            gtag('config', '\".concat(_lib_gtag__WEBPACK_IMPORTED_MODULE_3__[\"GA_TRACKING_ID\"], \"', {\\n              page_path: window.location.pathname,\\n            });\\n          \")\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 4\n    }\n  })), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 3\n    }\n  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 4\n    }\n  }), \" \", props.children));\n};\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUxheW91dC5qcz9kYzdhIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwiR0FfVFJBQ0tJTkdfSUQiLCJfX2h0bWwiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7Q0FDOEI7O0NBQ2U7O0FBRTdDO0FBQUM7QUFBcUI7O0FBQ3RCLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEtBQUs7QUFBQSxTQUNuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUM7QUFDQyxPQUFHLEVBQUMsU0FETDtBQUVDLFFBQUksRUFBQyx1RUFGTjtBQUdDLGFBQVMsRUFBQyx5RUFIWDtBQUlDLGVBQVcsRUFBQyxXQUpiO0FBS0MsTUFBRSxFQUFDLE9BTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELEVBVUM7QUFDQyxPQUFHLEVBQUMsWUFETDtBQUVDLFFBQUksRUFBQyxpREFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkQsRUFjQztBQUNDLE9BQUcsRUFBQyxZQURMO0FBRUMsUUFBSSxFQUFDLHdEQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRCxFQW1CQztBQUNDLFNBQUssTUFETjtBQUVDLE9BQUcsd0RBQWlEQyx3REFBakQsQ0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJELEVBdUJDO0FBQ0MsMkJBQXVCLEVBQUU7QUFDeEJDLFlBQU0sZ01BSW1CRCx3REFKbkI7QUFEa0IsS0FEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCRCxDQURELEVBcUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxPQUVFRCxLQUFLLENBQUNHLFFBRlIsQ0FyQ0QsQ0FEbUI7QUFBQSxDQUFwQjs7S0FBTUosTTtBQTZDU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL015TGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9HbG9iYWwgc2V0dGluZ3MgYW5kIGxheW91dFxyXG5cclxuLypZb3UgY2FuIHVzZSB0aGlzIGJ1aWx0LWluIGNvbXBvbmVudCB0byBhcHBlbmQgZWxlbWVudHMgdG8gdGhlIDxoZWFkPiBlbGVtZW50IG9mIHRoZSBwYWdlLiBNb3JlIGluZm8gaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcy8jcG9wdWxhdGluZy1oZWFkIFxyXG5Ob3RpY2UgdGhhdCB3ZSBhZGQgdGhlIGxpbmsgZm9yIHRoZSBzdHlsZXNoZWV0IGZvciB1c2luZyBSZWFjdC1Cb290c3RyYXAgY29tcG9uZW50cyB0byB0aGUgPEhlYWQ+LiAqL1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInIC8vSGVhZGVyIGNvbXBvbmVudFxyXG5pbXBvcnQgeyBHQV9UUkFDS0lOR19JRCB9IGZyb20gJy4uL2xpYi9ndGFnJyAvL0dvb2dsZSBhbmFseXRpY3NcclxuXHJcbnsvKiBHbG9iYWwgbGF5b3V0ICovIH1cclxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4gKFxyXG5cdDxkaXY+XHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0ey8qIEJvb3RzdHJhcCAqL31cclxuXHRcdFx0PGxpbmtcclxuXHRcdFx0XHRyZWw9XCJwcmVsb2FkXCJcclxuXHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuXHRcdFx0XHRpbnRlZ3JpdHk9XCJzaGEzODQtZ2dPeVIwaVhDYk1RdjNYaXBtYTM0TUQrZEgvMWZRNzg0L2o2Y1kvaUpUUVVPaGNXcjd4OUp2b1J4VDJNWncxVFwiXHJcblx0XHRcdFx0Y3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxyXG5cdFx0XHRcdGFzPVwic3R5bGVcIlxyXG5cdFx0XHQvPlxyXG5cdFx0XHR7LyogR29vZ2xlIEZvbnRzICovfVxyXG5cdFx0XHQ8bGlua1xyXG5cdFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxyXG5cdFx0XHRcdGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWxsZXJ0YVwiXHJcblx0XHRcdC8+XHJcblx0XHRcdDxsaW5rXHJcblx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXHJcblx0XHRcdFx0aHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CaXR0ZXI6NDAwLDcwMFwiXHJcblx0XHRcdC8+XHJcblx0XHRcdHsvKiBHbG9iYWwgU2l0ZSBUYWcgKGd0YWcuanMpIC0gR29vZ2xlIEFuYWx5dGljcyAqL31cclxuXHRcdFx0PHNjcmlwdFxyXG5cdFx0XHRcdGFzeW5jXHJcblx0XHRcdFx0c3JjPXtgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD0ke0dBX1RSQUNLSU5HX0lEfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxzY3JpcHRcclxuXHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG5cdFx0XHRcdFx0X19odG1sOiBgXHJcbiAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XHJcbiAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICcke0dBX1RSQUNLSU5HX0lEfScsIHtcclxuICAgICAgICAgICAgICBwYWdlX3BhdGg6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBgLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHQ8L0hlYWQ+XHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8SGVhZGVyIC8+IHsvKiBOYXZpZ2F0aW9uICovfVxyXG5cdFx0XHR7cHJvcHMuY2hpbGRyZW59XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MyLayout.js\n");

/***/ })

})