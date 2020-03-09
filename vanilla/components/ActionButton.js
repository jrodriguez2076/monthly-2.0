"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("bootstrap/dist/css/bootstrap.min.css");

var _reactRipples = _interopRequireDefault(require("react-ripples"));

var _GenericModal = _interopRequireDefault(require("./GenericModal"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ActionButton = function ActionButton(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  var toggle = function toggle() {
    return setModal(!modal);
  };

  var iconPath;
  iconPath = "/img/icon/".concat(props.Feature, ".png");
  return _react["default"].createElement(_reactstrap.Col, {
    lg: "4",
    className: "d-flex justify-content-center"
  }, _react["default"].createElement("div", {
    id: "quick-access",
    className: "text-center"
  }, _react["default"].createElement(_reactRipples["default"], {
    className: "text-center"
  }, _react["default"].createElement(_reactstrap.Card, {
    body: true,
    className: "text-center",
    style: {
      width: "20rem"
    },
    onClick: toggle
  }, _react["default"].createElement("div", null, _react["default"].createElement(_reactstrap.CardImg, {
    className: "mx-auto",
    top: true,
    width: "100%",
    src: iconPath,
    alt: "logo",
    style: {
      maxWidth: "6rem"
    }
  }), _react["default"].createElement(_reactstrap.CardText, null, "Add new ", props.Feature))))), _react["default"].createElement(_GenericModal["default"], _extends({}, props, {
    modal: modal,
    toggle: toggle,
    type: props.Feature,
    updateBudgets: props.updateBudgets,
    updateExpenses: props.updateExpenses,
    updateIncomes: props.updateIncomes,
    updateUsers: props.updateUsers,
    showToastMessage: props.showToastMessage,
    fromHome: props.fromHome,
    notifData: props.notifData
  })));
};

var _default = ActionButton;
exports["default"] = _default;