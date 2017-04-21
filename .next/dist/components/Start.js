"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactScroll = require("react-scroll");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mas/Documents/websites/portfolio-04-17/components/Start.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 16vh 0 31vh;\n  display: flex;\n  flex-direction: column;\n"], ["\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 16vh 0 31vh;\n  display: flex;\n  flex-direction: column;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  font-size: 3.75rem;\n  font-family: Lora,Times New Roman,serif;\n  margin: 1rem 0 1.5rem;\n"], ["\n  font-size: 3.75rem;\n  font-family: Lora,Times New Roman,serif;\n  margin: 1rem 0 1.5rem;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  font-size: 1.875rem;\n  font-weight: 300;\n  margin:0 0 2rem;\n"], ["\n  font-size: 1.875rem;\n  font-weight: 300;\n  margin:0 0 2rem;\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n  display: flex;\n"], ["\n  display: flex;\n"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n  font-size: 1.3rem;\n  cursor: pointer;\n"], ["\n  font-size: 1.3rem;\n  cursor: pointer;\n"]),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(["\n  color: white;\n  background-color: #FF5252;\n  padding: 0.5rem 1rem;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 1.3rem;\n  margin-right: 2rem;\n"], ["\n  color: white;\n  background-color: #FF5252;\n  padding: 0.5rem 1rem;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 1.3rem;\n  margin-right: 2rem;\n"]);

exports.default = function () {
  return _react2.default.createElement(_reactScroll.Element, { id: "start", __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement("svg", {
    width: "180px",
    height: "182px",
    viewBox: "-7 -8 209 211",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement("desc", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Created with Sketch."), _react2.default.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement("g", {
    id: "Group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement("text", { id: "MS", fontSize: "64", fontWeight: "400", fill: "#FF5252", __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement("tspan", { x: "49.9748744", y: "120.151515", __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "MS")), _react2.default.createElement("polygon", {
    id: "Rectangle",
    stroke: "#FF5252",
    strokeWidth: "6",
    points: "97.569602 0.00497410913 194.574703 97.5 97.569602 194.995026 0.564500897 97.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }))), _react2.default.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "Michael Simmelbauer"), _react2.default.createElement(Subtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "I'm a Fullstack Developer who focuses writing clean, elegant and efficient Code. Working with HTML, CSS, JavaScript, ReactJS and Node.js"), _react2.default.createElement(Further, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement(_reactScroll.Link, { to: "projects", spy: true, smooth: true, duration: 500, delay: 100, __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, "Projects")), _react2.default.createElement(_reactScroll.Link, { to: "about", spy: true, smooth: true, duration: 1000, __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement(More, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, "Read more...")))));
};

var Wrapper = _styledComponents2.default.div(_templateObject);

var Title = _styledComponents2.default.h1(_templateObject2);

var Subtitle = _styledComponents2.default.h3(_templateObject3);

var Further = _styledComponents2.default.div(_templateObject4);

var More = _styledComponents2.default.span(_templateObject5);

var Button = _styledComponents2.default.span(_templateObject6);