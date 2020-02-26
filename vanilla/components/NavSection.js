"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("bootstrap/dist/css/bootstrap.min.css");

var _reactRouterDom = require("react-router-dom");

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function NavSection(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var toggleNav = function toggleNav() {
    return setIsOpen(!isOpen);
  };

  return _react["default"].createElement("div", null, _react["default"].createElement(_reactstrap.Navbar, {
    className: "bg-dark",
    dark: true,
    expand: "lg"
  }, _react["default"].createElement(_reactstrap.NavbarBrand, {
    className: "text-white",
    href: "/"
  }, _react["default"].createElement("img", {
    src: "/img/icon/logo.png",
    style: {
      width: "3rem",
      height: "3rem"
    }
  })), _react["default"].createElement(_reactstrap.NavbarToggler, {
    onClick: toggleNav
  }), _react["default"].createElement(_reactstrap.Collapse, {
    isOpen: isOpen,
    navbar: true
  }, _react["default"].createElement(_reactstrap.Nav, {
    className: "mr-auto"
  }, _react["default"].createElement(_reactstrap.NavItem, null, _react["default"].createElement(_reactRouterDom.Link, {
    className: "text-light nav-link",
    to: "/expenses"
  }, " Expenses")), _react["default"].createElement(_reactstrap.NavItem, null, _react["default"].createElement(_reactRouterDom.Link, {
    className: "text-light nav-link",
    to: "/incomes"
  }, " Incomes")), _react["default"].createElement(_reactstrap.NavItem, null, _react["default"].createElement(_reactRouterDom.Link, {
    className: "text-light nav-link",
    to: "/budgets"
  }, " Budgets")), _react["default"].createElement(_reactstrap.NavItem, null, _react["default"].createElement(_reactRouterDom.Link, {
    className: "text-light nav-link",
    to: "/users"
  }, " Users"))))));
}

var _default = NavSection;
exports["default"] = _default;