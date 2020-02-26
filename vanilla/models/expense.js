"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var expenseSchema = new _mongoose["default"].Schema({
  user: String,
  date: Date,
  location: String,
  amount: Number,
  description: String,
  budget: String,
  monthly: Boolean
});

var Expense = _mongoose["default"].model('Expense', expenseSchema);

var _default = Expense;
exports["default"] = _default;