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