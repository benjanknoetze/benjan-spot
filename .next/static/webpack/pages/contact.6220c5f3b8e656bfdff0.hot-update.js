webpackHotUpdate_N_E("pages/contact",{

/***/ "./components/Contact/ContactForm.js":
/*!*******************************************!*\
  !*** ./components/Contact/ContactForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyForm; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _formspree_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @formspree/react */ \"./node_modules/@formspree/react/dist/formspree-react.esm.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/Chuckie/Documents/GitHub/benjan-spot/components/Contact/ContactForm.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n//Contact page form\n\n\n/*  class ContactForm extends React.Component {\r\n\tconstructor(props) {\r\n\t  super(props);\r\n\t  this.state = {\r\n\t\tname: '',\r\n\t\temail: '',\r\n\t\tmessage: ''\r\n\t  }\r\n\t}\r\n\r\n\trender() {\r\n\t  return(\r\n\t\t<div className=\"formContainer p-4\">\r\n\t\t<h5 className=\"Heading mb-4\">Get in touch</h5>\r\n\t\t  <form id=\"contact-form\">\r\n\t\t\t<div className=\"form-group\">\r\n\t\t\t  <label htmlFor=\"name\" className=\"contactText\">Name</label>\r\n\t\t\t  <input type=\"text\" className=\"form-control\" value={this.state.name} />\r\n\t\t\t</div>\r\n\t\t\t<div className=\"form-group\">\r\n\t\t\t  <label htmlFor=\"exampleInputEmail1\" className=\"contactText\">Email address</label>\r\n\t\t\t  <input type=\"email\" className=\"form-control\" aria-describedby=\"emailHelp\" value={this.state.email} />\r\n\t\t\t</div>\r\n\t\t\t<div className=\"form-group\">\r\n\t\t\t  <label htmlFor=\"message\" className=\"contactText\">Message</label>\r\n\t\t\t  <textarea className=\"form-control\" rows=\"5\" value={this.state.message} />\r\n\t\t\t</div>\r\n\t\t\t<Button type=\"submit\" className=\"submitButton\">Submit</Button>\r\n\t\t  </form>\r\n\t\t  <style global jsx>{`\r\n\t\t\t.Heading {\r\n\t\t\t\tcolor: #0d0411;\r\n\t\t\t\tfont-family: Allerta, sans-serif;\r\n\t\t\t\tfont-weight: 800;\r\n\t\t\t}\r\n\t\t\t.contactText {\r\n\t\t\t\tcolor: #0d0411;\r\n\t\t\t\tfont-family: Bitter, serif;\r\n\t\t\t}\r\n\t\t\t.submitButton {\r\n\t\t\t\twidth: 110px;\r\n\t\t\t}\r\n\t\t\t`}</style>\r\n\t\t</div>\r\n\t  );\r\n\t}\r\n  }\r\n  \r\n  export default ContactForm;\r\n */\n\nvar MyForm = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(MyForm, _React$Component);\n\n  var _super = _createSuper(MyForm);\n\n  function MyForm(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MyForm);\n\n    _this = _super.call(this, props);\n    _this.submitForm = _this.submitForm.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.state = {\n      status: \"\"\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MyForm, [{\n    key: \"render\",\n    value: function render() {\n      var status = this.state.status;\n      return __jsx(_formspree_react__WEBPACK_IMPORTED_MODULE_9__[\"FormspreeProvider\"], {\n        project: \"{contact}\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 3\n        }\n      }, __jsx(\"h5\", {\n        className: \"jsx-1132000450\" + \" \" + \"Heading pl-3 mt-3\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 3\n        }\n      }, \"Get in touch\"), __jsx(\"form\", {\n        onSubmit: this.submitForm,\n        action: \"https://formspree.io/f/xrgoqvaq\",\n        method: \"POST\",\n        className: \"jsx-1132000450\" + \" \" + \"p-3\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 3\n        }\n      }, __jsx(\"label\", {\n        className: \"jsx-1132000450\" + \" \" + \"formLabel\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 5\n        }\n      }, \"Email:\"), __jsx(\"br\", {\n        className: \"jsx-1132000450\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 5\n        }\n      }), __jsx(\"input\", {\n        type: \"email\",\n        name: \"email\",\n        className: \"jsx-1132000450\" + \" \" + \"formInput\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 5\n        }\n      }), \" \", __jsx(\"br\", {\n        className: \"jsx-1132000450\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 63\n        }\n      }), __jsx(\"label\", {\n        className: \"jsx-1132000450\" + \" \" + \"formLabel mt-2\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 5\n        }\n      }, \"Message:\"), \" \", __jsx(\"br\", {\n        className: \"jsx-1132000450\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 56\n        }\n      }), __jsx(\"input\", {\n        type: \"text\",\n        name: \"message\",\n        className: \"jsx-1132000450\" + \" \" + \"formInput pb-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 5\n        }\n      }), \" \", __jsx(\"br\", {\n        className: \"jsx-1132000450\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 69\n        }\n      }), status === \"SUCCESS\" ? __jsx(\"p\", {\n        className: \"jsx-1132000450\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 29\n        }\n      }, \"Thanks!\") : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"Button\"], {\n        className: \"submitButton mt-3\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 46\n        }\n      }, \"Submit\"), status === \"ERROR\" && __jsx(\"p\", {\n        className: \"jsx-1132000450\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 28\n        }\n      }, \"Ooops! There was an error.\")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        id: \"1132000450\",\n        __self: this\n      }, \".Heading{color:#0d0411;font-family:Allerta,sans-serif;font-weight:800;}.contactText{color:#0d0411;font-family:Bitter,serif;}.formLabel{font-family:Bitter,serif;}.formInput{background-color:#cdc9de;width:75%;border:none;border-radius:4px;}.submitButton{width:110px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9DaHVja2llL0RvY3VtZW50cy9HaXRIdWIvYmVuamFuLXNwb3QvY29tcG9uZW50cy9Db250YWN0L0NvbnRhY3RGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9GcUIsQUFHbUIsQUFLQSxBQUlZLEFBR0QsQUFNYixZQUNiLEVBbEJpQyxBQUtOLFdBSTNCLEFBR1csVUFDRSxJQVBiLE1BTGlCLEVBYUUsY0FabkIsSUFhQSIsImZpbGUiOiIvVXNlcnMvQ2h1Y2tpZS9Eb2N1bWVudHMvR2l0SHViL2Jlbmphbi1zcG90L2NvbXBvbmVudHMvQ29udGFjdC9Db250YWN0Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQ29udGFjdCBwYWdlIGZvcm1cclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IHsgRm9ybXNwcmVlUHJvdmlkZXIgfSBmcm9tICdAZm9ybXNwcmVlL3JlYWN0JztcclxuXHJcbi8qICBjbGFzcyBDb250YWN0Rm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHQgIHN1cGVyKHByb3BzKTtcclxuXHQgIHRoaXMuc3RhdGUgPSB7XHJcblx0XHRuYW1lOiAnJyxcclxuXHRcdGVtYWlsOiAnJyxcclxuXHRcdG1lc3NhZ2U6ICcnXHJcblx0ICB9XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0ICByZXR1cm4oXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm1Db250YWluZXIgcC00XCI+XHJcblx0XHQ8aDUgY2xhc3NOYW1lPVwiSGVhZGluZyBtYi00XCI+R2V0IGluIHRvdWNoPC9oNT5cclxuXHRcdCAgPGZvcm0gaWQ9XCJjb250YWN0LWZvcm1cIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdCAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiY29udGFjdFRleHRcIj5OYW1lPC9sYWJlbD5cclxuXHRcdFx0ICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdCAgPGxhYmVsIGh0bWxGb3I9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBjbGFzc05hbWU9XCJjb250YWN0VGV4dFwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxyXG5cdFx0XHQgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0ICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIiBjbGFzc05hbWU9XCJjb250YWN0VGV4dFwiPk1lc3NhZ2U8L2xhYmVsPlxyXG5cdFx0XHQgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByb3dzPVwiNVwiIHZhbHVlPXt0aGlzLnN0YXRlLm1lc3NhZ2V9IC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJzdWJtaXRCdXR0b25cIj5TdWJtaXQ8L0J1dHRvbj5cclxuXHRcdCAgPC9mb3JtPlxyXG5cdFx0ICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG5cdFx0XHQuSGVhZGluZyB7XHJcblx0XHRcdFx0Y29sb3I6ICMwZDA0MTE7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6IEFsbGVydGEsIHNhbnMtc2VyaWY7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDgwMDtcclxuXHRcdFx0fVxyXG5cdFx0XHQuY29udGFjdFRleHQge1xyXG5cdFx0XHRcdGNvbG9yOiAjMGQwNDExO1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBCaXR0ZXIsIHNlcmlmO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5zdWJtaXRCdXR0b24ge1xyXG5cdFx0XHRcdHdpZHRoOiAxMTBweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRgfTwvc3R5bGU+XHJcblx0XHQ8L2Rpdj5cclxuXHQgICk7XHJcblx0fVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTtcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0ICBzdXBlcihwcm9wcyk7XHJcblx0ICB0aGlzLnN1Ym1pdEZvcm0gPSB0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKTtcclxuXHQgIHRoaXMuc3RhdGUgPSB7XHJcblx0XHRzdGF0dXM6IFwiXCJcclxuXHQgIH07XHJcblx0fVxyXG4gIFxyXG5cdHJlbmRlcigpIHtcclxuXHQgIGNvbnN0IHsgc3RhdHVzIH0gPSB0aGlzLnN0YXRlO1xyXG5cdCAgcmV0dXJuIChcclxuXHRcdDxGb3Jtc3ByZWVQcm92aWRlciBwcm9qZWN0PVwie2NvbnRhY3R9XCI+XHJcblx0XHQ8aDUgY2xhc3NOYW1lPVwiSGVhZGluZyBwbC0zIG10LTNcIj5HZXQgaW4gdG91Y2g8L2g1PlxyXG5cdFx0PGZvcm0gXHJcblx0XHQgIGNsYXNzTmFtZT1cInAtM1wiXHJcblx0XHQgIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm19XHJcblx0XHQgIGFjdGlvbj1cImh0dHBzOi8vZm9ybXNwcmVlLmlvL2YveHJnb3F2YXFcIiBcclxuXHRcdCAgbWV0aG9kPVwiUE9TVFwiXHJcblx0XHQ+XHJcblx0XHQgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtTGFiZWxcIj5FbWFpbDo8L2xhYmVsPlxyXG5cdFx0ICA8YnI+PC9icj5cclxuXHRcdCAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm1JbnB1dFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIC8+IDxicj48L2JyPlxyXG5cdFx0ICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybUxhYmVsIG10LTJcIj5NZXNzYWdlOjwvbGFiZWw+IDxicj48L2JyPlxyXG5cdFx0ICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybUlucHV0IHBiLTVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJtZXNzYWdlXCIgLz4gPGJyPjwvYnI+XHJcblx0XHQgIHtzdGF0dXMgPT09IFwiU1VDQ0VTU1wiID8gPHA+VGhhbmtzITwvcD4gOiA8QnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdEJ1dHRvbiBtdC0zXCI+U3VibWl0PC9CdXR0b24+fVxyXG5cdFx0ICB7c3RhdHVzID09PSBcIkVSUk9SXCIgJiYgPHA+T29vcHMhIFRoZXJlIHdhcyBhbiBlcnJvci48L3A+fVxyXG5cdFx0PC9mb3JtPlxyXG5cdFx0PHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuXHRcdFx0LkhlYWRpbmcge1xyXG5cdFx0XHRcdGNvbG9yOiAjMGQwNDExO1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBBbGxlcnRhLCBzYW5zLXNlcmlmO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA4MDA7XHJcblx0XHRcdH1cclxuXHRcdFx0LmNvbnRhY3RUZXh0IHtcclxuXHRcdFx0XHRjb2xvcjogIzBkMDQxMTtcclxuXHRcdFx0XHRmb250LWZhbWlseTogQml0dGVyLCBzZXJpZjtcclxuXHRcdFx0fVxyXG5cdFx0XHQuZm9ybUxhYmVsIHtcclxuXHRcdFx0XHRmb250LWZhbWlseTogQml0dGVyLCBzZXJpZjtcclxuXHRcdFx0fVxyXG5cdFx0XHQuZm9ybUlucHV0IHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjY2RjOWRlO1xyXG5cdFx0XHRcdHdpZHRoOiA3NSU7XHJcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdFx0fVxyXG5cdFx0XHQuc3VibWl0QnV0dG9uIHtcclxuXHRcdFx0XHR3aWR0aDogMTEwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0PC9Gb3Jtc3ByZWVQcm92aWRlcj5cclxuXHQgICk7XHJcblx0fVxyXG4gIFxyXG5cdHN1Ym1pdEZvcm0oZXYpIHtcclxuXHQgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0ICBjb25zdCBmb3JtID0gZXYudGFyZ2V0O1xyXG5cdCAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuXHQgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdCAgeGhyLm9wZW4oZm9ybS5tZXRob2QsIGZvcm0uYWN0aW9uKTtcclxuXHQgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHQgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcblx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHJldHVybjtcclxuXHRcdGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuXHRcdCAgZm9ybS5yZXNldCgpO1xyXG5cdFx0ICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBcIlNVQ0NFU1NcIiB9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHQgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IFwiRVJST1JcIiB9KTtcclxuXHRcdH1cclxuXHQgIH07XHJcblx0ICB4aHIuc2VuZChkYXRhKTtcclxuXHR9XHJcbiAgfSJdfQ== */\\n/*@ sourceURL=/Users/Chuckie/Documents/GitHub/benjan-spot/components/Contact/ContactForm.js */\"));\n    }\n  }, {\n    key: \"submitForm\",\n    value: function submitForm(ev) {\n      var _this2 = this;\n\n      ev.preventDefault();\n      var form = ev.target;\n      var data = new FormData(form);\n      var xhr = new XMLHttpRequest();\n      xhr.open(form.method, form.action);\n      xhr.setRequestHeader(\"Accept\", \"application/json\");\n\n      xhr.onreadystatechange = function () {\n        if (xhr.readyState !== XMLHttpRequest.DONE) return;\n\n        if (xhr.status === 200) {\n          form.reset();\n\n          _this2.setState({\n            status: \"SUCCESS\"\n          });\n        } else {\n          _this2.setState({\n            status: \"ERROR\"\n          });\n        }\n      };\n\n      xhr.send(data);\n    }\n  }]);\n\n  return MyForm;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0L0NvbnRhY3RGb3JtLmpzPzhkMmUiXSwibmFtZXMiOlsiTXlGb3JtIiwicHJvcHMiLCJzdWJtaXRGb3JtIiwiYmluZCIsInN0YXRlIiwic3RhdHVzIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJ0YXJnZXQiLCJkYXRhIiwiRm9ybURhdGEiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJtZXRob2QiLCJhY3Rpb24iLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsIkRPTkUiLCJyZXNldCIsInNldFN0YXRlIiwic2VuZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtRHFCQSxNOzs7OztBQUNwQixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIseUdBQWxCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ2RDLFlBQU0sRUFBRTtBQURNLEtBQWI7QUFIaUI7QUFNbEI7Ozs7NkJBRVE7QUFBQSxVQUNDQSxNQURELEdBQ1ksS0FBS0QsS0FEakIsQ0FDQ0MsTUFERDtBQUVQLGFBQ0QsTUFBQyxrRUFBRDtBQUFtQixlQUFPLEVBQUMsV0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBO0FBQUEsNENBQWMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFEQSxFQUVBO0FBRUUsZ0JBQVEsRUFBRSxLQUFLSCxVQUZqQjtBQUdFLGNBQU0sRUFBQyxpQ0FIVDtBQUlFLGNBQU0sRUFBQyxNQUpUO0FBQUEsNENBQ1ksS0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTUU7QUFBQSw0Q0FBaUIsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVBGLEVBUUU7QUFBNkIsWUFBSSxFQUFDLE9BQWxDO0FBQTBDLFlBQUksRUFBQyxPQUEvQztBQUFBLDRDQUFpQixXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUkYsT0FRNEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUjVELEVBU0U7QUFBQSw0Q0FBaUIsZ0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEYsT0FTcUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVHJELEVBVUU7QUFBa0MsWUFBSSxFQUFDLE1BQXZDO0FBQThDLFlBQUksRUFBQyxTQUFuRDtBQUFBLDRDQUFpQixnQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVZGLE9BVWtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVZsRSxFQVdHRyxNQUFNLEtBQUssU0FBWCxHQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXZCLEdBQXdDLE1BQUMsc0RBQUQ7QUFBUSxpQkFBUyxFQUFDLG1CQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVgzQyxFQVlHQSxNQUFNLEtBQUssT0FBWCxJQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBWnpCLENBRkE7QUFBQTtBQUFBO0FBQUEsMmxNQURDO0FBMENEOzs7K0JBRVVDLEUsRUFBSTtBQUFBOztBQUNiQSxRQUFFLENBQUNDLGNBQUg7QUFDQSxVQUFNQyxJQUFJLEdBQUdGLEVBQUUsQ0FBQ0csTUFBaEI7QUFDQSxVQUFNQyxJQUFJLEdBQUcsSUFBSUMsUUFBSixDQUFhSCxJQUFiLENBQWI7QUFDQSxVQUFNSSxHQUFHLEdBQUcsSUFBSUMsY0FBSixFQUFaO0FBQ0FELFNBQUcsQ0FBQ0UsSUFBSixDQUFTTixJQUFJLENBQUNPLE1BQWQsRUFBc0JQLElBQUksQ0FBQ1EsTUFBM0I7QUFDQUosU0FBRyxDQUFDSyxnQkFBSixDQUFxQixRQUFyQixFQUErQixrQkFBL0I7O0FBQ0FMLFNBQUcsQ0FBQ00sa0JBQUosR0FBeUIsWUFBTTtBQUNoQyxZQUFJTixHQUFHLENBQUNPLFVBQUosS0FBbUJOLGNBQWMsQ0FBQ08sSUFBdEMsRUFBNEM7O0FBQzVDLFlBQUlSLEdBQUcsQ0FBQ1AsTUFBSixLQUFlLEdBQW5CLEVBQXdCO0FBQ3RCRyxjQUFJLENBQUNhLEtBQUw7O0FBQ0EsZ0JBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVqQixrQkFBTSxFQUFFO0FBQVYsV0FBZDtBQUNELFNBSEQsTUFHTztBQUNMLGdCQUFJLENBQUNpQixRQUFMLENBQWM7QUFBRWpCLGtCQUFNLEVBQUU7QUFBVixXQUFkO0FBQ0Q7QUFDQyxPQVJEOztBQVNBTyxTQUFHLENBQUNXLElBQUosQ0FBU2IsSUFBVDtBQUNEOzs7O0VBeEVrQ2MsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29udGFjdC9Db250YWN0Rm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQ29udGFjdCBwYWdlIGZvcm1cclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IHsgRm9ybXNwcmVlUHJvdmlkZXIgfSBmcm9tICdAZm9ybXNwcmVlL3JlYWN0JztcclxuXHJcbi8qICBjbGFzcyBDb250YWN0Rm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHQgIHN1cGVyKHByb3BzKTtcclxuXHQgIHRoaXMuc3RhdGUgPSB7XHJcblx0XHRuYW1lOiAnJyxcclxuXHRcdGVtYWlsOiAnJyxcclxuXHRcdG1lc3NhZ2U6ICcnXHJcblx0ICB9XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0ICByZXR1cm4oXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm1Db250YWluZXIgcC00XCI+XHJcblx0XHQ8aDUgY2xhc3NOYW1lPVwiSGVhZGluZyBtYi00XCI+R2V0IGluIHRvdWNoPC9oNT5cclxuXHRcdCAgPGZvcm0gaWQ9XCJjb250YWN0LWZvcm1cIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdCAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiY29udGFjdFRleHRcIj5OYW1lPC9sYWJlbD5cclxuXHRcdFx0ICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdCAgPGxhYmVsIGh0bWxGb3I9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBjbGFzc05hbWU9XCJjb250YWN0VGV4dFwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxyXG5cdFx0XHQgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0ICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIiBjbGFzc05hbWU9XCJjb250YWN0VGV4dFwiPk1lc3NhZ2U8L2xhYmVsPlxyXG5cdFx0XHQgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByb3dzPVwiNVwiIHZhbHVlPXt0aGlzLnN0YXRlLm1lc3NhZ2V9IC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJzdWJtaXRCdXR0b25cIj5TdWJtaXQ8L0J1dHRvbj5cclxuXHRcdCAgPC9mb3JtPlxyXG5cdFx0ICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG5cdFx0XHQuSGVhZGluZyB7XHJcblx0XHRcdFx0Y29sb3I6ICMwZDA0MTE7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6IEFsbGVydGEsIHNhbnMtc2VyaWY7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDgwMDtcclxuXHRcdFx0fVxyXG5cdFx0XHQuY29udGFjdFRleHQge1xyXG5cdFx0XHRcdGNvbG9yOiAjMGQwNDExO1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBCaXR0ZXIsIHNlcmlmO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5zdWJtaXRCdXR0b24ge1xyXG5cdFx0XHRcdHdpZHRoOiAxMTBweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRgfTwvc3R5bGU+XHJcblx0XHQ8L2Rpdj5cclxuXHQgICk7XHJcblx0fVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTtcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0ICBzdXBlcihwcm9wcyk7XHJcblx0ICB0aGlzLnN1Ym1pdEZvcm0gPSB0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKTtcclxuXHQgIHRoaXMuc3RhdGUgPSB7XHJcblx0XHRzdGF0dXM6IFwiXCJcclxuXHQgIH07XHJcblx0fVxyXG4gIFxyXG5cdHJlbmRlcigpIHtcclxuXHQgIGNvbnN0IHsgc3RhdHVzIH0gPSB0aGlzLnN0YXRlO1xyXG5cdCAgcmV0dXJuIChcclxuXHRcdDxGb3Jtc3ByZWVQcm92aWRlciBwcm9qZWN0PVwie2NvbnRhY3R9XCI+XHJcblx0XHQ8aDUgY2xhc3NOYW1lPVwiSGVhZGluZyBwbC0zIG10LTNcIj5HZXQgaW4gdG91Y2g8L2g1PlxyXG5cdFx0PGZvcm0gXHJcblx0XHQgIGNsYXNzTmFtZT1cInAtM1wiXHJcblx0XHQgIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm19XHJcblx0XHQgIGFjdGlvbj1cImh0dHBzOi8vZm9ybXNwcmVlLmlvL2YveHJnb3F2YXFcIiBcclxuXHRcdCAgbWV0aG9kPVwiUE9TVFwiXHJcblx0XHQ+XHJcblx0XHQgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtTGFiZWxcIj5FbWFpbDo8L2xhYmVsPlxyXG5cdFx0ICA8YnI+PC9icj5cclxuXHRcdCAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm1JbnB1dFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIC8+IDxicj48L2JyPlxyXG5cdFx0ICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybUxhYmVsIG10LTJcIj5NZXNzYWdlOjwvbGFiZWw+IDxicj48L2JyPlxyXG5cdFx0ICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybUlucHV0IHBiLTVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJtZXNzYWdlXCIgLz4gPGJyPjwvYnI+XHJcblx0XHQgIHtzdGF0dXMgPT09IFwiU1VDQ0VTU1wiID8gPHA+VGhhbmtzITwvcD4gOiA8QnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdEJ1dHRvbiBtdC0zXCI+U3VibWl0PC9CdXR0b24+fVxyXG5cdFx0ICB7c3RhdHVzID09PSBcIkVSUk9SXCIgJiYgPHA+T29vcHMhIFRoZXJlIHdhcyBhbiBlcnJvci48L3A+fVxyXG5cdFx0PC9mb3JtPlxyXG5cdFx0PHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuXHRcdFx0LkhlYWRpbmcge1xyXG5cdFx0XHRcdGNvbG9yOiAjMGQwNDExO1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBBbGxlcnRhLCBzYW5zLXNlcmlmO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA4MDA7XHJcblx0XHRcdH1cclxuXHRcdFx0LmNvbnRhY3RUZXh0IHtcclxuXHRcdFx0XHRjb2xvcjogIzBkMDQxMTtcclxuXHRcdFx0XHRmb250LWZhbWlseTogQml0dGVyLCBzZXJpZjtcclxuXHRcdFx0fVxyXG5cdFx0XHQuZm9ybUxhYmVsIHtcclxuXHRcdFx0XHRmb250LWZhbWlseTogQml0dGVyLCBzZXJpZjtcclxuXHRcdFx0fVxyXG5cdFx0XHQuZm9ybUlucHV0IHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjY2RjOWRlO1xyXG5cdFx0XHRcdHdpZHRoOiA3NSU7XHJcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdFx0fVxyXG5cdFx0XHQuc3VibWl0QnV0dG9uIHtcclxuXHRcdFx0XHR3aWR0aDogMTEwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0PC9Gb3Jtc3ByZWVQcm92aWRlcj5cclxuXHQgICk7XHJcblx0fVxyXG4gIFxyXG5cdHN1Ym1pdEZvcm0oZXYpIHtcclxuXHQgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0ICBjb25zdCBmb3JtID0gZXYudGFyZ2V0O1xyXG5cdCAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuXHQgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdCAgeGhyLm9wZW4oZm9ybS5tZXRob2QsIGZvcm0uYWN0aW9uKTtcclxuXHQgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHQgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcblx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHJldHVybjtcclxuXHRcdGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuXHRcdCAgZm9ybS5yZXNldCgpO1xyXG5cdFx0ICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBcIlNVQ0NFU1NcIiB9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHQgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IFwiRVJST1JcIiB9KTtcclxuXHRcdH1cclxuXHQgIH07XHJcblx0ICB4aHIuc2VuZChkYXRhKTtcclxuXHR9XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Contact/ContactForm.js\n");

/***/ })

})