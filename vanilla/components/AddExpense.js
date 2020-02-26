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

var AddExpense = function AddExpense(props) {
  (0, _react.useEffect)(function () {
    getBudgets();
    getUsers();
  }, []);

  var _ref = props.item ? (0, _react.useState)(props.item.expenseDate) : (0, _react.useState)(''),
      _ref2 = _slicedToArray(_ref, 2),
      ExpenseDate = _ref2[0],
      setExpenseDate = _ref2[1];

  var _ref3 = props.item ? (0, _react.useState)(props.item.amount) : (0, _react.useState)(0),
      _ref4 = _slicedToArray(_ref3, 2),
      Amount = _ref4[0],
      setAmount = _ref4[1];

  var _ref5 = props.item ? (0, _react.useState)(props.item.user) : (0, _react.useState)(''),
      _ref6 = _slicedToArray(_ref5, 2),
      User = _ref6[0],
      setUser = _ref6[1];

  var _ref7 = props.item ? (0, _react.useState)(props.item.description) : (0, _react.useState)(''),
      _ref8 = _slicedToArray(_ref7, 2),
      Description = _ref8[0],
      setDescription = _ref8[1];

  var _ref9 = props.item ? (0, _react.useState)(props.item.budget) : (0, _react.useState)(''),
      _ref10 = _slicedToArray(_ref9, 2),
      Budget = _ref10[0],
      setBudget = _ref10[1];

  var _ref11 = props.item ? (0, _react.useState)(props.item.location) : (0, _react.useState)(''),
      _ref12 = _slicedToArray(_ref11, 2),
      Location = _ref12[0],
      setLocation = _ref12[1];

  var _ref13 = props.item ? (0, _react.useState)(props.item.method) : (0, _react.useState)('cash'),
      _ref14 = _slicedToArray(_ref13, 2),
      Method = _ref14[0],
      setMethod = _ref14[1];

  var _ref15 = props.item ? (0, _react.useState)(props.item.Payments) : (0, _react.useState)(1),
      _ref16 = _slicedToArray(_ref15, 2),
      Payments = _ref16[0],
      setPayments = _ref16[1];

  var _ref17 = props.item ? (0, _react.useState)(props.item.StartDate) : (0, _react.useState)(''),
      _ref18 = _slicedToArray(_ref17, 2),
      StartDate = _ref18[0],
      setStartDate = _ref18[1];

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      ExistingBudgets = _useState2[0],
      setExistingBudgets = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      ExistingUsers = _useState4[0],
      setExistingUsers = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      Validation = _useState6[0],
      setValidation = _useState6[1]; // const BudgetOptions = [];


  var getBudgets = function getBudgets() {
    var d = new Date();
    fetch("/api/budgets?month=".concat(d.getMonth() + 1)).then(function (data) {
      return data.json();
    }).then(function (res) {
      var BudgetOptions = res.map(function (item, i) {
        return _react["default"].createElement("option", {
          key: i
        }, item.name);
      });
      setExistingBudgets(BudgetOptions);
      setBudget(res[0].name);
    });
  };

  var getUsers = function getUsers() {
    fetch("/api/users").then(function (data) {
      return data.json();
    }).then(function (res) {
      var UserOptions = res.map(function (item, i) {
        return _react["default"].createElement("option", {
          key: i,
          value: item.name
        }, item.name);
      });
      setExistingUsers(UserOptions);
      setUser(res[0].name);
    });
  };

  var handleChangeDate = function handleChangeDate(event) {
    setExpenseDate(event.target.value);
    if (Method == "credit") setStartDate(event.target.value);
  };

  var handleChangeAmount = function handleChangeAmount(event) {
    if (!event.target.value) setValidation(true);else setValidation(false);
    setAmount(event.target.value);
  };

  var handleChangeUser = function handleChangeUser(event) {
    setUser(event.target.value);
  };

  var handleChangeDescription = function handleChangeDescription(event) {
    setDescription(event.target.value);
  };

  var handleChangeBudget = function handleChangeBudget(event) {
    setBudget(event.target.value);
  };

  var handleChangeLocation = function handleChangeLocation(event) {
    setLocation(event.target.value);
  };

  var handleChangeMethod = function handleChangeMethod(event) {
    setMethod(event.target.value);
    setBudget("Credit card payment");
    if (event.target.value != 'credit') setPayments(1);
  };

  var handleChangePayments = function handleChangePayments(event) {
    setPayments(event.target.value);
    console.log(event.target.value);
  };

  var handleChangeStartDate = function handleChangeStartDate(event) {
    setStartDate(event.target.value);
    setExpenseDate(event.target.value);
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var data = {};
    var expenseRequest = {};
    if (Validation) return;

    if (props.edit) {
      var _id = props.item._id;
      data = {
        "_id": _id,
        "update": {
          "amount": Amount,
          "date": ExpenseDate,
          "user": User,
          "budget": Budget,
          "description": Description,
          "location": Location,
          "method": Method,
          "payments": Payments,
          "startDate": StartDate
        }
      };
      expenseRequest = new Request("/api/expenses", {
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
        "date": ExpenseDate,
        "user": User,
        "budget": Budget,
        "description": Description,
        "location": Location,
        "method": Method,
        "payments": Payments,
        "startDate": StartDate
      };
      expenseRequest = new Request("/api/expenses", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
    }

    fetch(expenseRequest).then(function (data) {
      return data;
    }).then(function (res) {
      props.toggle();
    }); // if (!props.fromHome) {

    props.update(); // }
  }; // const budgetMapper = ExistingBudgets.map(function (item, i) {
  //     return <option key={i}>{item.name}</option>
  // })


  return _react["default"].createElement(_reactstrap.Form, {
    onSubmit: handleSubmit
  }, _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
    "for": "expenseDate"
  }, "Date"), _react["default"].createElement(_reactstrap.Input, {
    type: "date",
    name: "date",
    id: "expenseDate",
    placeholder: "Choose a date for the expense",
    onChange: handleChangeDate,
    value: ExpenseDate
  })), _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
    "for": "amount"
  }, "Amount"), _react["default"].createElement(_reactstrap.Input, {
    type: "number",
    name: "number",
    id: "amount",
    placeholder: "How much was spent?",
    onChange: handleChangeAmount,
    value: Amount
  }), Validation ? _react["default"].createElement("div", {
    style: {
      color: "red"
    }
  }, " Please add only numbers!") : null), _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
    "for": "user"
  }, "Who made the expense?"), _react["default"].createElement(_reactstrap.Input, {
    type: "select",
    name: "user",
    id: "user",
    onChange: handleChangeUser,
    value: User
  }, ExistingUsers)), _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
    "for": "budget"
  }, "Budget associated"), _react["default"].createElement(_reactstrap.Input, {
    type: "select",
    name: "budget",
    id: "budget",
    onChange: handleChangeBudget,
    value: Budget,
    disabled: Method == "credit" ? "disabled" : ""
  }, ExistingBudgets)), _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
    "for": "description"
  }, "Brief description"), _react["default"].createElement(_reactstrap.Input, {
    type: "textarea",
    name: "description",
    id: "description",
    onChange: handleChangeDescription,
    value: Description
  })), _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
    "for": "location"
  }, "Location"), _react["default"].createElement(_reactstrap.Input, {
    type: "text",
    name: "location",
    id: "location",
    onChange: handleChangeLocation,
    value: Location
  })), _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
    "for": "method"
  }, "Select payment method"), _react["default"].createElement(_reactstrap.Input, {
    type: "select",
    name: "method",
    id: "method",
    onChange: handleChangeMethod,
    value: Method
  }, _react["default"].createElement("option", {
    value: "cash"
  }, "Cash"), _react["default"].createElement("option", {
    value: "electronic"
  }, "Electronic"), _react["default"].createElement("option", {
    value: "credit"
  }, "Credit card"))), Method == 'credit' ? _react["default"].createElement("div", null, _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
    "for": "startDate"
  }, " When will the first payment be due? "), _react["default"].createElement(_reactstrap.Input, {
    type: "date",
    name: "startDate",
    id: "startDate",
    placeholder: "Choose a date for the initial payment",
    onChange: handleChangeStartDate,
    value: StartDate
  })), _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
    "for": "payments"
  }, " Select how many payments "), _react["default"].createElement(_reactstrap.Input, {
    type: "select",
    name: "payments",
    id: "payments",
    onChange: handleChangePayments,
    value: Payments
  }, _react["default"].createElement("option", {
    value: 1
  }, "1 payment"), _react["default"].createElement("option", {
    value: 3
  }, "3 payments"), _react["default"].createElement("option", {
    value: 6
  }, "6 payments"), _react["default"].createElement("option", {
    value: 12
  }, "12 payments"), _react["default"].createElement("option", {
    value: 18
  }, "18 payments")))) : null, _react["default"].createElement(_reactstrap.Button, {
    color: "primary",
    type: "submit",
    style: {
      marginRight: "1rem"
    }
  }, props.edit ? "Update" : "Create"), _react["default"].createElement(_reactstrap.Button, {
    color: "secondary",
    onClick: props.toggle,
    style: {
      marginRight: "1rem"
    }
  }, "Cancel"));
};

var _default = AddExpense;
exports["default"] = _default;