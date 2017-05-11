webpackHotUpdate(5,{

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(566);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactScroll = __webpack_require__(567);

var _styledComponents = __webpack_require__(569);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mas/Documents/websites/portfolio-04-17/components/Projects.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n\n"], ["\n\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n    font-size: 3.25rem;\n    font-family: Lora,Times New Roman,serif;\n    font-weight: 400;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"], ["\n    font-size: 3.25rem;\n    font-family: Lora,Times New Roman,serif;\n    font-weight: 400;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n    font-size: 1.375rem;\n    margin:1rem 0 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 300;\n"], ["\n    font-size: 1.375rem;\n    margin:1rem 0 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 300;\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n"], ["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n    max-width: 600px;\n    min-height: 250px;\n    padding: 2rem 1.875rem;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: stretch;\n"], ["\n    max-width: 600px;\n    min-height: 250px;\n    padding: 2rem 1.875rem;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: stretch;\n"]),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(["\n    flex: 4;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 0 0.3rem;\n\n    @media(max-width: 880px) {\n      min-width: 70%;\n    }\n"], ["\n    flex: 4;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 0 0.3rem;\n\n    @media(max-width: 880px) {\n      min-width: 70%;\n    }\n"]),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(["\n    display:flex;\n    flex-direction: column;\n    flex: 2;\n    padding: 0 0.2rem;\n"], ["\n    display:flex;\n    flex-direction: column;\n    flex: 2;\n    padding: 0 0.2rem;\n"]),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(["\n    max-width: 100%;\n    min-width: 160px;\n    flex-basis: auto;\n    border: 1px solid #ccc;\n    transition: all .2s ease-out;\n    cursor: pointer;\n\n    &:hover {\n          border: 1px solid #7f7f7f;\n    }\n"], ["\n    max-width: 100%;\n    min-width: 160px;\n    flex-basis: auto;\n    border: 1px solid #ccc;\n    transition: all .2s ease-out;\n    cursor: pointer;\n\n    &:hover {\n          border: 1px solid #7f7f7f;\n    }\n"]),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(["\n    margin-top: auto;\n    padding: 1rem 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"], ["\n    margin-top: auto;\n    padding: 1rem 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(["\n  max-height: 35px;\n  padding-right: 0.7rem;\n"], ["\n  max-height: 35px;\n  padding-right: 0.7rem;\n"]),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"]),
    _templateObject12 = (0, _taggedTemplateLiteral3.default)(["\n  text-decoration: none;\n  &:hover {\n  text-decoration: underline;\n  }\n"], ["\n  text-decoration: none;\n  &:hover {\n  text-decoration: underline;\n  }\n"]),
    _templateObject13 = (0, _taggedTemplateLiteral3.default)(["\n    font-size: 1.75rem;\n    font-family: Lora,Times New Roman,serif;\n    font-weight: 400;\n    margin: 0;\n\n    @media(max-width: 880px) {\n      padding-bottom: 1rem;\n      text-align: center;\n    }\n"], ["\n    font-size: 1.75rem;\n    font-family: Lora,Times New Roman,serif;\n    font-weight: 400;\n    margin: 0;\n\n    @media(max-width: 880px) {\n      padding-bottom: 1rem;\n      text-align: center;\n    }\n"]),
    _templateObject14 = (0, _taggedTemplateLiteral3.default)(["\n    border-bottom: 1px solid #ccc;\n    color: currentColor;\n    text-decoration: none;\n    padding-bottom: 0.1rem;\n    transition: all .2s ease-out;\n\n    &:hover {\n      border-color: #7f7f7f;\n    }\n"], ["\n    border-bottom: 1px solid #ccc;\n    color: currentColor;\n    text-decoration: none;\n    padding-bottom: 0.1rem;\n    transition: all .2s ease-out;\n\n    &:hover {\n      border-color: #7f7f7f;\n    }\n"]),
    _templateObject15 = (0, _taggedTemplateLiteral3.default)(["\n    font-weight: 300;\n    @media(max-width: 880px) {\n      padding-bottom: 1rem;\n      text-align: center;\n    }\n"], ["\n    font-weight: 300;\n    @media(max-width: 880px) {\n      padding-bottom: 1rem;\n      text-align: center;\n    }\n"]),
    _templateObject16 = (0, _taggedTemplateLiteral3.default)(["\n\n    display: flex;\n    flex-wrap: wrap;\n    padding-bottom: 0.3rem;\n\n    @media(max-width: 880px) {\n      padding-bottom: 1rem;\n      justify-content: center;\n    }\n"], ["\n\n    display: flex;\n    flex-wrap: wrap;\n    padding-bottom: 0.3rem;\n\n    @media(max-width: 880px) {\n      padding-bottom: 1rem;\n      justify-content: center;\n    }\n"]),
    _templateObject17 = (0, _taggedTemplateLiteral3.default)(["\n    border: 1px solid #999;\n    border-radius: 4px;\n    padding: 0.2rem 0.5rem;\n    color: #999;\n    margin: 0 0.5rem 0.5rem 0;\n"], ["\n    border: 1px solid #999;\n    border-radius: 4px;\n    padding: 0.2rem 0.5rem;\n    color: #999;\n    margin: 0 0.5rem 0.5rem 0;\n"]),
    _templateObject18 = (0, _taggedTemplateLiteral3.default)(["\n  text-decoration: none;\n"], ["\n  text-decoration: none;\n"]);

exports.default = function () {
  return _react2.default.createElement(_reactScroll.Element, { id: "projects", style: { paddingBottom: "20px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Projects"), _react2.default.createElement(Subtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Thinks I've done and work in progress")), _react2.default.createElement(ProjectsWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(ProjectWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(ProjectLeft, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(ProjectTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(ProjectTitleLink, { href: "http://kaulquappe.now.sh", target: "_blank", __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Die Kaulquappe")), _react2.default.createElement(ProjectDesc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Website for a swimming school. With Node.js as Backend for a booking system and an admin panel for course managment."), _react2.default.createElement(ProjectStack, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "React"), _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Node"), _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "MongoDB"), _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "UI"))), _react2.default.createElement(ProjectRight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement(ProjectPicture, { src: "/static/kaulquappe.jpg", __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }))), _react2.default.createElement(ProjectWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement(ProjectLeft, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, _react2.default.createElement(ProjectTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, _react2.default.createElement(ProjectTitleLink, {
    href: "https://lit-brook-10809.herokuapp.com/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "Trading Book Store")), _react2.default.createElement(ProjectDesc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, "You can Sign up as a User and trade with other people books. You can add your books with the Google Books API. You can accept and decline Requests."), _react2.default.createElement(ProjectStack, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, "React"), _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, "Redux"), _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, "Node"), _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, "MongoDB"))), _react2.default.createElement(ProjectRight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, _react2.default.createElement(ProjectPicture, { src: "/static/book-trading.jpg", __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }), _react2.default.createElement(ProjectGithub, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, _react2.default.createElement(GithubImage, { src: "static/github.svg", __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }), _react2.default.createElement(GithubDesc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, _react2.default.createElement(GithubLink, { href: "https://github.com/simmco/trading-book-store/tree/master/server", target: "_blank", __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, "Backend"), _react2.default.createElement(GithubLink, { href: "https://github.com/simmco/trading-book-store/tree/master/react-ui", target: "_blank", __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, "Frontend"))))), _react2.default.createElement(ProjectWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, _react2.default.createElement(ProjectLeft, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, _react2.default.createElement(ProjectTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, _react2.default.createElement(ProjectTitleLink, {
    href: "https://simmco.github.io/pinterest-clone/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, "Pinterest Clone")), _react2.default.createElement(ProjectDesc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, "You can Sign up as a User and share, like and delete pictures. It is possible to watch your own and others Pinterest wall."), _react2.default.createElement(ProjectStack, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, "React"), _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, "Redux"), _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, "Node"), _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, "MongoDB"))), _react2.default.createElement(ProjectRight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, _react2.default.createElement(ProjectPicture, { src: "/static/pinterest.jpg", __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }), _react2.default.createElement(ProjectGithub, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, _react2.default.createElement(GithubImage, { src: "static/github.svg", __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }), _react2.default.createElement(GithubDesc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }, _react2.default.createElement(GithubLink, { href: "https://github.com/simmco/api-pinterest-clone", target: "_blank", __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, "Backend"), _react2.default.createElement(GithubLink, { href: "https://github.com/simmco/pinterest-clone", target: "_blank", __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }, "Frontend"))))), _react2.default.createElement(ProjectWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }, _react2.default.createElement(ProjectLeft, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, _react2.default.createElement(ProjectTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, _react2.default.createElement(ProjectTitleLink, {
    href: "https://simmco.github.io/nightlife/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    }
  }, "Nightlife Coordination")), _react2.default.createElement(ProjectDesc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }, "You can sign up, search Bars by city and indicate You are going there tonight."), _react2.default.createElement(ProjectStack, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    }
  }, _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    }
  }, "React"), _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    }
  }, "Node"), _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    }
  }, "UI"))), _react2.default.createElement(ProjectRight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    }
  }, _react2.default.createElement(ProjectPicture, { src: "/static/nightlife.jpg", __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    }
  }), _react2.default.createElement(ProjectGithub, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    }
  }, _react2.default.createElement(GithubImage, { src: "static/github.svg", __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    }
  }), _react2.default.createElement(GithubDesc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    }
  }, _react2.default.createElement(GithubLink, { href: "https://github.com/simmco/api-nightlife", target: "_blank", __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    }
  }, "Backend"), _react2.default.createElement(GithubLink, { href: "https://github.com/simmco/pinterest-clone", target: "_blank", __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    }
  }, "Frontend"))))), _react2.default.createElement(ProjectWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    }
  }, _react2.default.createElement(ProjectLeft, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    }
  }, _react2.default.createElement(ProjectTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    }
  }, _react2.default.createElement(ProjectTitleLink, {
    href: "https://simmco-voting-app.herokuapp.com/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    }
  }, "Voting App")), _react2.default.createElement(ProjectDesc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    }
  }, "You can sign up, create some polls, vote for other polls. And you can see the result as a chart."), _react2.default.createElement(ProjectStack, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    }
  }, _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    }
  }, "HTML"), _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    }
  }, "CSS"), _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    }
  }, "JS"), _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    }
  }, "Node"), _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    }
  }, "MongoDB"))), _react2.default.createElement(ProjectRight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    }
  }, _react2.default.createElement(ProjectPicture, { src: "/static/vote.jpg", __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    }
  }), _react2.default.createElement(ProjectGithub, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    }
  }, _react2.default.createElement(GithubImage, { src: "static/github.svg", __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    }
  }), _react2.default.createElement(GithubDesc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    }
  }, _react2.default.createElement(GithubLink, { href: "https://github.com/simmco/voting_app", target: "_blank", __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    }
  }, "Repository"))))), _react2.default.createElement(ProjectWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    }
  }, _react2.default.createElement(ProjectLeft, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    }
  }, _react2.default.createElement(ProjectTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    }
  }, _react2.default.createElement(ProjectTitleLink, {
    href: "https://chat-redux.firebaseapp.com/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    }
  }, "Firebase Chat App")), _react2.default.createElement(ProjectDesc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    }
  }, "You can Sign up with a Google Account and chat with other people in realtime. The Backend is build with Firebase."), _react2.default.createElement(ProjectStack, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    }
  }, _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    }
  }, "React"), _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    }
  }, "Redux"), _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    }
  }, "Firebase"))), _react2.default.createElement(ProjectRight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    }
  }, _react2.default.createElement(ProjectPicture, { src: "/static/firebase-chat.jpg", __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    }
  }), _react2.default.createElement(ProjectGithub, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    }
  }, _react2.default.createElement(GithubImage, { src: "static/github.svg", __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    }
  }), _react2.default.createElement(GithubDesc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    }
  }, _react2.default.createElement(GithubLink, { href: "https://github.com/simmco/firebase-chat", target: "_blank", __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    }
  }, "Repository"))))), _react2.default.createElement(ProjectWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    }
  }, _react2.default.createElement(ProjectLeft, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    }
  }, _react2.default.createElement(ProjectTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    }
  }, _react2.default.createElement(ProjectTitleLink, {
    href: "https://simmco.github.io/localWeather/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    }
  }, "Local Weather")), _react2.default.createElement(ProjectDesc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    }
  }, "This Page shows the weather conditions at your current position for the next 3 days."), _react2.default.createElement(ProjectStack, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    }
  }, _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    }
  }, "HTML"), _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    }
  }, "CSS"), _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    }
  }, "JS"), _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    }
  }, "Bootstrap"))), _react2.default.createElement(ProjectRight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    }
  }, _react2.default.createElement(ProjectPicture, { src: "/static/weather.jpg", __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    }
  }), _react2.default.createElement(ProjectGithub, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    }
  }, _react2.default.createElement(GithubImage, { src: "static/github.svg", __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    }
  }), _react2.default.createElement(GithubDesc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    }
  }, _react2.default.createElement(GithubLink, { href: "https://github.com/simmco/localWeather", target: "_blank", __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    }
  }, "Repository"))))), _react2.default.createElement(ProjectWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    }
  }, _react2.default.createElement(ProjectLeft, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    }
  }, _react2.default.createElement(ProjectTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    }
  }, _react2.default.createElement(ProjectTitleLink, { href: "https://cineflix.now.sh", target: "_blank", __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    }
  }, "Cineflix")), _react2.default.createElement(ProjectDesc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    }
  }, "A Netflix clone for movies. You can see movies in theatre, best last year, highest rated, most popular and most popular last year. Build with ", _react2.default.createElement(MovieDBLink, { href: "https://developers.themoviedb.org/3/getting-started", target: "_blank", __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    }
  }, "THEMOVIEDB API"), "."), _react2.default.createElement(ProjectStack, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    }
  }, _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    }
  }, "React"), _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    }
  }, "UI"))), _react2.default.createElement(ProjectRight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    }
  }, _react2.default.createElement(ProjectPicture, { src: "/static/cineflix.jpg", __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    }
  }), _react2.default.createElement(ProjectGithub, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    }
  }, _react2.default.createElement(GithubImage, { src: "static/github.svg", __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    }
  }), _react2.default.createElement(GithubDesc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    }
  }, _react2.default.createElement(GithubLink, { href: "https://github.com/simmco/cineflix", target: "_blank", __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    }
  }, "Repository"))))), _react2.default.createElement(ProjectWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    }
  }, _react2.default.createElement(ProjectLeft, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    }
  }, _react2.default.createElement(ProjectTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    }
  }, _react2.default.createElement(ProjectTitleLink, { href: "https://simmco.github.io/recipe-book", target: "_blank", __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    }
  }, "Recipe Book")), _react2.default.createElement(ProjectDesc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    }
  }, "You can save your recipes, add and remove ingredients. Everthing is saved in browsers localStorage."), _react2.default.createElement(ProjectStack, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    }
  }, _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    }
  }, "React"))), _react2.default.createElement(ProjectRight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    }
  }, _react2.default.createElement(ProjectPicture, { src: "/static/recipe-book.jpg", __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    }
  }), _react2.default.createElement(ProjectGithub, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    }
  }, _react2.default.createElement(GithubImage, { src: "static/github.svg", __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    }
  }), _react2.default.createElement(GithubDesc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    }
  }, _react2.default.createElement(GithubLink, { href: "https://github.com/simmco/recipe-book", target: "_blank", __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    }
  }, "Repository"))))), _react2.default.createElement(ProjectWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    }
  }, _react2.default.createElement(ProjectLeft, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    }
  }, _react2.default.createElement(ProjectTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    }
  }, _react2.default.createElement(ProjectTitleLink, { href: "https://beauty-image-search.herokuapp.com/", target: "_blank", __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    }
  }, "Image Search Abstraction")), _react2.default.createElement(ProjectDesc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    }
  }, "A microservice who builds a API for a image search with picture, description, thumbnail and context."), _react2.default.createElement(ProjectStack, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    }
  }, _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    }
  }, "React"), _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    }
  }, "Node"), _react2.default.createElement(ProjectStackName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    }
  }, "UI"))), _react2.default.createElement(ProjectRight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    }
  }, _react2.default.createElement(ProjectPicture, { src: "/static/image-search.jpg", __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    }
  }), _react2.default.createElement(ProjectGithub, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    }
  }, _react2.default.createElement(GithubImage, { src: "static/github.svg", __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    }
  }), _react2.default.createElement(GithubDesc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    }
  }, _react2.default.createElement(GithubLink, { href: "https://github.com/simmco/image-search-abstraction-layer", target: "_blank", __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    }
  }, "Repository")))))));
};

