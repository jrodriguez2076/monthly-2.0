"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("bootstrap/dist/css/bootstrap.min.css");

var _reactstrap = require("reactstrap");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AddIncome = function AddIncome(props) {
  (0, _react.useEffect)(function () {
    getUsers();
  }, []);

  var _ref = props.item ? (0, _react.useState)(props.item.amount) : (0, _react.useState)(0),
      _ref2 = _slicedToArray(_ref, 2),
      Amount = _ref2[0],
      setAmount = _ref2[1];

  var _ref3 = props.item ? (0, _react.useState)(props.item.user) : (0, _react.useState)(''),
      _ref4 = _slicedToArray(_ref3, 2),
      User = _ref4[0],
      setUser = _ref4[1];

  var _ref5 = props.item ? (0, _react.useState)(props.item.description) : (0, _react.useState)(''),
      _ref6 = _slicedToArray(_ref5, 2),
      Description = _ref6[0],
      setDescription = _ref6[1];

  var _ref7 = props.item ? (0, _react.useState)(props.item.monthly) : (0, _react.useState)(false),
      _ref8 = _slicedToArray(_ref7, 2),
      Monthly = _ref8[0],
      setMonthly = _ref8[1];

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      ExistingUsers = _useState2[0],
      setExistingUsers = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      Validation = _useState4[0],
      setValidation = _useState4[1];

  var getUsers = function getUsers() {
    fetch("/api/users").then(function (data) {
      return data.json();
    }).then(function (res) {
      var UserOptions = res.map(function (item, i) {
        return _react["default"].createElement("option", {
          key: i
        }, item.name);
      });
      setExistingUsers(UserOptions);
      setUser(res[0].name);
    });
  };

  var handleChangeAmount = function handleChangeAmount(event) {
    if (!event.target.value) setValidation(true);else setValidation(false);
    setAmount(event.target.value);
  };

  var handleChangeUser = function handleChangeUser(event) {
    // if (event.target.value == '') setUser(event.target.value)
    setUser(event.target.value);
  };

  var handleChangeDescription = function handleChangeDescription(event) {
    setDescription(event.target.value);
  };

  var handleChangeMonthly = function handleChangeMonthly(event) {
    setMonthly(!Monthly);
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var data = {};
    var incomeRequest = {};
    if (Validation) return;

    if (props.edit) {
      var _id = props.item._id;
      data = {
        "_id": _id,
        "update": {
          "amount": Amount,
          "user": User,
          "description": Description,
          "monthly": Monthly
        }
      };
      incomeRequest = new Request("/api/incomes", {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
    } else {
      data = {
        "amount": Amount,
        "user": User,
        "description": Description,
        "monthly": Monthly
      };
      incomeRequest = new Request("/api/incomes", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
    }

    fetch(incomeRequest).then(function (data) {
      return data;
    }).then(function (res) {
      props.toggle();
    });

    if (!props.fromHome) {
      props.update();
    }
  };

  return _react["default"].createElement(_reactstrap.Form, {
    onSubmit: handleSubmit
  }, _react["default"].createElement("div", {
    className: "container"
  }, _react["default"].createElement("div", {
    className: "row"
  }, _react["default"].createElement("div", {
    className: "col-lg-6"
  }, _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
    "for": "amount"
  }, "Amount"), _react["default"].createElement(_reactstrap.Input, {
    type: "number",
    name: "amountnumber",
    id: "amount",
    placeholder: "Income amount",
    onChange: handleChangeAmount,
    value: Amount
  }), Validation ? _react["default"].createElement("div", {
    style: {
      color: "red"
    }
  }, " Please add only numbers!") : null)), _react["default"].createElement("div", {
    className: "col-lg-6"
  }, _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
    "for": "user"
  }, "Who's Income?"), _react["default"].createElement(_reactstrap.Input, {
    type: "select",
    name: "user",
    id: "user",
    onChange: handleChangeUser,
    value: User
  }, ExistingUsers)))), _react["default"].createElement("div", {
    className: "row"
  }, _react["default"].createElement("div", {
    className: "col-12"
  }, _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
    "for": "description"
  }, "Brief description"), _react["default"].createElement(_reactstrap.Input, {
    type: "textarea",
    name: "description",
    id: "description",
    onChange: handleChangeDescription,
    value: Description
  })))), _react["default"].createElement("div", {
    className: "row"
  }, _react["default"].createElement("div", {
    className: "col-12"
  }, _react["default"].createElement(_reactstrap.FormGroup, {
    check: true
  }, _react["default"].createElement(_reactstrap.Input, {
    className: "form-check-input",
    type: "checkbox",
    id: "monthlyCheck",
    onChange: handleChangeMonthly,
    checked: Monthly
  }), _react["default"].createElement(_reactstrap.Label, {
    "for": "monthlyCheck"
  }, "This is a monthly income")))), _react["default"].createElement("hr", null), _react["default"].createElement("div", {
    className: "row"
  }, _react["default"].createElement("div", {
    className: "col-sm-2"
  }, _react["default"].createElement(_reactstrap.Button, {
    color: "primary",
    type: "submit",
    onClick: handleSubmit,
    style: {
      "margin-right": "1rem"
    }
  }, props.edit ? "Update" : "Create")), _react["default"].createElement("div", {
    className: "col-sm-2"
  }, _react["default"].createElement(_reactstrap.Button, {
    color: "secondary",
    onClick: props.toggle,
    style: {
      "margin-right": "1rem"
    }
  }, "Cancel")))));
};

var _default = AddIncome;
exports["default"] = _default;