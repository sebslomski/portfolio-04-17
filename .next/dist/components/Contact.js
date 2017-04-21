"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactScroll = require("react-scroll");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mas/Documents/websites/portfolio-04-17/components/Contact.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n    margin: 3rem auto;\n"], ["\n    margin: 3rem auto;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n    font-size: 3.25rem;\n    font-family: Lora,Times New Roman,serif;\n    font-weight: 400;\n    margin: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"], ["\n    font-size: 3.25rem;\n    font-family: Lora,Times New Roman,serif;\n    font-weight: 400;\n    margin: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n    margin: 0 auto;\n    height: 600px;\n"], ["\n    margin: 0 auto;\n    height: 600px;\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"], ["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n    margin: 1rem;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n"], ["\n    margin: 1rem;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n"]),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(["\n    font-size: 1.75rem;\n    padding: 0rem 2rem 0.5rem;\n    width: 6rem;\n    margin-right: 4rem;\n"], ["\n    font-size: 1.75rem;\n    padding: 0rem 2rem 0.5rem;\n    width: 6rem;\n    margin-right: 4rem;\n"]),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(["\n    border-radius: 5px;\n    background: transparent;\n    border: 1px solid #ccc;\n    font-size: 1.75rem;\n    font-family: inherit;\n    width: 25rem;\n    height: ", ";\n"], ["\n    border-radius: 5px;\n    background: transparent;\n    border: 1px solid #ccc;\n    font-size: 1.75rem;\n    font-family: inherit;\n    width: 25rem;\n    height: ", ";\n"]),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(["\n  color: white;\n  background-color: #FF5252;\n  padding: 0.5rem 2rem;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 1.3rem;\n  margin-top: 1rem;\n  border: none;\n"], ["\n  color: white;\n  background-color: #FF5252;\n  padding: 0.5rem 2rem;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 1.3rem;\n  margin-top: 1rem;\n  border: none;\n"]),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(["\n  margin-top: 2rem;\n  display: flex;\n  justify-content: center;\n  max-height: 3.5rem;\n"], ["\n  margin-top: 2rem;\n  display: flex;\n  justify-content: center;\n  max-height: 3.5rem;\n"]);

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    }, _this.handleChange = function (e) {
      _this.setState((0, _defineProperty3.default)({}, e.target.name, e.target.value));
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      console.log(_this.state);
      _axios2.default.post("https://simmco-email.now.sh", _this.state).then(function (res) {
        return console.log(res);
      }).catch(function (err) {
        return console.log(err);
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(_class, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_reactScroll.Element, { id: "contact", __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "Get in touch"), _react2.default.createElement(EmailWrap, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(Form, { onSubmit: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(InputGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(InputTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "name"), _react2.default.createElement(InputField, {
        name: "name",
        onChange: this.handleChange,
        value: this.state.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      })), _react2.default.createElement(InputGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(InputTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "email"), _react2.default.createElement(InputField, {
        name: "email",
        type: "email",
        onChange: this.handleChange,
        value: this.state.email,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })), _react2.default.createElement(InputGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(InputTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "subject"), _react2.default.createElement(InputField, {
        name: "subject",
        onChange: this.handleChange,
        value: this.state.subject,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      })), _react2.default.createElement(InputGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(InputTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "message"), _react2.default.createElement(InputField, {
        primary: true,
        type: "textfield",
        name: "message",
        onChange: this.handleChange,
        value: this.state.message,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      })), _react2.default.createElement(Button, { type: "submit", __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "Send"))), _react2.default.createElement(Icons, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement("img", { src: "static/github.svg", __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), _react2.default.createElement("img", { src: "static/linkedin.svg", __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react2.default.createElement("img", { src: "static/twitter.svg", __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;


var Wrapper = _styledComponents2.default.div(_templateObject);

var Title = _styledComponents2.default.h2(_templateObject2);

var EmailWrap = _styledComponents2.default.div(_templateObject3);

var Form = _styledComponents2.default.form(_templateObject4);

var InputGroup = _styledComponents2.default.div(_templateObject5);

var InputTitle = _styledComponents2.default.span(_templateObject6);

var InputField = _styledComponents2.default.input(_templateObject7, function (props) {
  return props.primary ? "15rem" : "auto";
});

var Button = _styledComponents2.default.button(_templateObject8);

var Icons = _styledComponents2.default.div(_templateObject9);