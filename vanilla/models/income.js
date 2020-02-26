"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var incomeSchema = new _mongoose["default"].Schema({
  user: String,
  amount: Number,
  description: String,
  monthly: Boolean
});

var Income = _mongoose["default"].model('Income', incomeSchema);

var _default = Income;
exports["default"] = _default;