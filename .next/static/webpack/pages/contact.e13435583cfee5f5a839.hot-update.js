webpackHotUpdate_N_E("pages/contact",{

/***/ "./components/Contact/ContactForm.js":
/*!*******************************************!*\
  !*** ./components/Contact/ContactForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyForm; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util */ \"./node_modules/node-libs-browser/node_modules/util/util.js\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/Chuckie/Documents/GitHub/benjan-spot/components/Contact/ContactForm.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n//Contact page form\n\n\n\n\nvar MyForm = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(MyForm, _React$Component);\n\n  var _super = _createSuper(MyForm);\n\n  function MyForm(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MyForm);\n\n    _this = _super.call(this, props);\n    _this.submitForm = _this.submitForm.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.state = {\n      status: \"\"\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MyForm, [{\n    key: \"render\",\n    value: function render() {\n      var status = this.state.status;\n      return __jsx(\"div\", {\n        className: \"jsx-4281961450\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 3\n        }\n      }, __jsx(\"h5\", {\n        className: \"jsx-4281961450\" + \" \" + \"Heading pl-3 mt-3\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 4\n        }\n      }, \"Get in touch\"), __jsx(\"form\", {\n        onSubmit: this.submitForm,\n        action: \"https://formspree.io/f/xrgoqvaq\",\n        method: \"POST\",\n        className: \"jsx-4281961450\" + \" \" + \"p-3\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 7\n        }\n      }, __jsx(\"label\", {\n        className: \"jsx-4281961450\" + \" \" + \"formLabel\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 9\n        }\n      }, \"Email:\"), __jsx(\"br\", {\n        className: \"jsx-4281961450\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 5\n        }\n      }), __jsx(\"input\", {\n        type: \"email\",\n        name: \"email\",\n        className: \"jsx-4281961450\" + \" \" + \"formInput\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 3\n        }\n      }), \" \", __jsx(\"br\", {\n        className: \"jsx-4281961450\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 61\n        }\n      }), __jsx(\"label\", {\n        className: \"jsx-4281961450\" + \" \" + \"formLabel mt-2\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 9\n        }\n      }, \"Message:\"), \" \", __jsx(\"br\", {\n        className: \"jsx-4281961450\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 60\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        name: \"message\",\n        className: \"jsx-4281961450\" + \" \" + \"formInput pb-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 3\n        }\n      }), \" \", __jsx(\"br\", {\n        className: \"jsx-4281961450\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 67\n        }\n      }), status === \"SUCCESS\" ? __jsx(\"p\", {\n        className: \"jsx-4281961450\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 33\n        }\n      }, \"Thanks!\") : __jsx(\"button\", {\n        id: \"submitButton\",\n        className: \"jsx-4281961450\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 50\n        }\n      }, \"Submit\"), status === \"ERROR\" && __jsx(\"p\", {\n        className: \"jsx-4281961450\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 32\n        }\n      }, \"Ooops! There was an error.\")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        id: \"4281961450\",\n        __self: this\n      }, \".Heading{color:#0d0411;font-family:Allerta,sans-serif;font-weight:800;}.contactText{color:#0d0411;font-family:Bitter,serif;}.formLabel{font-family:Bitter,serif;}.formInput{background-color:#cdc9de;width:75%;border:none;border-radius:4px;}#submitButton{width:110px;border-radius:4px;border:none;background-color:#635598;font-family:Bitter,serif;color:white;margin-top:15px;paddingTop:6px 10px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9DaHVja2llL0RvY3VtZW50cy9HaXRIdWIvYmVuamFuLXNwb3QvY29tcG9uZW50cy9Db250YWN0L0NvbnRhY3RGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDc0IsQUFLbUIsQUFLQSxBQUlZLEFBR0QsQUFNYixZQUNNLEVBbEJjLEFBS04sV0FJM0IsQUFHVyxLQU9FLEtBTkEsSUFQYixHQWMwQixHQW5CVCxFQWFFLGNBWm5CLElBYUEsRUFNMkIseUJBQ2QsWUFDSSxnQkFDSSxvQkFDckIiLCJmaWxlIjoiL1VzZXJzL0NodWNraWUvRG9jdW1lbnRzL0dpdEh1Yi9iZW5qYW4tc3BvdC9jb21wb25lbnRzL0NvbnRhY3QvQ29udGFjdEZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0NvbnRhY3QgcGFnZSBmb3JtXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyBpbmhlcml0cyB9IGZyb20gXCJ1dGlsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN1Ym1pdEZvcm0gPSB0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHN0YXR1czogXCJcIlxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgc3RhdHVzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0ICA8aDUgY2xhc3NOYW1lPVwiSGVhZGluZyBwbC0zIG10LTNcIj5HZXQgaW4gdG91Y2g8L2g1PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJwLTNcIlxyXG4gICAgICAgIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm19XHJcbiAgICAgICAgYWN0aW9uPVwiaHR0cHM6Ly9mb3Jtc3ByZWUuaW8vZi94cmdvcXZhcVwiXHJcbiAgICAgICAgbWV0aG9kPVwiUE9TVFwiXHJcbiAgICAgID5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybUxhYmVsXCI+RW1haWw6PC9sYWJlbD5cclxuXHRcdCAgPGJyPjwvYnI+XHJcblx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybUlucHV0XCIgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgLz4gPGJyPjwvYnI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm1MYWJlbCBtdC0yXCI+TWVzc2FnZTo8L2xhYmVsPiA8YnI+PC9icj5cclxuXHRcdDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtSW5wdXQgcGItNVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1lc3NhZ2VcIiAvPiA8YnI+PC9icj5cclxuICAgICAgICB7c3RhdHVzID09PSBcIlNVQ0NFU1NcIiA/IDxwPlRoYW5rcyE8L3A+IDogPGJ1dHRvbiBpZD1cInN1Ym1pdEJ1dHRvblwiPlN1Ym1pdDwvYnV0dG9uPn1cclxuICAgICAgICB7c3RhdHVzID09PSBcIkVSUk9SXCIgJiYgPHA+T29vcHMhIFRoZXJlIHdhcyBhbiBlcnJvci48L3A+fVxyXG4gICAgICA8L2Zvcm0+XHJcblx0ICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG5cdFx0XHQvKiBmb3JtIGJ1dHRvbiB7XFxcclxuXHRcdFx0fSAqL1xyXG5cdFx0XHQuSGVhZGluZyB7XHJcblx0XHRcdFx0Y29sb3I6ICMwZDA0MTE7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6IEFsbGVydGEsIHNhbnMtc2VyaWY7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDgwMDtcclxuXHRcdFx0fVxyXG5cdFx0XHQuY29udGFjdFRleHQge1xyXG5cdFx0XHRcdGNvbG9yOiAjMGQwNDExO1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBCaXR0ZXIsIHNlcmlmO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5mb3JtTGFiZWwge1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBCaXR0ZXIsIHNlcmlmO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5mb3JtSW5wdXQge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNjZGM5ZGU7XHJcblx0XHRcdFx0d2lkdGg6IDc1JTtcclxuXHRcdFx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdCNzdWJtaXRCdXR0b24ge1xyXG5cdFx0XHRcdHdpZHRoOiAxMTBweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRcdFx0Ym9yZGVyOiBub25lOyBcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNjM1NTk4O1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBCaXR0ZXIsIHNlcmlmO1xyXG5cdFx0XHRcdGNvbG9yOiB3aGl0ZTsgXHJcblx0XHRcdFx0bWFyZ2luLXRvcDogMTVweDtcclxuXHRcdFx0XHRwYWRkaW5nVG9wOiA2cHggMTBweDsgXHJcblx0XHRcdH1cclxuXHRcdFx0YH08L3N0eWxlPlxyXG5cdCAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0Rm9ybShldikge1xyXG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGZvcm0gPSBldi50YXJnZXQ7XHJcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub3Blbihmb3JtLm1ldGhvZCwgZm9ybS5hY3Rpb24pO1xyXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSByZXR1cm47XHJcbiAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogXCJTVUNDRVNTXCIgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogXCJFUlJPUlwiIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgeGhyLnNlbmQoZGF0YSk7XHJcbiAgfVxyXG59XHJcbiAgIFxyXG4gIFxyXG5cdC8qIHJlbmRlcigpIHtcclxuXHQgICAgY29uc3QgeyBzdGF0dXMgfSA9IHRoaXMuc3RhdGU7XHJcblx0ICByZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdDxoNSBjbGFzc05hbWU9XCJIZWFkaW5nIHBsLTMgbXQtM1wiPkdldCBpbiB0b3VjaDwvaDU+XHJcblx0XHQ8Zm9ybSBcclxuXHRcdCAgY2xhc3NOYW1lPVwicC0zXCJcclxuXHRcdCAgb25TdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX1cclxuXHRcdCAgYWN0aW9uPVwiaHR0cHM6Ly9mb3Jtc3ByZWUuaW8vZi94cmdvcXZhcVwiXHJcbiAgICAgICAgICBtZXRob2Q9XCJQT1NUXCJcclxuXHRcdD5cclxuXHRcdCAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm1MYWJlbFwiPkVtYWlsOjwvbGFiZWw+XHJcblx0XHQgIDxicj48L2JyPlxyXG5cdFx0ICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybUlucHV0XCIgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgLz4gPGJyPjwvYnI+XHJcblx0XHQgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtTGFiZWwgbXQtMlwiPk1lc3NhZ2U6PC9sYWJlbD4gPGJyPjwvYnI+XHJcblx0XHQgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtSW5wdXQgcGItNVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1lc3NhZ2VcIiAvPiA8YnI+PC9icj5cclxuXHRcdCAge3N0YXR1cyA9PT0gXCJTVUNDRVNTXCIgPyA8cD5UaGFua3MhPC9wPiA6IDxCdXR0b24gY2xhc3NOYW1lPVwic3VibWl0QnV0dG9uIG10LTNcIj5TdWJtaXQ8L0J1dHRvbj59XHJcblx0XHQgIHtzdGF0dXMgPT09IFwiRVJST1JcIiAmJiA8cD5Pb29wcyEgVGhlcmUgd2FzIGFuIGVycm9yLjwvcD59XHJcblx0XHQ8L2Zvcm0+XHJcblx0XHQ8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG5cdFx0XHQuSGVhZGluZyB7XHJcblx0XHRcdFx0Y29sb3I6ICMwZDA0MTE7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6IEFsbGVydGEsIHNhbnMtc2VyaWY7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDgwMDtcclxuXHRcdFx0fVxyXG5cdFx0XHQuY29udGFjdFRleHQge1xyXG5cdFx0XHRcdGNvbG9yOiAjMGQwNDExO1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBCaXR0ZXIsIHNlcmlmO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5mb3JtTGFiZWwge1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBCaXR0ZXIsIHNlcmlmO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5mb3JtSW5wdXQge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNjZGM5ZGU7XHJcblx0XHRcdFx0d2lkdGg6IDc1JTtcclxuXHRcdFx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdC5zdWJtaXRCdXR0b24ge1xyXG5cdFx0XHRcdHdpZHRoOiAxMTBweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRgfTwvc3R5bGU+XHJcblx0XHQ8L2Rpdj5cclxuXHQgICk7XHJcblx0fSAqL1xyXG5cclxuXHJcblxyXG4gIFxyXG5cclxuIl19 */\\n/*@ sourceURL=/Users/Chuckie/Documents/GitHub/benjan-spot/components/Contact/ContactForm.js */\"));\n    }\n  }, {\n    key: \"submitForm\",\n    value: function submitForm(ev) {\n      var _this2 = this;\n\n      ev.preventDefault();\n      var form = ev.target;\n      var data = new FormData(form);\n      var xhr = new XMLHttpRequest();\n      xhr.open(form.method, form.action);\n      xhr.setRequestHeader(\"Accept\", \"application/json\");\n\n      xhr.onreadystatechange = function () {\n        if (xhr.readyState !== XMLHttpRequest.DONE) return;\n\n        if (xhr.status === 200) {\n          form.reset();\n\n          _this2.setState({\n            status: \"SUCCESS\"\n          });\n        } else {\n          _this2.setState({\n            status: \"ERROR\"\n          });\n        }\n      };\n\n      xhr.send(data);\n    }\n  }]);\n\n  return MyForm;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n/* render() {\r\n    const { status } = this.state;\r\n  return (\r\n\t<div>\r\n\t<h5 className=\"Heading pl-3 mt-3\">Get in touch</h5>\r\n\t<form \r\n\t  className=\"p-3\"\r\n\t  onSubmit={this.submitForm}\r\n\t  action=\"https://formspree.io/f/xrgoqvaq\"\r\n         method=\"POST\"\r\n\t>\r\n\t  <label className=\"formLabel\">Email:</label>\r\n\t  <br></br>\r\n\t  <input className=\"formInput\" type=\"email\" name=\"email\" /> <br></br>\r\n\t  <label className=\"formLabel mt-2\">Message:</label> <br></br>\r\n\t  <input className=\"formInput pb-5\" type=\"text\" name=\"message\" /> <br></br>\r\n\t  {status === \"SUCCESS\" ? <p>Thanks!</p> : <Button className=\"submitButton mt-3\">Submit</Button>}\r\n\t  {status === \"ERROR\" && <p>Ooops! There was an error.</p>}\r\n\t</form>\r\n\t<style global jsx>{`\r\n\t\t.Heading {\r\n\t\t\tcolor: #0d0411;\r\n\t\t\tfont-family: Allerta, sans-serif;\r\n\t\t\tfont-weight: 800;\r\n\t\t}\r\n\t\t.contactText {\r\n\t\t\tcolor: #0d0411;\r\n\t\t\tfont-family: Bitter, serif;\r\n\t\t}\r\n\t\t.formLabel {\r\n\t\t\tfont-family: Bitter, serif;\r\n\t\t}\r\n\t\t.formInput {\r\n\t\t\tbackground-color: #cdc9de;\r\n\t\t\twidth: 75%;\r\n\t\t\tborder: none;\r\n\t\t\tborder-radius: 4px;\r\n\t\t}\r\n\t\t.submitButton {\r\n\t\t\twidth: 110px;\r\n\t\t}\r\n\t\t`}</style>\r\n\t</div>\r\n  );\r\n} */\n\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0L0NvbnRhY3RGb3JtLmpzPzhkMmUiXSwibmFtZXMiOlsiTXlGb3JtIiwicHJvcHMiLCJzdWJtaXRGb3JtIiwiYmluZCIsInN0YXRlIiwic3RhdHVzIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJ0YXJnZXQiLCJkYXRhIiwiRm9ybURhdGEiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJtZXRob2QiLCJhY3Rpb24iLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsIkRPTkUiLCJyZXNldCIsInNldFN0YXRlIiwic2VuZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsTTs7Ozs7QUFDbkIsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLHlHQUFsQjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBQUU7QUFERyxLQUFiO0FBSGlCO0FBTWxCOzs7OzZCQUVRO0FBQUEsVUFDQ0EsTUFERCxHQUNZLEtBQUtELEtBRGpCLENBQ0NDLE1BREQ7QUFFUCxhQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUEsNENBQWMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERCxFQUVJO0FBQ0UsZ0JBQVEsRUFBRSxLQUFLSCxVQURqQjtBQUVFLGNBQU0sRUFBQyxpQ0FGVDtBQUdFLGNBQU0sRUFBQyxNQUhUO0FBQUEsNENBQWdCLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FLRTtBQUFBLDRDQUFpQixXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGLEVBTUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTkUsRUFPSjtBQUE2QixZQUFJLEVBQUMsT0FBbEM7QUFBMEMsWUFBSSxFQUFDLE9BQS9DO0FBQUEsNENBQWlCLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFQSSxPQU9zRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFQdEQsRUFRRTtBQUFBLDRDQUFpQixnQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSRixPQVFxRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFSckQsRUFTSjtBQUFrQyxZQUFJLEVBQUMsTUFBdkM7QUFBOEMsWUFBSSxFQUFDLFNBQW5EO0FBQUEsNENBQWlCLGdCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVEksT0FTNEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVDVELEVBVUdHLE1BQU0sS0FBSyxTQUFYLEdBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBdkIsR0FBd0M7QUFBUSxVQUFFLEVBQUMsY0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVjNDLEVBV0dBLE1BQU0sS0FBSyxPQUFYLElBQXNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FYekIsQ0FGSjtBQUFBO0FBQUE7QUFBQSx1NE1BREU7QUFrREQ7OzsrQkFFVUMsRSxFQUFJO0FBQUE7O0FBQ2JBLFFBQUUsQ0FBQ0MsY0FBSDtBQUNBLFVBQU1DLElBQUksR0FBR0YsRUFBRSxDQUFDRyxNQUFoQjtBQUNBLFVBQU1DLElBQUksR0FBRyxJQUFJQyxRQUFKLENBQWFILElBQWIsQ0FBYjtBQUNBLFVBQU1JLEdBQUcsR0FBRyxJQUFJQyxjQUFKLEVBQVo7QUFDQUQsU0FBRyxDQUFDRSxJQUFKLENBQVNOLElBQUksQ0FBQ08sTUFBZCxFQUFzQlAsSUFBSSxDQUFDUSxNQUEzQjtBQUNBSixTQUFHLENBQUNLLGdCQUFKLENBQXFCLFFBQXJCLEVBQStCLGtCQUEvQjs7QUFDQUwsU0FBRyxDQUFDTSxrQkFBSixHQUF5QixZQUFNO0FBQzdCLFlBQUlOLEdBQUcsQ0FBQ08sVUFBSixLQUFtQk4sY0FBYyxDQUFDTyxJQUF0QyxFQUE0Qzs7QUFDNUMsWUFBSVIsR0FBRyxDQUFDUCxNQUFKLEtBQWUsR0FBbkIsRUFBd0I7QUFDdEJHLGNBQUksQ0FBQ2EsS0FBTDs7QUFDQSxnQkFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRWpCLGtCQUFNLEVBQUU7QUFBVixXQUFkO0FBQ0QsU0FIRCxNQUdPO0FBQ0wsZ0JBQUksQ0FBQ2lCLFFBQUwsQ0FBYztBQUFFakIsa0JBQU0sRUFBRTtBQUFWLFdBQWQ7QUFDRDtBQUNGLE9BUkQ7O0FBU0FPLFNBQUcsQ0FBQ1csSUFBSixDQUFTYixJQUFUO0FBQ0Q7Ozs7RUFoRmlDYyw0Q0FBSyxDQUFDQyxTO0FBb0Z6QyIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29udGFjdC9Db250YWN0Rm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQ29udGFjdCBwYWdlIGZvcm1cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCB7IGluaGVyaXRzIH0gZnJvbSBcInV0aWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15Rm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3VibWl0Rm9ybSA9IHRoaXMuc3VibWl0Rm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc3RhdHVzOiBcIlwiXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBzdGF0dXMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHQgIDxoNSBjbGFzc05hbWU9XCJIZWFkaW5nIHBsLTMgbXQtM1wiPkdldCBpbiB0b3VjaDwvaDU+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInAtM1wiXHJcbiAgICAgICAgb25TdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX1cclxuICAgICAgICBhY3Rpb249XCJodHRwczovL2Zvcm1zcHJlZS5pby9mL3hyZ29xdmFxXCJcclxuICAgICAgICBtZXRob2Q9XCJQT1NUXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtTGFiZWxcIj5FbWFpbDo8L2xhYmVsPlxyXG5cdFx0ICA8YnI+PC9icj5cclxuXHRcdDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtSW5wdXRcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiAvPiA8YnI+PC9icj5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybUxhYmVsIG10LTJcIj5NZXNzYWdlOjwvbGFiZWw+IDxicj48L2JyPlxyXG5cdFx0PGlucHV0IGNsYXNzTmFtZT1cImZvcm1JbnB1dCBwYi01XCIgdHlwZT1cInRleHRcIiBuYW1lPVwibWVzc2FnZVwiIC8+IDxicj48L2JyPlxyXG4gICAgICAgIHtzdGF0dXMgPT09IFwiU1VDQ0VTU1wiID8gPHA+VGhhbmtzITwvcD4gOiA8YnV0dG9uIGlkPVwic3VibWl0QnV0dG9uXCI+U3VibWl0PC9idXR0b24+fVxyXG4gICAgICAgIHtzdGF0dXMgPT09IFwiRVJST1JcIiAmJiA8cD5Pb29wcyEgVGhlcmUgd2FzIGFuIGVycm9yLjwvcD59XHJcbiAgICAgIDwvZm9ybT5cclxuXHQgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcblx0XHRcdC8qIGZvcm0gYnV0dG9uIHtcXFxyXG5cdFx0XHR9ICovXHJcblx0XHRcdC5IZWFkaW5nIHtcclxuXHRcdFx0XHRjb2xvcjogIzBkMDQxMTtcclxuXHRcdFx0XHRmb250LWZhbWlseTogQWxsZXJ0YSwgc2Fucy1zZXJpZjtcclxuXHRcdFx0XHRmb250LXdlaWdodDogODAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5jb250YWN0VGV4dCB7XHJcblx0XHRcdFx0Y29sb3I6ICMwZDA0MTE7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6IEJpdHRlciwgc2VyaWY7XHJcblx0XHRcdH1cclxuXHRcdFx0LmZvcm1MYWJlbCB7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6IEJpdHRlciwgc2VyaWY7XHJcblx0XHRcdH1cclxuXHRcdFx0LmZvcm1JbnB1dCB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2NkYzlkZTtcclxuXHRcdFx0XHR3aWR0aDogNzUlO1xyXG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0I3N1Ym1pdEJ1dHRvbiB7XHJcblx0XHRcdFx0d2lkdGg6IDExMHB4O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdFx0XHRib3JkZXI6IG5vbmU7IFxyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICM2MzU1OTg7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6IEJpdHRlciwgc2VyaWY7XHJcblx0XHRcdFx0Y29sb3I6IHdoaXRlOyBcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiAxNXB4O1xyXG5cdFx0XHRcdHBhZGRpbmdUb3A6IDZweCAxMHB4OyBcclxuXHRcdFx0fVxyXG5cdFx0XHRgfTwvc3R5bGU+XHJcblx0ICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzdWJtaXRGb3JtKGV2KSB7XHJcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZm9ybSA9IGV2LnRhcmdldDtcclxuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKGZvcm0ubWV0aG9kLCBmb3JtLmFjdGlvbik7XHJcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgIT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHJldHVybjtcclxuICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGZvcm0ucmVzZXQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBcIlNVQ0NFU1NcIiB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBcIkVSUk9SXCIgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB4aHIuc2VuZChkYXRhKTtcclxuICB9XHJcbn1cclxuICAgXHJcbiAgXHJcblx0LyogcmVuZGVyKCkge1xyXG5cdCAgICBjb25zdCB7IHN0YXR1cyB9ID0gdGhpcy5zdGF0ZTtcclxuXHQgIHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0PGg1IGNsYXNzTmFtZT1cIkhlYWRpbmcgcGwtMyBtdC0zXCI+R2V0IGluIHRvdWNoPC9oNT5cclxuXHRcdDxmb3JtIFxyXG5cdFx0ICBjbGFzc05hbWU9XCJwLTNcIlxyXG5cdFx0ICBvblN1Ym1pdD17dGhpcy5zdWJtaXRGb3JtfVxyXG5cdFx0ICBhY3Rpb249XCJodHRwczovL2Zvcm1zcHJlZS5pby9mL3hyZ29xdmFxXCJcclxuICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIlxyXG5cdFx0PlxyXG5cdFx0ICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybUxhYmVsXCI+RW1haWw6PC9sYWJlbD5cclxuXHRcdCAgPGJyPjwvYnI+XHJcblx0XHQgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtSW5wdXRcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiAvPiA8YnI+PC9icj5cclxuXHRcdCAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm1MYWJlbCBtdC0yXCI+TWVzc2FnZTo8L2xhYmVsPiA8YnI+PC9icj5cclxuXHRcdCAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm1JbnB1dCBwYi01XCIgdHlwZT1cInRleHRcIiBuYW1lPVwibWVzc2FnZVwiIC8+IDxicj48L2JyPlxyXG5cdFx0ICB7c3RhdHVzID09PSBcIlNVQ0NFU1NcIiA/IDxwPlRoYW5rcyE8L3A+IDogPEJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRCdXR0b24gbXQtM1wiPlN1Ym1pdDwvQnV0dG9uPn1cclxuXHRcdCAge3N0YXR1cyA9PT0gXCJFUlJPUlwiICYmIDxwPk9vb3BzISBUaGVyZSB3YXMgYW4gZXJyb3IuPC9wPn1cclxuXHRcdDwvZm9ybT5cclxuXHRcdDxzdHlsZSBnbG9iYWwganN4PntgXHJcblx0XHRcdC5IZWFkaW5nIHtcclxuXHRcdFx0XHRjb2xvcjogIzBkMDQxMTtcclxuXHRcdFx0XHRmb250LWZhbWlseTogQWxsZXJ0YSwgc2Fucy1zZXJpZjtcclxuXHRcdFx0XHRmb250LXdlaWdodDogODAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5jb250YWN0VGV4dCB7XHJcblx0XHRcdFx0Y29sb3I6ICMwZDA0MTE7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6IEJpdHRlciwgc2VyaWY7XHJcblx0XHRcdH1cclxuXHRcdFx0LmZvcm1MYWJlbCB7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6IEJpdHRlciwgc2VyaWY7XHJcblx0XHRcdH1cclxuXHRcdFx0LmZvcm1JbnB1dCB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2NkYzlkZTtcclxuXHRcdFx0XHR3aWR0aDogNzUlO1xyXG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0LnN1Ym1pdEJ1dHRvbiB7XHJcblx0XHRcdFx0d2lkdGg6IDExMHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdGB9PC9zdHlsZT5cclxuXHRcdDwvZGl2PlxyXG5cdCAgKTtcclxuXHR9ICovXHJcblxyXG5cclxuXHJcbiAgXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Contact/ContactForm.js\n");

/***/ })

})