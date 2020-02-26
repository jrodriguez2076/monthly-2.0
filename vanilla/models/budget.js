"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var budgetSchema = new _mongoose["default"].Schema({
  name: String,
  amount: Number,
  description: String,
  icon: String,
  creationDate: Date,
  month: Number,
  monthly: Boolean
});

var Budget = _mongoose["default"].model('Budget', budgetSchema);

var _default = Budget;
exports["default"] = _default;