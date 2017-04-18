"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactScroll = require("react-scroll");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mas/Documents/websites/portfolio-04-17/components/Start.js";

exports.default = function () {
  return _react2.default.createElement(_reactScroll.Element, { id: "start", __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "Michael Simmelbauer"), _react2.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "I'm a Fullstack Developer who focuses writing clean, elegant and efficent Code. Working with HTML, CSS, JavaScript, ReactJS and Node.js"), _react2.default.createElement(_reactScroll.Link, { to: "about", spy: true, smooth: true, duration: 1000, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Read more..."), _react2.default.createElement(_reactScroll.Link, { to: "projects", spy: true, smooth: true, duration: 500, delay: 100, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Projects"), _react2.default.createElement(_reactScroll.Link, { to: "contact", spy: true, smooth: true, duration: 500, delay: 100, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Contact"));
};