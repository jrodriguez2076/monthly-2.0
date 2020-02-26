"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("bootstrap/dist/css/bootstrap.min.css");

var _reactstrap = require("reactstrap");

var _GenericModal = _interopRequireDefault(require("./GenericModal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ExpenseItem = function ExpenseItem(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      ConfirmModal = _useState2[0],
      setConfirmModal = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      SelectedItem = _useState4[0],
      setSelectedItem = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      ItemAction = _useState6[0],
      setItemAction = _useState6[1];

  var toggle = function toggle() {
    return setConfirmModal(!ConfirmModal);
  };

  var selectItem = function selectItem(item, action) {
    setSelectedItem(item);

    if (action == 0) {
      setItemAction("expense");
    } else if (action == 1) setItemAction("confirm");

    toggle();
  };

  var deleteItem = function deleteItem() {
    var data = {
      "expenseId": SelectedItem._id
    };
    var expenseDeleteRequest = new Request("/api/expenses", {
      method: 'DELETE',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    fetch(expenseDeleteRequest).then(function (data) {
      return data;
    }).then(function (res) {
      props.updateExpenses();
      toggle();
    });
  };

  var arrayMapper = props.expenses.map(function (item, i) {
    var formattedDate = new Date(item.date);
    formattedDate = formattedDate.getDate() + "/" + (formattedDate.getMonth() + 1) + "/" + formattedDate.getUTCFullYear();
    return _react["default"].createElement("tr", {
      key: i
    }, _react["default"].createElement("th", {
      scope: "row"
    }, i + 1), _react["default"].createElement("td", null, item.user), _react["default"].createElement("td", null, formattedDate), _react["default"].createElement("td", null, item.location), _react["default"].createElement("td", null, item.amount), _react["default"].createElement("td", null, item.description), _react["default"].createElement("td", null, item.budget), _react["default"].createElement("td", null, _react["default"].createElement(_reactstrap.Button, {
      color: "link",
      style: {
        padding: "0.2rem"
      },
      onClick: function onClick() {
        return selectItem(item, 0);
      }
    }, _react["default"].createElement("img", {
      src: "/img/icon/edit.png"
    })), _react["default"].createElement(_reactstrap.Button, {
      color: "link",
      style: {
        padding: "0.2rem"
      },
      onClick: function onClick() {
        return selectItem(item, 1);
      }
    }, _react["default"].createElement("img", {
      src: "/img/icon/close.png"
    })), _react["default"].createElement(_GenericModal["default"], {
      modal: ConfirmModal,
      toggle: toggle,
      type: ItemAction,
      edit: true,
      action: function action() {
        deleteItem();
      },
      item: SelectedItem,
      updateExpenses: props.updateExpenses,
      "delete": true
    })));
  });
  return _react["default"].createElement("tbody", null, arrayMapper);
};

var _default = ExpenseItem;
exports["default"] = _default;