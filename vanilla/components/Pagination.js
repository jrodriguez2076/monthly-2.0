"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PaginationSection = function PaginationSection(props) {
  return _react["default"].createElement(_reactstrap.Pagination, {
    size: "lg",
    "aria-label": "Page navigation example"
  }, _react["default"].createElement(_reactstrap.PaginationItem, null, _react["default"].createElement(_reactstrap.PaginationLink, {
    first: true,
    href: "#"
  })), _react["default"].createElement(_reactstrap.PaginationItem, null, _react["default"].createElement(_reactstrap.PaginationLink, {
    previous: true,
    href: "#"
  })), _react["default"].createElement(_reactstrap.PaginationItem, null, _react["default"].createElement(_reactstrap.PaginationLink, {
    href: "#"
  }, "1")), _react["default"].createElement(_reactstrap.PaginationItem, null, _react["default"].createElement(_reactstrap.PaginationLink, {
    href: "#"
  }, "2")), _react["default"].createElement(_reactstrap.PaginationItem, null, _react["default"].createElement(_reactstrap.PaginationLink, {
    href: "#"
  }, "3")), _react["default"].createElement(_reactstrap.PaginationItem, null, _react["default"].createElement(_reactstrap.PaginationLink, {
    next: true,
    href: "#"
  })), _react["default"].createElement(_reactstrap.PaginationItem, null, _react["default"].createElement(_reactstrap.PaginationLink, {
    last: true,
    href: "#"
  })));
};

var _default = PaginationSection;
exports["default"] = _default;