webpackHotUpdate_N_E("pages/people",{

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/gtag */ \"./lib/gtag.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Chuckie/Documents/GitHub/benjan-spot/components/MyLayout.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n//Global settings and layout\n\n/*You can use this built-in component to append elements to the <head> element of the page. More info here: https://github.com/zeit/next.js/#populating-head \r\nNotice that we add the link for the stylesheet for using React-Bootstrap components to the <Head>. */\n\n //Header component\n\n //Google analytics\n\n{\n  /* Global layout */\n}\n\nvar Layout = function Layout(props) {\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 2\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 3\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\",\n    integrity: \"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\",\n    crossOrigin: \"anonymous\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 4\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://fonts.googleapis.com/css?family=Allerta&display=swap\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 4\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://fonts.googleapis.com/css?family=Bitter:400,700&display=swap\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 4\n    }\n  }), __jsx(\"script\", {\n    async: true,\n    src: \"https://www.googletagmanager.com/gtag/js?id=\".concat(_lib_gtag__WEBPACK_IMPORTED_MODULE_3__[\"GA_TRACKING_ID\"]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 4\n    }\n  }), __jsx(\"script\", {\n    dangerouslySetInnerHTML: {\n      __html: \"\\n            window.dataLayer = window.dataLayer || [];\\n            function gtag(){dataLayer.push(arguments);}\\n            gtag('js', new Date());\\n            gtag('config', '\".concat(_lib_gtag__WEBPACK_IMPORTED_MODULE_3__[\"GA_TRACKING_ID\"], \"', {\\n              page_path: window.location.pathname,\\n            });\\n          \")\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 4\n    }\n  })), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 3\n    }\n  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 4\n    }\n  }), \" \", props.children));\n};\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUxheW91dC5qcz9kYzdhIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwiR0FfVFJBQ0tJTkdfSUQiLCJfX2h0bWwiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7Q0FDOEI7O0NBQ2U7O0FBRTdDO0FBQUM7QUFBcUI7O0FBQ3RCLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEtBQUs7QUFBQSxTQUNuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUM7QUFDQyxPQUFHLEVBQUMsWUFETDtBQUVDLFFBQUksRUFBQyx1RUFGTjtBQUdDLGFBQVMsRUFBQyx5RUFIWDtBQUlDLGVBQVcsRUFBQyxXQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxFQVNDO0FBQ0MsT0FBRyxFQUFDLFlBREw7QUFFQyxRQUFJLEVBQUMsOERBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRELEVBYUM7QUFDQyxPQUFHLEVBQUMsWUFETDtBQUVDLFFBQUksRUFBQyxxRUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkQsRUFrQkM7QUFDQyxTQUFLLE1BRE47QUFFQyxPQUFHLHdEQUFpREMsd0RBQWpELENBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxCRCxFQXNCQztBQUNDLDJCQUF1QixFQUFFO0FBQ3hCQyxZQUFNLGdNQUltQkQsd0RBSm5CO0FBRGtCLEtBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0QkQsQ0FERCxFQW9DQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsT0FFRUQsS0FBSyxDQUFDRyxRQUZSLENBcENELENBRG1CO0FBQUEsQ0FBcEI7O0tBQU1KLE07QUE0Q1NBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NeUxheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vR2xvYmFsIHNldHRpbmdzIGFuZCBsYXlvdXRcclxuXHJcbi8qWW91IGNhbiB1c2UgdGhpcyBidWlsdC1pbiBjb21wb25lbnQgdG8gYXBwZW5kIGVsZW1lbnRzIHRvIHRoZSA8aGVhZD4gZWxlbWVudCBvZiB0aGUgcGFnZS4gTW9yZSBpbmZvIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMvI3BvcHVsYXRpbmctaGVhZCBcclxuTm90aWNlIHRoYXQgd2UgYWRkIHRoZSBsaW5rIGZvciB0aGUgc3R5bGVzaGVldCBmb3IgdXNpbmcgUmVhY3QtQm9vdHN0cmFwIGNvbXBvbmVudHMgdG8gdGhlIDxIZWFkPi4gKi9cclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJyAvL0hlYWRlciBjb21wb25lbnRcclxuaW1wb3J0IHsgR0FfVFJBQ0tJTkdfSUQgfSBmcm9tICcuLi9saWIvZ3RhZycgLy9Hb29nbGUgYW5hbHl0aWNzXHJcblxyXG57LyogR2xvYmFsIGxheW91dCAqLyB9XHJcbmNvbnN0IExheW91dCA9IHByb3BzID0+IChcclxuXHQ8ZGl2PlxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdHsvKiBCb290c3RyYXAgKi99XHJcblx0XHRcdDxsaW5rXHJcblx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXHJcblx0XHRcdFx0aHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcblx0XHRcdFx0aW50ZWdyaXR5PVwic2hhMzg0LWdnT3lSMGlYQ2JNUXYzWGlwbWEzNE1EK2RILzFmUTc4NC9qNmNZL2lKVFFVT2hjV3I3eDlKdm9SeFQyTVp3MVRcIlxyXG5cdFx0XHRcdGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcclxuXHRcdFx0Lz5cclxuXHRcdFx0ey8qIEdvb2dsZSBGb250cyAqL31cclxuXHRcdFx0PGxpbmtcclxuXHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcclxuXHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsbGVydGEmZGlzcGxheT1zd2FwXCJcclxuXHRcdFx0Lz5cclxuXHRcdFx0PGxpbmtcclxuXHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcclxuXHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJpdHRlcjo0MDAsNzAwJmRpc3BsYXk9c3dhcFwiXHJcblx0XHRcdC8+XHJcblx0XHRcdHsvKiBHbG9iYWwgU2l0ZSBUYWcgKGd0YWcuanMpIC0gR29vZ2xlIEFuYWx5dGljcyAqL31cclxuXHRcdFx0PHNjcmlwdFxyXG5cdFx0XHRcdGFzeW5jXHJcblx0XHRcdFx0c3JjPXtgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD0ke0dBX1RSQUNLSU5HX0lEfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxzY3JpcHRcclxuXHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG5cdFx0XHRcdFx0X19odG1sOiBgXHJcbiAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XHJcbiAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICcke0dBX1RSQUNLSU5HX0lEfScsIHtcclxuICAgICAgICAgICAgICBwYWdlX3BhdGg6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBgLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHQ8L0hlYWQ+XHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8SGVhZGVyIC8+IHsvKiBOYXZpZ2F0aW9uICovfVxyXG5cdFx0XHR7cHJvcHMuY2hpbGRyZW59XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MyLayout.js\n");

/***/ })

})