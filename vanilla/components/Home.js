"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("bootstrap/dist/css/bootstrap.min.css");

var _reactstrap = require("reactstrap");

var _ActionButton = _interopRequireDefault(require("./ActionButton"));

var _ExpenseTotal = _interopRequireDefault(require("./ExpenseTotal"));

var _submodule = _interopRequireDefault(require("./submodules/submodule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Home = function Home(props) {
  (0, _react.useEffect)(function () {
    return changeTotalExpense();
  }, []);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      Amount = _useState2[0],
      setAmount = _useState2[1];

  var changeTotalExpense = function changeTotalExpense() {
    var d = new Date();
    fetch("/api/expenses?month=".concat(d.getMonth() + 1)).then(function (data) {
      return data.json();
    }).then(function (res) {
      var total = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = res[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var el = _step.value;
          total += el.amount;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      setAmount(total);
    });
  }; // const toCurrency = (number) => {
  //     return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
  // }


  return _react["default"].createElement("div", null, _react["default"].createElement("div", null, _react["default"].createElement(_ExpenseTotal["default"], {
    totalMonthlyAmount: (0, _submodule["default"])(Amount),
    currency: "ARS"
  })), _react["default"].createElement(_reactstrap.Container, null, _react["default"].createElement("div", null, _react["default"].createElement(_reactstrap.Row, {
    className: "d-flex justify-content-center"
  }, _react["default"].createElement(_ActionButton["default"], {
    Feature: "expense",
    fromHome: true,
    updateExpenses: changeTotalExpense
  }), _react["default"].createElement(_ActionButton["default"], {
    Feature: "income",
    fromHome: true
  }), _react["default"].createElement(_ActionButton["default"], {
    Feature: "budget",
    fromHome: true
  }))), _react["default"].createElement("div", {
    className: "row"
  })));
};

var _default = Home;
exports["default"] = _default;