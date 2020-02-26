"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("bootstrap/dist/css/bootstrap.min.css");

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconItem = function IconItem(props) {
  var iconMapper = props.icons.map(function (item, i) {
    return _react["default"].createElement("span", {
      key: i
    }, _react["default"].createElement(_reactstrap.Label, {
      htmlFor: "iconSelect",
      style: {
        "margin": ".8rem"
      }
    }, _react["default"].createElement("img", {
      src: "/img/icon/".concat(props.section, "/").concat(item),
      style: {
        maxWidth: "3rem"
      }
    })), _react["default"].createElement(_reactstrap.Input, {
      type: "radio",
      name: "iconSelect",
      id: "iconSelect",
      style: props.radioStyle,
      onChange: props.handleChangeIcon,
      value: i
    }));
  });
  return _react["default"].createElement("div", null, iconMapper);
};

var _default = IconItem;
exports["default"] = _default;