var Header = _styledComponents2.default.div(_templateObject);

var Title = _styledComponents2.default.h2(_templateObject2);

var Subtitle = _styledComponents2.default.h3(_templateObject3);

var ProjectsWrapper = _styledComponents2.default.div(_templateObject4);

var ProjectWrap = _styledComponents2.default.div(_templateObject5);

var ProjectLeft = _styledComponents2.default.div(_templateObject6);

var ProjectRight = _styledComponents2.default.div(_templateObject7);

var ProjectPicture = _styledComponents2.default.img(_templateObject8);

var ProjectGithub = _styledComponents2.default.div(_templateObject9);

var GithubImage = _styledComponents2.default.img(_templateObject10);

var GithubDesc = _styledComponents2.default.div(_templateObject11);

var GithubLink = _styledComponents2.default.a(_templateObject12);

var ProjectTitle = _styledComponents2.default.h4(_templateObject13);

var ProjectTitleLink = _styledComponents2.default.a(_templateObject14);

var ProjectDesc = _styledComponents2.default.p(_templateObject15);

var ProjectStack = _styledComponents2.default.div(_templateObject16);

var ProjectStackName = _styledComponents2.default.p(_templateObject17);

var MovieDBLink = _styledComponents2.default.a(_templateObject18);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/websites/portfolio-04-17/components/Projects.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/websites/portfolio-04-17/components/Projects.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2plY3RzLmpzPzhlYTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUzs7QUFHVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQUFlO3lCQUNaLHNDQUFRLElBQUcsWUFBVyxPQUFPLEVBQUUsZUFBZTtnQkFBL0M7a0JBQ0U7QUFERjtHQUFBLGtCQUNHLGNBQUQ7O2dCQUFBO2tCQUNFO0FBREY7QUFBQSxxQkFDRyxjQUFEOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FDQSw2QkFBQyxjQUFEOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FHRiwyREFBQyxjQUFEOztnQkFBQTtrQkFDRTtBQURGO0FBQUEscUJBQ0csY0FBRDs7Z0JBQUE7a0JBRUU7QUFGRjtBQUFBLHFCQUVHLGNBQUQ7O2dCQUFBO2tCQUNFO0FBREY7QUFBQSxxQkFDRyxjQUFEOztnQkFBQTtrQkFDRTtBQURGO0FBQUEscUJBQ0csY0FBRCxvQkFBa0IsTUFBSyw0QkFBMkIsUUFBTztnQkFBekQ7a0JBQUE7QUFBQTtLQUlGLG9DQUFDLGNBQUQ7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUdBLHlJQUFDLGNBQUQ7O2dCQUFBO2tCQUNFO0FBREY7QUFBQSxxQkFDRyxjQUFEOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FDQSwwQkFBQyxjQUFEOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FDQSx5QkFBQyxjQUFEOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FDQSw0QkFBQyxjQUFEOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FJSix5QkFBQyxjQUFEOztnQkFBQTtrQkFDRTtBQURGO0FBQUEsbUNBQ0csa0JBQWUsS0FBSTtnQkFBcEI7a0JBTUo7QUFOSTt3QkFNSCxjQUFEOztnQkFBQTtrQkFFRTtBQUZGO0FBQUEscUJBRUcsY0FBRDs7Z0JBQUE7a0JBRUU7QUFGRjtBQUFBLHFCQUVHLGNBQUQ7O2dC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Qjs7QUFJQSxJQUFNLFFBQVEsMkJBQU8sR0FBckI7O0FBVUEsSUFBTSxXQUFXLDJCQUFPLEdBQXhCOztBQVNBLElBQU0sa0JBQWtCLDJCQUFPLElBQS9COztBQU1BLElBQU0sY0FBYywyQkFBTyxJQUEzQjs7QUFTQSxJQUFNLGNBQWMsMkJBQU8sSUFBM0I7O0FBWUEsSUFBTSxlQUFlLDJCQUFPLElBQTVCOztBQU9BLElBQU0saUJBQWlCLDJCQUFPLElBQTlCOztBQWFBLElBQU0sZ0JBQWdCLDJCQUFPLElBQTdCOztBQVFBLElBQU0sY0FBYywyQkFBTyxJQUEzQjs7QUFLQSxJQUFNLGFBQWEsMkJBQU8sSUFBMUI7O0FBS0EsSUFBTSxhQUFhLDJCQUFPLEVBQTFCOztBQU9BLElBQU0sZUFBZSwyQkFBTyxHQUE1Qjs7QUFZQSxJQUFNLG1CQUFtQiwyQkFBTyxFQUFoQzs7QUFZQSxJQUFNLGNBQWMsMkJBQU8sRUFBM0I7O0FBUUEsSUFBTSxlQUFlLDJCQUFPLElBQTVCOztBQVlBLElBQU0sbUJBQW1CLDJCQUFPLEVBQWhDOztBQVFBLElBQU0sY0FBYywyQkFBTyxFQUEzQixtQiIsImZpbGUiOiI1LjFmMWI4Yjg5MGIzZGJjMzk3OTI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8RWxlbWVudCBpZD1cInByb2plY3RzXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogXCIyMHB4XCIgfX0+XG4gICAgPEhlYWRlcj5cbiAgICAgIDxUaXRsZT5Qcm9qZWN0czwvVGl0bGU+XG4gICAgICA8U3VidGl0bGU+VGhpbmtzIEkndmUgZG9uZSBhbmQgd29yayBpbiBwcm9ncmVzczwvU3VidGl0bGU+XG4gICAgPC9IZWFkZXI+XG5cbiAgICA8UHJvamVjdHNXcmFwcGVyPlxuICAgICAgPFByb2plY3RXcmFwPlxuXG4gICAgICAgIDxQcm9qZWN0TGVmdD5cbiAgICAgICAgICA8UHJvamVjdFRpdGxlPlxuICAgICAgICAgICAgPFByb2plY3RUaXRsZUxpbmsgaHJlZj1cImh0dHA6Ly9rYXVscXVhcHBlLm5vdy5zaFwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICBEaWUgS2F1bHF1YXBwZVxuICAgICAgICAgICAgPC9Qcm9qZWN0VGl0bGVMaW5rPlxuICAgICAgICAgIDwvUHJvamVjdFRpdGxlPlxuICAgICAgICAgIDxQcm9qZWN0RGVzYz5cbiAgICAgICAgICAgIFdlYnNpdGUgZm9yIGEgc3dpbW1pbmcgc2Nob29sLiBXaXRoIE5vZGUuanMgYXMgQmFja2VuZCBmb3IgYSBib29raW5nIHN5c3RlbSBhbmQgYW4gYWRtaW4gcGFuZWwgZm9yIGNvdXJzZSBtYW5hZ21lbnQuXG4gICAgICAgICAgPC9Qcm9qZWN0RGVzYz5cbiAgICAgICAgICA8UHJvamVjdFN0YWNrPlxuICAgICAgICAgICAgPFByb2plY3RTdGFja05hbWU+UmVhY3Q8L1Byb2plY3RTdGFja05hbWU+XG4gICAgICAgICAgICA8UHJvamVjdFN0YWNrTmFtZT5Ob2RlPC9Qcm9qZWN0U3RhY2tOYW1lPlxuICAgICAgICAgICAgPFByb2plY3RTdGFja05hbWU+TW9uZ29EQjwvUHJvamVjdFN0YWNrTmFtZT5cbiAgICAgICAgICAgIDxQcm9qZWN0U3RhY2tOYW1lPlVJPC9Qcm9qZWN0U3RhY2tOYW1lPlxuICAgICAgICAgIDwvUHJvamVjdFN0YWNrPlxuICAgICAgICA8L1Byb2plY3RMZWZ0PlxuXG4gICAgICAgIDxQcm9qZWN0UmlnaHQ+XG4gICAgICAgICAgPFByb2plY3RQaWN0dXJlIHNyYz1cIi9zdGF0aWMva2F1bHF1YXBwZS5qcGdcIiAvPlxuXG4gICAgICAgIDwvUHJvamVjdFJpZ2h0PlxuXG4gICAgICA8L1Byb2plY3RXcmFwPlxuXG4gICAgICA8UHJvamVjdFdyYXA+XG5cbiAgICAgICAgPFByb2plY3RMZWZ0PlxuXG4gICAgICAgICAgPFByb2plY3RUaXRsZT5cbiAgICAgICAgICAgIDxQcm9qZWN0VGl0bGVMaW5rXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2xpdC1icm9vay0xMDgwOS5oZXJva3VhcHAuY29tL1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFRyYWRpbmcgQm9vayBTdG9yZVxuICAgICAgICAgICAgPC9Qcm9qZWN0VGl0bGVMaW5rPlxuICAgICAgICAgIDwvUHJvamVjdFRpdGxlPlxuICAgICAgICAgIDxQcm9qZWN0RGVzYz5cbiAgICAgICAgICAgIFlvdSBjYW4gU2lnbiB1cCBhcyBhIFVzZXIgYW5kIHRyYWRlIHdpdGggb3RoZXIgcGVvcGxlIGJvb2tzLiBZb3UgY2FuIGFkZCB5b3VyIGJvb2tzIHdpdGggdGhlIEdvb2dsZSBCb29rcyBBUEkuIFlvdSBjYW4gYWNjZXB0IGFuZCBkZWNsaW5lIFJlcXVlc3RzLlxuICAgICAgICAgIDwvUHJvamVjdERlc2M+XG5cbiAgICAgICAgICA8UHJvamVjdFN0YWNrPlxuICAgICAgICAgICAgPFByb2plY3RTdGFja05hbWU+UmVhY3Q8L1Byb2plY3RTdGFja05hbWU+XG4gICAgICAgICAgICA8UHJvamVjdFN0YWNrTmFtZT5SZWR1eDwvUHJvamVjdFN0YWNrTmFtZT5cbiAgICAgICAgICAgIDxQcm9qZWN0U3RhY2tOYW1lPk5vZGU8L1Byb2plY3RTdGFja05hbWU+XG4gICAgICAgICAgICA8UHJvamVjdFN0YWNrTmFtZT5Nb25nb0RCPC9Qcm9qZWN0U3RhY2tOYW1lPlxuICAgICAgICAgIDwvUHJvamVjdFN0YWNrPlxuICAgICAgICA8L1Byb2plY3RMZWZ0PlxuXG4gICAgICAgIDxQcm9qZWN0UmlnaHQ+XG4gICAgICAgICAgPFByb2plY3RQaWN0dXJlIHNyYz1cIi9zdGF0aWMvYm9vay10cmFkaW5nLmpwZ1wiIC8+XG4gICAgICAgICAgPFByb2plY3RHaXRodWI+XG4gICAgICAgICAgICA8R2l0aHViSW1hZ2Ugc3JjPVwic3RhdGljL2dpdGh1Yi5zdmdcIiAvPlxuICAgICAgICAgICAgPEdpdGh1YkRlc2M+XG4gICAgICAgICAgICAgIDxHaXRodWJMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc2ltbWNvL3RyYWRpbmctYm9vay1zdG9yZS90cmVlL21hc3Rlci9zZXJ2ZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5CYWNrZW5kPC9HaXRodWJMaW5rPlxuICAgICAgICAgICAgICA8R2l0aHViTGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3NpbW1jby90cmFkaW5nLWJvb2stc3RvcmUvdHJlZS9tYXN0ZXIvcmVhY3QtdWlcIiB0YXJnZXQ9XCJfYmxhbmtcIj5Gcm9udGVuZDwvR2l0aHViTGluaz5cbiAgICAgICAgICAgIDwvR2l0aHViRGVzYz5cbiAgICAgICAgICA8L1Byb2plY3RHaXRodWI+XG4gICAgICAgIDwvUHJvamVjdFJpZ2h0PlxuXG4gICAgICA8L1Byb2plY3RXcmFwPlxuXG4gICAgICA8UHJvamVjdFdyYXA+XG5cbiAgICAgICAgPFByb2plY3RMZWZ0PlxuXG4gICAgICAgICAgPFByb2plY3RUaXRsZT5cbiAgICAgICAgICAgIDxQcm9qZWN0VGl0bGVMaW5rXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3NpbW1jby5naXRodWIuaW8vcGludGVyZXN0LWNsb25lL1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFBpbnRlcmVzdCBDbG9uZVxuICAgICAgICAgICAgPC9Qcm9qZWN0VGl0bGVMaW5rPlxuICAgICAgICAgIDwvUHJvamVjdFRpdGxlPlxuICAgICAgICAgIDxQcm9qZWN0RGVzYz5cbiAgICAgICAgICAgIFlvdSBjYW4gU2lnbiB1cCBhcyBhIFVzZXIgYW5kIHNoYXJlLCBsaWtlIGFuZCBkZWxldGUgcGljdHVyZXMuIEl0IGlzIHBvc3NpYmxlIHRvIHdhdGNoIHlvdXIgb3duIGFuZCBvdGhlcnMgUGludGVyZXN0IHdhbGwuXG4gICAgICAgICAgPC9Qcm9qZWN0RGVzYz5cblxuICAgICAgICAgIDxQcm9qZWN0U3RhY2s+XG4gICAgICAgICAgICA8UHJvamVjdFN0YWNrTmFtZT5SZWFjdDwvUHJvamVjdFN0YWNrTmFtZT5cbiAgICAgICAgICAgIDxQcm9qZWN0U3RhY2tOYW1lPlJlZHV4PC9Qcm9qZWN0U3RhY2tOYW1lPlxuICAgICAgICAgICAgPFByb2plY3RTdGFja05hbWU+Tm9kZTwvUHJvamVjdFN0YWNrTmFtZT5cbiAgICAgICAgICAgIDxQcm9qZWN0U3RhY2tOYW1lPk1vbmdvREI8L1Byb2plY3RTdGFja05hbWU+XG4gICAgICAgICAgPC9Qcm9qZWN0U3RhY2s+XG4gICAgICAgIDwvUHJvamVjdExlZnQ+XG5cbiAgICAgICAgPFByb2plY3RSaWdodD5cbiAgICAgICAgICA8UHJvamVjdFBpY3R1cmUgc3JjPVwiL3N0YXRpYy9waW50ZXJlc3QuanBnXCIgLz5cbiAgICAgICAgICA8UHJvamVjdEdpdGh1Yj5cbiAgICAgICAgICAgIDxHaXRodWJJbWFnZSBzcmM9XCJzdGF0aWMvZ2l0aHViLnN2Z1wiIC8+XG4gICAgICAgICAgICA8R2l0aHViRGVzYz5cbiAgICAgICAgICAgICAgPEdpdGh1YkxpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zaW1tY28vYXBpLXBpbnRlcmVzdC1jbG9uZVwiIHRhcmdldD1cIl9ibGFua1wiPkJhY2tlbmQ8L0dpdGh1Ykxpbms+XG4gICAgICAgICAgICAgIDxHaXRodWJMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc2ltbWNvL3BpbnRlcmVzdC1jbG9uZVwiIHRhcmdldD1cIl9ibGFua1wiPkZyb250ZW5kPC9HaXRodWJMaW5rPlxuICAgICAgICAgICAgPC9HaXRodWJEZXNjPlxuICAgICAgICAgIDwvUHJvamVjdEdpdGh1Yj5cbiAgICAgICAgPC9Qcm9qZWN0UmlnaHQ+XG5cbiAgICAgIDwvUHJvamVjdFdyYXA+XG5cbiAgICAgIDxQcm9qZWN0V3JhcD5cblxuICAgICAgICA8UHJvamVjdExlZnQ+XG5cbiAgICAgICAgICA8UHJvamVjdFRpdGxlPlxuICAgICAgICAgICAgPFByb2plY3RUaXRsZUxpbmtcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vc2ltbWNvLmdpdGh1Yi5pby9uaWdodGxpZmUvXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTmlnaHRsaWZlIENvb3JkaW5hdGlvblxuICAgICAgICAgICAgPC9Qcm9qZWN0VGl0bGVMaW5rPlxuICAgICAgICAgIDwvUHJvamVjdFRpdGxlPlxuICAgICAgICAgIDxQcm9qZWN0RGVzYz5cbiAgICAgICAgICAgIFlvdSBjYW4gc2lnbiB1cCwgc2VhcmNoIEJhcnMgYnkgY2l0eSBhbmQgaW5kaWNhdGUgWW91IGFyZSBnb2luZyB0aGVyZSB0b25pZ2h0LlxuICAgICAgICAgIDwvUHJvamVjdERlc2M+XG5cbiAgICAgICAgICA8UHJvamVjdFN0YWNrPlxuICAgICAgICAgICAgPFByb2plY3RTdGFja05hbWU+UmVhY3Q8L1Byb2plY3RTdGFja05hbWU+XG4gICAgICAgICAgICA8UHJvamVjdFN0YWNrTmFtZT5Ob2RlPC9Qcm9qZWN0U3RhY2tOYW1lPlxuICAgICAgICAgICAgPFByb2plY3RTdGFja05hbWU+VUk8L1Byb2plY3RTdGFja05hbWU+XG4gICAgICAgICAgPC9Qcm9qZWN0U3RhY2s+XG4gICAgICAgIDwvUHJvamVjdExlZnQ+XG5cbiAgICAgICAgPFByb2plY3RSaWdodD5cbiAgICAgICAgICA8UHJvamVjdFBpY3R1cmUgc3JjPVwiL3N0YXRpYy9uaWdodGxpZmUuanBnXCIgLz5cbiAgICAgICAgICA8UHJvamVjdEdpdGh1Yj5cbiAgICAgICAgICAgIDxHaXRodWJJbWFnZSBzcmM9XCJzdGF0aWMvZ2l0aHViLnN2Z1wiIC8+XG4gICAgICAgICAgICA8R2l0aHViRGVzYz5cbiAgICAgICAgICAgICAgPEdpdGh1YkxpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zaW1tY28vYXBpLW5pZ2h0bGlmZVwiIHRhcmdldD1cIl9ibGFua1wiPkJhY2tlbmQ8L0dpdGh1Ykxpbms+XG4gICAgICAgICAgICAgIDxHaXRodWJMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc2ltbWNvL3BpbnRlcmVzdC1jbG9uZVwiIHRhcmdldD1cIl9ibGFua1wiPkZyb250ZW5kPC9HaXRodWJMaW5rPlxuICAgICAgICAgICAgPC9HaXRodWJEZXNjPlxuICAgICAgICAgIDwvUHJvamVjdEdpdGh1Yj5cbiAgICAgICAgPC9Qcm9qZWN0UmlnaHQ+XG5cbiAgICAgIDwvUHJvamVjdFdyYXA+XG5cbiAgICAgIDxQcm9qZWN0V3JhcD5cblxuICAgICAgICA8UHJvamVjdExlZnQ+XG5cbiAgICAgICAgICA8UHJvamVjdFRpdGxlPlxuICAgICAgICAgICAgPFByb2plY3RUaXRsZUxpbmtcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vc2ltbWNvLXZvdGluZy1hcHAuaGVyb2t1YXBwLmNvbS9cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBWb3RpbmcgQXBwXG4gICAgICAgICAgICA8L1Byb2plY3RUaXRsZUxpbms+XG4gICAgICAgICAgPC9Qcm9qZWN0VGl0bGU+XG4gICAgICAgICAgPFByb2plY3REZXNjPlxuICAgICAgICAgICAgWW91IGNhbiBzaWduIHVwLCBjcmVhdGUgc29tZSBwb2xscywgdm90ZSBmb3Igb3RoZXIgcG9sbHMuIEFuZCB5b3UgY2FuIHNlZSB0aGUgcmVzdWx0IGFzIGEgY2hhcnQuXG4gICAgICAgICAgPC9Qcm9qZWN0RGVzYz5cblxuICAgICAgICAgIDxQcm9qZWN0U3RhY2s+XG4gICAgICAgICAgICA8UHJvamVjdFN0YWNrTmFtZT5IVE1MPC9Qcm9qZWN0U3RhY2tOYW1lPlxuICAgICAgICAgICAgPFByb2plY3RTdGFja05hbWU+Q1NTPC9Qcm9qZWN0U3RhY2tOYW1lPlxuICAgICAgICAgICAgPFByb2plY3RTdGFja05hbWU+SlM8L1Byb2plY3RTdGFja05hbWU+XG4gICAgICAgICAgICA8UHJvamVjdFN0YWNrTmFtZT5Ob2RlPC9Qcm9qZWN0U3RhY2tOYW1lPlxuICAgICAgICAgICAgPFByb2plY3RTdGFja05hbWU+TW9uZ29EQjwvUHJvamVjdFN0YWNrTmFtZT5cbiAgICAgICAgICA8L1Byb2plY3RTdGFjaz5cbiAgICAgICAgPC9Qcm9qZWN0TGVmdD5cblxuICAgICAgICA8UHJvamVjdFJpZ2h0PlxuICAgICAgICAgIDxQcm9qZWN0UGljdHVyZSBzcmM9XCIvc3RhdGljL3ZvdGUuanBnXCIgLz5cbiAgICAgICAgICA8UHJvamVjdEdpdGh1Yj5cbiAgICAgICAgICAgIDxHaXRodWJJbWFnZSBzcmM9XCJzdGF0aWMvZ2l0aHViLnN2Z1wiIC8+XG4gICAgICAgICAgICA8R2l0aHViRGVzYz5cbiAgICAgICAgICAgICAgPEdpdGh1YkxpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zaW1tY28vdm90aW5nX2FwcFwiIHRhcmdldD1cIl9ibGFua1wiPlJlcG9zaXRvcnk8L0dpdGh1Ykxpbms+XG4gICAgICAgICAgICA8L0dpdGh1YkRlc2M+XG4gICAgICAgICAgPC9Qcm9qZWN0R2l0aHViPlxuICAgICAgICA8L1Byb2plY3RSaWdodD5cblxuICAgICAgPC9Qcm9qZWN0V3JhcD5cblxuICAgICAgPFByb2plY3RXcmFwPlxuXG4gICAgICAgIDxQcm9qZWN0TGVmdD5cblxuICAgICAgICAgIDxQcm9qZWN0VGl0bGU+XG4gICAgICAgICAgICA8UHJvamVjdFRpdGxlTGlua1xuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jaGF0LXJlZHV4LmZpcmViYXNlYXBwLmNvbS9cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBGaXJlYmFzZSBDaGF0IEFwcFxuICAgICAgICAgICAgPC9Qcm9qZWN0VGl0bGVMaW5rPlxuICAgICAgICAgIDwvUHJvamVjdFRpdGxlPlxuICAgICAgICAgIDxQcm9qZWN0RGVzYz5cbiAgICAgICAgICAgIFlvdSBjYW4gU2lnbiB1cCB3aXRoIGEgR29vZ2xlIEFjY291bnQgYW5kIGNoYXQgd2l0aCBvdGhlciBwZW9wbGUgaW4gcmVhbHRpbWUuIFRoZSBCYWNrZW5kIGlzIGJ1aWxkIHdpdGggRmlyZWJhc2UuXG4gICAgICAgICAgPC9Qcm9qZWN0RGVzYz5cblxuICAgICAgICAgIDxQcm9qZWN0U3RhY2s+XG4gICAgICAgICAgICA8UHJvamVjdFN0YWNrTmFtZT5SZWFjdDwvUHJvamVjdFN0YWNrTmFtZT5cbiAgICAgICAgICAgIDxQcm9qZWN0U3RhY2tOYW1lPlJlZHV4PC9Qcm9qZWN0U3RhY2tOYW1lPlxuICAgICAgICAgICAgPFByb2plY3RTdGFja05hbWU+RmlyZWJhc2U8L1Byb2plY3RTdGFja05hbWU+XG4gICAgICAgICAgPC9Qcm9qZWN0U3RhY2s+XG4gICAgICAgIDwvUHJvamVjdExlZnQ+XG5cbiAgICAgICAgPFByb2plY3RSaWdodD5cbiAgICAgICAgICA8UHJvamVjdFBpY3R1cmUgc3JjPVwiL3N0YXRpYy9maXJlYmFzZS1jaGF0LmpwZ1wiIC8+XG4gICAgICAgICAgPFByb2plY3RHaXRodWI+XG4gICAgICAgICAgICA8R2l0aHViSW1hZ2Ugc3JjPVwic3RhdGljL2dpdGh1Yi5zdmdcIiAvPlxuICAgICAgICAgICAgPEdpdGh1YkRlc2M+XG4gICAgICAgICAgICAgIDxHaXRodWJMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc2ltbWNvL2ZpcmViYXNlLWNoYXRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5SZXBvc2l0b3J5PC9HaXRodWJMaW5rPlxuICAgICAgICAgICAgPC9HaXRodWJEZXNjPlxuICAgICAgICAgIDwvUHJvamVjdEdpdGh1Yj5cbiAgICAgICAgPC9Qcm9qZWN0UmlnaHQ+XG5cbiAgICAgIDwvUHJvamVjdFdyYXA+XG5cbiAgICAgIDxQcm9qZWN0V3JhcD5cblxuICAgICAgICA8UHJvamVjdExlZnQ+XG5cbiAgICAgICAgICA8UHJvamVjdFRpdGxlPlxuICAgICAgICAgICAgPFByb2plY3RUaXRsZUxpbmtcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vc2ltbWNvLmdpdGh1Yi5pby9sb2NhbFdlYXRoZXIvXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9jYWwgV2VhdGhlclxuICAgICAgICAgICAgPC9Qcm9qZWN0VGl0bGVMaW5rPlxuICAgICAgICAgIDwvUHJvamVjdFRpdGxlPlxuICAgICAgICAgIDxQcm9qZWN0RGVzYz5cbiAgICAgICAgICAgIFRoaXMgUGFnZSBzaG93cyB0aGUgd2VhdGhlciBjb25kaXRpb25zIGF0IHlvdXIgY3VycmVudCBwb3NpdGlvbiBmb3IgdGhlIG5leHQgMyBkYXlzLlxuICAgICAgICAgIDwvUHJvamVjdERlc2M+XG5cbiAgICAgICAgICA8UHJvamVjdFN0YWNrPlxuICAgICAgICAgICAgPFByb2plY3RTdGFja05hbWU+SFRNTDwvUHJvamVjdFN0YWNrTmFtZT5cbiAgICAgICAgICAgIDxQcm9qZWN0U3RhY2tOYW1lPkNTUzwvUHJvamVjdFN0YWNrTmFtZT5cbiAgICAgICAgICAgIDxQcm9qZWN0U3RhY2tOYW1lPkpTPC9Qcm9qZWN0U3RhY2tOYW1lPlxuICAgICAgICAgICAgPFByb2plY3RTdGFja05hbWU+Qm9vdHN0cmFwPC9Qcm9qZWN0U3RhY2tOYW1lPlxuICAgICAgICAgIDwvUHJvamVjdFN0YWNrPlxuICAgICAgICA8L1Byb2plY3RMZWZ0PlxuXG4gICAgICAgIDxQcm9qZWN0UmlnaHQ+XG4gICAgICAgICAgPFByb2plY3RQaWN0dXJlIHNyYz1cIi9zdGF0aWMvd2VhdGhlci5qcGdcIiAvPlxuICAgICAgICAgIDxQcm9qZWN0R2l0aHViPlxuICAgICAgICAgICAgPEdpdGh1YkltYWdlIHNyYz1cInN0YXRpYy9naXRodWIuc3ZnXCIgLz5cbiAgICAgICAgICAgIDxHaXRodWJEZXNjPlxuICAgICAgICAgICAgICA8R2l0aHViTGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3NpbW1jby9sb2NhbFdlYXRoZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5SZXBvc2l0b3J5PC9HaXRodWJMaW5rPlxuICAgICAgICAgICAgPC9HaXRodWJEZXNjPlxuICAgICAgICAgIDwvUHJvamVjdEdpdGh1Yj5cbiAgICAgICAgPC9Qcm9qZWN0UmlnaHQ+XG5cbiAgICAgIDwvUHJvamVjdFdyYXA+XG5cbiAgICAgIDxQcm9qZWN0V3JhcD5cblxuICAgICAgICA8UHJvamVjdExlZnQ+XG5cbiAgICAgICAgICA8UHJvamVjdFRpdGxlPlxuICAgICAgICAgICAgPFByb2plY3RUaXRsZUxpbmsgaHJlZj1cImh0dHBzOi8vY2luZWZsaXgubm93LnNoXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIENpbmVmbGl4XG4gICAgICAgICAgICA8L1Byb2plY3RUaXRsZUxpbms+XG4gICAgICAgICAgPC9Qcm9qZWN0VGl0bGU+XG4gICAgICAgICAgPFByb2plY3REZXNjPlxuICAgICAgICAgICAgQSBOZXRmbGl4IGNsb25lIGZvciBtb3ZpZXMuIFlvdSBjYW4gc2VlIG1vdmllcyBpbiB0aGVhdHJlLCBiZXN0IGxhc3QgeWVhciwgaGlnaGVzdCByYXRlZCwgbW9zdCBwb3B1bGFyIGFuZCBtb3N0IHBvcHVsYXIgbGFzdCB5ZWFyLiBCdWlsZCB3aXRoIDxNb3ZpZURCTGluayBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXJzLnRoZW1vdmllZGIub3JnLzMvZ2V0dGluZy1zdGFydGVkXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VEhFTU9WSUVEQiBBUEk8L01vdmllREJMaW5rPi5cbiAgICAgICAgICA8L1Byb2plY3REZXNjPlxuXG4gICAgICAgICAgPFByb2plY3RTdGFjaz5cbiAgICAgICAgICAgIDxQcm9qZWN0U3RhY2tOYW1lPlJlYWN0PC9Qcm9qZWN0U3RhY2tOYW1lPlxuICAgICAgICAgICAgPFByb2plY3RTdGFja05hbWU+VUk8L1Byb2plY3RTdGFja05hbWU+XG4gICAgICAgICAgPC9Qcm9qZWN0U3RhY2s+XG4gICAgICAgIDwvUHJvamVjdExlZnQ+XG5cbiAgICAgICAgPFByb2plY3RSaWdodD5cbiAgICAgICAgICA8UHJvamVjdFBpY3R1cmUgc3JjPVwiL3N0YXRpYy9jaW5lZmxpeC5qcGdcIiAvPlxuICAgICAgICAgIDxQcm9qZWN0R2l0aHViPlxuICAgICAgICAgICAgPEdpdGh1YkltYWdlIHNyYz1cInN0YXRpYy9naXRodWIuc3ZnXCIgLz5cbiAgICAgICAgICAgIDxHaXRodWJEZXNjPlxuICAgICAgICAgICAgICA8R2l0aHViTGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3NpbW1jby9jaW5lZmxpeFwiIHRhcmdldD1cIl9ibGFua1wiPlJlcG9zaXRvcnk8L0dpdGh1Ykxpbms+XG4gICAgICAgICAgICA8L0dpdGh1YkRlc2M+XG4gICAgICAgICAgPC9Qcm9qZWN0R2l0aHViPlxuICAgICAgICA8L1Byb2plY3RSaWdodD5cblxuICAgICAgPC9Qcm9qZWN0V3JhcD5cblxuICAgICAgPFByb2plY3RXcmFwPlxuXG4gICAgICAgIDxQcm9qZWN0TGVmdD5cblxuICAgICAgICAgIDxQcm9qZWN0VGl0bGU+XG4gICAgICAgICAgICA8UHJvamVjdFRpdGxlTGluayBocmVmPVwiaHR0cHM6Ly9zaW1tY28uZ2l0aHViLmlvL3JlY2lwZS1ib29rXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIFJlY2lwZSBCb29rXG4gICAgICAgICAgICA8L1Byb2plY3RUaXRsZUxpbms+XG4gICAgICAgICAgPC9Qcm9qZWN0VGl0bGU+XG4gICAgICAgICAgPFByb2plY3REZXNjPlxuICAgICAgICAgICAgWW91IGNhbiBzYXZlIHlvdXIgcmVjaXBlcywgYWRkIGFuZCByZW1vdmUgaW5ncmVkaWVudHMuIEV2ZXJ0aGluZyBpcyBzYXZlZCBpbiBicm93c2VycyBsb2NhbFN0b3JhZ2UuXG4gICAgICAgICAgPC9Qcm9qZWN0RGVzYz5cblxuICAgICAgICAgIDxQcm9qZWN0U3RhY2s+XG4gICAgICAgICAgICA8UHJvamVjdFN0YWNrTmFtZT5SZWFjdDwvUHJvamVjdFN0YWNrTmFtZT5cbiAgICAgICAgICA8L1Byb2plY3RTdGFjaz5cbiAgICAgICAgPC9Qcm9qZWN0TGVmdD5cblxuICAgICAgICA8UHJvamVjdFJpZ2h0PlxuICAgICAgICAgIDxQcm9qZWN0UGljdHVyZSBzcmM9XCIvc3RhdGljL3JlY2lwZS1ib29rLmpwZ1wiIC8+XG4gICAgICAgICAgPFByb2plY3RHaXRodWI+XG4gICAgICAgICAgICA8R2l0aHViSW1hZ2Ugc3JjPVwic3RhdGljL2dpdGh1Yi5zdmdcIiAvPlxuICAgICAgICAgICAgPEdpdGh1YkRlc2M+XG4gICAgICAgICAgICAgIDxHaXRodWJMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc2ltbWNvL3JlY2lwZS1ib29rXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UmVwb3NpdG9yeTwvR2l0aHViTGluaz5cbiAgICAgICAgICAgIDwvR2l0aHViRGVzYz5cbiAgICAgICAgICA8L1Byb2plY3RHaXRodWI+XG4gICAgICAgIDwvUHJvamVjdFJpZ2h0PlxuXG4gICAgICA8L1Byb2plY3RXcmFwPlxuXG4gICAgICA8UHJvamVjdFdyYXA+XG5cbiAgICAgICAgPFByb2plY3RMZWZ0PlxuXG4gICAgICAgICAgPFByb2plY3RUaXRsZT5cbiAgICAgICAgICAgIDxQcm9qZWN0VGl0bGVMaW5rIGhyZWY9XCJodHRwczovL2JlYXV0eS1pbWFnZS1zZWFyY2guaGVyb2t1YXBwLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgSW1hZ2UgU2VhcmNoIEFic3RyYWN0aW9uXG4gICAgICAgICAgICA8L1Byb2plY3RUaXRsZUxpbms+XG4gICAgICAgICAgPC9Qcm9qZWN0VGl0bGU+XG4gICAgICAgICAgPFByb2plY3REZXNjPlxuICAgICAgICAgICAgQSBtaWNyb3NlcnZpY2Ugd2hvIGJ1aWxkcyBhIEFQSSBmb3IgYSBpbWFnZSBzZWFyY2ggd2l0aCBwaWN0dXJlLCBkZXNjcmlwdGlvbiwgdGh1bWJuYWlsIGFuZCBjb250ZXh0LlxuICAgICAgICAgIDwvUHJvamVjdERlc2M+XG5cbiAgICAgICAgICA8UHJvamVjdFN0YWNrPlxuICAgICAgICAgICAgPFByb2plY3RTdGFja05hbWU+UmVhY3Q8L1Byb2plY3RTdGFja05hbWU+XG4gICAgICAgICAgICA8UHJvamVjdFN0YWNrTmFtZT5Ob2RlPC9Qcm9qZWN0U3RhY2tOYW1lPlxuICAgICAgICAgICAgPFByb2plY3RTdGFja05hbWU+VUk8L1Byb2plY3RTdGFja05hbWU+XG4gICAgICAgICAgPC9Qcm9qZWN0U3RhY2s+XG4gICAgICAgIDwvUHJvamVjdExlZnQ+XG5cbiAgICAgICAgPFByb2plY3RSaWdodD5cbiAgICAgICAgICA8UHJvamVjdFBpY3R1cmUgc3JjPVwiL3N0YXRpYy9pbWFnZS1zZWFyY2guanBnXCIgLz5cbiAgICAgICAgICA8UHJvamVjdEdpdGh1Yj5cbiAgICAgICAgICAgIDxHaXRodWJJbWFnZSBzcmM9XCJzdGF0aWMvZ2l0aHViLnN2Z1wiIC8+XG4gICAgICAgICAgICA8R2l0aHViRGVzYz5cbiAgICAgICAgICAgICAgPEdpdGh1YkxpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zaW1tY28vaW1hZ2Utc2VhcmNoLWFic3RyYWN0aW9uLWxheWVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UmVwb3NpdG9yeTwvR2l0aHViTGluaz5cbiAgICAgICAgICAgIDwvR2l0aHViRGVzYz5cbiAgICAgICAgICA8L1Byb2plY3RHaXRodWI+XG4gICAgICAgIDwvUHJvamVjdFJpZ2h0PlxuXG4gICAgICA8L1Byb2plY3RXcmFwPlxuXG4gICAgPC9Qcm9qZWN0c1dyYXBwZXI+XG5cbiAgPC9FbGVtZW50PlxuKTtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcblxuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXG4gICAgZm9udC1zaXplOiAzLjI1cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBMb3JhLFRpbWVzIE5ldyBSb21hbixzZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBTdWJ0aXRsZSA9IHN0eWxlZC5oM2BcbiAgICBmb250LXNpemU6IDEuMzc1cmVtO1xuICAgIG1hcmdpbjoxcmVtIDAgMnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbmA7XG5cbmNvbnN0IFByb2plY3RzV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5jb25zdCBQcm9qZWN0V3JhcCA9IHN0eWxlZC5kaXZgXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgICBwYWRkaW5nOiAycmVtIDEuODc1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuYDtcblxuY29uc3QgUHJvamVjdExlZnQgPSBzdHlsZWQuZGl2YFxuICAgIGZsZXg6IDQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwIDAuM3JlbTtcblxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDg4MHB4KSB7XG4gICAgICBtaW4td2lkdGg6IDcwJTtcbiAgICB9XG5gO1xuXG5jb25zdCBQcm9qZWN0UmlnaHQgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXg6IDI7XG4gICAgcGFkZGluZzogMCAwLjJyZW07XG5gO1xuXG5jb25zdCBQcm9qZWN0UGljdHVyZSA9IHN0eWxlZC5pbWdgXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTYwcHg7XG4gICAgZmxleC1iYXNpczogYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzdmN2Y3ZjtcbiAgICB9XG5gO1xuXG5jb25zdCBQcm9qZWN0R2l0aHViID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBHaXRodWJJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIG1heC1oZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDAuN3JlbTtcbmA7XG5cbmNvbnN0IEdpdGh1YkRlc2MgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuY29uc3QgR2l0aHViTGluayA9IHN0eWxlZC5hYFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICY6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuYFxuXG5jb25zdCBQcm9qZWN0VGl0bGUgPSBzdHlsZWQuaDRgXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBMb3JhLFRpbWVzIE5ldyBSb21hbixzZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbjogMDtcblxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDg4MHB4KSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5gO1xuXG5jb25zdCBQcm9qZWN0VGl0bGVMaW5rID0gc3R5bGVkLmFgXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZy1ib3R0b206IDAuMXJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6ICM3ZjdmN2Y7XG4gICAgfVxuYDtcblxuY29uc3QgUHJvamVjdERlc2MgPSBzdHlsZWQucGBcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIEBtZWRpYShtYXgtd2lkdGg6IDg4MHB4KSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5gO1xuXG5jb25zdCBQcm9qZWN0U3RhY2sgPSBzdHlsZWQuZGl2YFxuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcblxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDg4MHB4KSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbmA7XG5cbmNvbnN0IFByb2plY3RTdGFja05hbWUgPSBzdHlsZWQucGBcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIG1hcmdpbjogMCAwLjVyZW0gMC41cmVtIDA7XG5gO1xuXG5jb25zdCBNb3ZpZURCTGluayA9IHN0eWxlZC5hYFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qcm9qZWN0cy5qcyJdLCJzb3VyY2VSb290IjoiIn0=