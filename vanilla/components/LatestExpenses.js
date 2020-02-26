"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("bootstrap/dist/css/bootstrap.min.css");

var _reactstrap = require("reactstrap");

var _Pagination = _interopRequireDefault(require("./Pagination"));

var _ExpenseItem = _interopRequireDefault(require("./ExpenseItem"));

var _ActionButton = _interopRequireDefault(require("./ActionButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var LatestExpenses = function LatestExpenses(props) {
  (0, _react.useEffect)(function () {
    return getLatestExpenses();
  }, []);

  var _useState = (0, _react.useState)([{
    "user": "",
    "date": "",
    "location": "",
    "amount": 0,
    "description": ""
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      Expenses = _useState2[0],
      setExpenses = _useState2[1];

  var getLatestExpenses = function getLatestExpenses() {
    var d = new Date();
    fetch("/api/expenses?month=".concat(d.getMonth() + 1)).then(function (data) {
      return data.json();
    }).then(function (res) {
      setExpenses(_toConsumableArray(res));
    });
  };

  return _react["default"].createElement("div", null, _react["default"].createElement(_reactstrap.Jumbotron, {
    fluid: true,
    className: "row",
    style: {
      backgroundColor: "#FFE7C9"
    }
  }, _react["default"].createElement(_reactstrap.Container, {
    fluid: true,
    className: "col-lg-4 offset-lg-4 text-center"
  }, _react["default"].createElement("h1", {
    className: "display-3"
  }, "Expenses"), _react["default"].createElement("hr", null))), _react["default"].createElement("div", {
    className: "container"
  }, _react["default"].createElement("div", {
    className: "row text-center"
  }, _react["default"].createElement(_reactstrap.Table, {
    responsive: true
  }, _react["default"].createElement("thead", null, _react["default"].createElement("tr", null, _react["default"].createElement("th", null, "#"), _react["default"].createElement("th", null, "User"), _react["default"].createElement("th", null, "Date"), _react["default"].createElement("th", null, "Location"), _react["default"].createElement("th", null, "Amount"), _react["default"].createElement("th", null, "Description"), _react["default"].createElement("th", null, "Budget"), _react["default"].createElement("th", null, "Action"))), _react["default"].createElement(_ExpenseItem["default"], {
    expenses: Expenses,
    updateExpenses: getLatestExpenses
  }))), _react["default"].createElement("div", {
    className: "row d-flex justify-content-center"
  }, _react["default"].createElement(_Pagination["default"], null))), _react["default"].createElement("hr", {
    style: {
      marginTop: "3rem",
      maxWidth: "50%"
    }
  }), _react["default"].createElement("div", {
    className: "d-flex justify-content-center"
  }, _react["default"].createElement(_ActionButton["default"], {
    Feature: "expense",
    updateExpenses: getLatestExpenses
  })));
};

var _default = LatestExpenses;
exports["default"] = _default;