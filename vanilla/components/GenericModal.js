"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _AddExpense = _interopRequireDefault(require("./AddExpense"));

var _AddIncome = _interopRequireDefault(require("./AddIncome"));

var _AddBudget = _interopRequireDefault(require("./AddBudget"));

var _AddUser = _interopRequireDefault(require("./AddUser"));

var _Confirm = _interopRequireDefault(require("./Confirm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var GenericModal = function GenericModal(props) {
  var buttonLabel = props.buttonLabel,
      className = props.className;
  return _react["default"].createElement("div", null, _react["default"].createElement(_reactstrap.Modal, {
    isOpen: props.modal,
    toggle: props.toggle,
    className: className
  }, _react["default"].createElement(_reactstrap.ModalHeader, {
    toggle: props.toggle
  }, "Add new ", props.type), _react["default"].createElement(_reactstrap.ModalBody, null, props.type == 'expense' ? _react["default"].createElement(_AddExpense["default"], _extends({}, props, {
    update: props.updateExpenses,
    section: "expenses"
  })) : null, props.type == 'income' ? _react["default"].createElement(_AddIncome["default"], _extends({}, props, {
    update: props.updateIncomes
  })) : null, props.type == 'budget' ? _react["default"].createElement(_AddBudget["default"], _extends({}, props, {
    update: props.updateBudgets,
    section: "budgets"
  })) : null, props.type == 'user' ? _react["default"].createElement(_AddUser["default"], _extends({}, props, {
    update: props.updateUsers,
    section: "users"
  })) : null, props.type == 'confirm' ? _react["default"].createElement(_Confirm["default"], props) : null)));
};

var _default = GenericModal;
exports["default"] = _default;