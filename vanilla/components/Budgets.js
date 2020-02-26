"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _BudgetItem = _interopRequireDefault(require("./BudgetItem"));

var _ActionButton = _interopRequireDefault(require("./ActionButton"));

var _ToastMessage = _interopRequireDefault(require("./ToastMessage"));

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

var Budgets = function Budgets(props) {
  (0, _react.useEffect)(function () {
    getBudgets();
  }, []);

  var _useState = (0, _react.useState)([{
    "name": "",
    "amount": 0,
    "description": "",
    "icon": ""
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      Budgets = _useState2[0],
      setBudgets = _useState2[1];

  var _useState3 = (0, _react.useState)({
    "title": "",
    "message": "",
    "icon": ""
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      NotifData = _useState4[0],
      setNotifData = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      Expenses = _useState6[0],
      setExpenses = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showToast = _useState8[0],
      setShowToast = _useState8[1];

  var showToastMessage = function showToastMessage() {
    return regeneratorRuntime.async(function showToastMessage$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setShowToast(true);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  var getBudgets = function getBudgets() {
    var d = new Date();
    var month = d.getMonth() + 1;
    fetch("/api/budgets?month=".concat(month)).then(function (data) {
      return data.json();
    }).then(function (res) {
      setBudgets(_toConsumableArray(res));
      getLatestExpenses();
    });
  };

  var getLatestExpenses = function getLatestExpenses() {
    var d = new Date();
    fetch("/api/expenses?month=".concat(d.getMonth() + 1)).then(function (data) {
      return data.json();
    }).then(function (res) {
      setExpenses(res);
    });
  };

  return _react["default"].createElement("div", null, _react["default"].createElement(_ToastMessage["default"], {
    toastTitle: NotifData.title,
    show: showToast,
    hideToastMessage: function hideToastMessage() {
      return setShowToast(false);
    },
    ToastMessage: NotifData.message,
    toastIcon: NotifData.icon,
    info: NotifData
  }), _react["default"].createElement(_reactstrap.Jumbotron, {
    fluid: true,
    className: "row",
    style: {
      backgroundColor: "#CCCA8D"
    }
  }, _react["default"].createElement(_reactstrap.Container, {
    fluid: true,
    className: "col-lg-4 offset-lg-4 text-center"
  }, _react["default"].createElement("h1", {
    className: "display-3"
  }, "Budgets"), _react["default"].createElement("hr", null))), _react["default"].createElement("div", {
    className: "container"
  }, _react["default"].createElement(_BudgetItem["default"], {
    budgets: Budgets,
    expenses: Expenses,
    updateBudgets: getBudgets,
    showToastMessage: showToastMessage,
    notifData: setNotifData
  })), _react["default"].createElement("hr", {
    style: {
      marginTop: "3rem",
      maxWidth: "50%"
    }
  }), _react["default"].createElement("div", {
    className: "d-flex justify-content-center"
  }, _react["default"].createElement(_ActionButton["default"], {
    Feature: "budget",
    updateBudgets: getBudgets,
    showToastMessage: showToastMessage,
    notifData: setNotifData
  })));
};

var _default = Budgets;
exports["default"] = _default;