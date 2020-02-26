"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _IncomeItem = _interopRequireDefault(require("./IncomeItem"));

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

var Incomes = function Incomes(props) {
  (0, _react.useEffect)(function () {
    return getIncomes();
  }, []);

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      Incomes = _useState2[0],
      setIncomes = _useState2[1];

  var getIncomes = function getIncomes() {
    var d = new Date();
    fetch("/api/incomes").then(function (data) {
      return data.json();
    }).then(function (res) {
      setIncomes(_toConsumableArray(res));
    });
  };

  return _react["default"].createElement("div", null, _react["default"].createElement(_reactstrap.Jumbotron, {
    fluid: true,
    className: "row",
    style: {
      backgroundColor: "#E3F6FF"
    }
  }, _react["default"].createElement(_reactstrap.Container, {
    fluid: true,
    className: "col-lg-4 offset-lg-4 text-center"
  }, _react["default"].createElement("h1", {
    className: "display-3"
  }, "Incomes"), _react["default"].createElement("hr", null))), _react["default"].createElement("div", {
    className: "container"
  }, _react["default"].createElement(_IncomeItem["default"], {
    incomes: Incomes,
    updateIncomes: getIncomes
  })), _react["default"].createElement("hr", {
    style: {
      marginTop: "3rem",
      maxWidth: "50%"
    }
  }), _react["default"].createElement("div", {
    className: "d-flex justify-content-center"
  }, _react["default"].createElement(_ActionButton["default"], {
    Feature: "income",
    updateIncomes: getIncomes
  })));
};

var _default = Incomes;
exports["default"] = _default;