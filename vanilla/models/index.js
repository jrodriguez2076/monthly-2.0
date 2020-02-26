"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.connectDb = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _income = _interopRequireDefault(require("./income"));

var _expense = _interopRequireDefault(require("./expense"));

var _budget = _interopRequireDefault(require("./budget"));

var _user = _interopRequireDefault(require("./user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var connectDb = function connectDb() {
  console.log("trying to connect to" + process.env.DATABASE_URL);
  return _mongoose["default"].connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

exports.connectDb = connectDb;
var models = {
  Income: _income["default"],
  Expense: _expense["default"],
  Budget: _budget["default"],
  User: _user["default"]
};
var _default = models;
exports["default"] = _default;