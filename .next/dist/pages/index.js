"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

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

var _betterReactSpinkit = require("better-react-spinkit");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _page = require("../components/page");

var _page2 = _interopRequireDefault(_page);

var _Start = require("../components/Start");

var _Start2 = _interopRequireDefault(_Start);

var _About = require("../components/About");

var _About2 = _interopRequireDefault(_About);

var _Projects = require("../components/Projects");

var _Projects2 = _interopRequireDefault(_Projects);

var _Contact = require("../components/Contact");

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mas/Documents/websites/portfolio-04-17/pages/index.js?entry";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  position: fixed;\n  top: 40%;\n  left: 45%;\n  height: 100%;\n  width: 100%;\n"], ["\n  position: fixed;\n  top: 40%;\n  left: 45%;\n  height: 100%;\n  width: 100%;\n"]);

var Section = function (_React$Component) {
  (0, _inherits3.default)(Section, _React$Component);

  function Section() {
    (0, _classCallCheck3.default)(this, Section);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Section.__proto__ || (0, _getPrototypeOf2.default)(Section)).call(this));

    _this.state = {
      isLoading: true
    };
    return _this;
  }

  (0, _createClass3.default)(Section, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isLoading: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_page2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, this.state.isLoading ? _react2.default.createElement(LoadingWrap, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_betterReactSpinkit.DoubleBounce, { size: 120, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      })) : _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement(_Start2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement(_About2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement(_Projects2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement(_Contact2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      })));
    }
  }]);

  return Section;
}(_react2.default.Component);

exports.default = Section;


var LoadingWrap = _styledComponents2.default.div(_templateObject);