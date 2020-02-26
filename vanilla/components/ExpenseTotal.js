"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("bootstrap/dist/css/bootstrap.min.css");

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ExpenseTotal = function ExpenseTotal(props) {
  return (// <div className="row">
    _react["default"].createElement(_reactstrap.Jumbotron, {
      fluid: true,
      className: "row"
    }, _react["default"].createElement(_reactstrap.Container, {
      fluid: true,
      className: "col-lg-4 offset-lg-4 text-center"
    }, _react["default"].createElement("h1", {
      className: "display-3"
    }, " ", props.currency, " ", props.totalMonthlyAmount, " "), _react["default"].createElement("p", null, "Have been spent this month"), _react["default"].createElement("hr", null))) // </div>

  );
};

var _default = ExpenseTotal;
exports["default"] = _default;