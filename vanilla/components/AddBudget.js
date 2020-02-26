"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("bootstrap/dist/css/bootstrap.min.css");

var _reactstrap = require("reactstrap");

var _IconItem = _interopRequireDefault(require("./IconItem"));

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

var AddBudget = function AddBudget(props) {
  (0, _react.useEffect)(function () {
    getIcons();
  }, []);

  var _ref = props.item ? (0, _react.useState)(props.item.amount) : (0, _react.useState)(0),
      _ref2 = _slicedToArray(_ref, 2),
      Amount = _ref2[0],
      setAmount = _ref2[1];

  var _ref3 = props.item ? (0, _react.useState)(props.item.name) : (0, _react.useState)(''),
      _ref4 = _slicedToArray(_ref3, 2),
      Name = _ref4[0],
      setName = _ref4[1];

  var _ref5 = props.item ? (0, _react.useState)(props.item.description) : (0, _react.useState)(''),
      _ref6 = _slicedToArray(_ref5, 2),
      Description = _ref6[0],
      setDescription = _ref6[1];

  var _ref7 = props.item ? (0, _react.useState)(props.item.icon) : (0, _react.useState)("house.svg"),
      _ref8 = _slicedToArray(_ref7, 2),
      Icon = _ref8[0],
      setIcon = _ref8[1];

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      IconList = _useState2[0],
      setIconList = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      Monthly = _useState4[0],
      setMonthly = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      Validation = _useState6[0],
      setValidation = _useState6[1];

  var handleChangeAmount = function handleChangeAmount(event) {
    if (!event.target.value) setValidation(true);else setValidation(false);
    setAmount(event.target.value);
  };

  var handleChangeName = function handleChangeName(event) {
    setName(event.target.value);
  };

  var handleChangeDescription = function handleChangeDescription(event) {
    setDescription(event.target.value);
  };

  var handleChangeIcon = function handleChangeIcon(event) {
    try {
      setIcon(IconList[event.target.value]);
    } catch (_unused) {
      setIcon(IconList[event]);
    }
  };

  var handleChangeMonthly = function handleChangeMonthly(event) {
    setMonthly(!Monthly);
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var data = {};
    var budgetRequest = {};
    var notifInfo = {};
    if (Validation) return;

    if (props.edit) {
      var _id = props.item._id; // let update = props.item;

      data = {
        "_id": _id,
        "update": {
          "amount": Amount,
          "name": Name,
          "description": Description,
          "icon": Icon,
          "monthly": Monthly
        }
      };
      notifInfo = {
        "title": "Updated!",
        "message": "Budget updated successfully",
        "icon": "success-2.gif"
      };
      budgetRequest = new Request("/api/budgets", {
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
        "name": Name,
        "description": Description,
        "icon": Icon,
        "monthly": Monthly
      };
      notifInfo = {
        "title": "Added!",
        "message": "Budget added successfully",
        "icon": "success-2.gif"
      };
      budgetRequest = new Request("/api/budgets", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
    }

    fetch(budgetRequest).then(function (data) {
      return data;
    }).then(function (res) {
      props.toggle();

      if (res.status >= 200 && res.status < 400) {
        props.notifData(notifInfo);
        props.showToastMessage();
      } else if (res.status == 422) {
        props.notifData({
          "title": "Error!",
          "message": "Budget data is wrong. Try again!",
          "icon": "warning.gif"
        });
        props.showToastMessage();
      }
    });

    if (!props.fromHome) {
      props.update();
    }
  };

  var getIcons = function getIcons() {
    var iconRequest = new Request("/api/icons/all?section=".concat(props.section), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    fetch(iconRequest).then(function (data) {
      return data.json();
    }).then(function (res) {
      setIconList(_toConsumableArray(res));
    });
  };

  var radioStyle = {
    "marginTop": ".2rem",
    "marginLeft": "-.6rem"
  };
  return _react["default"].createElement(_reactstrap.Form, {
    onSubmit: handleSubmit
  }, _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
    "for": "name"
  }, "Budget Name"), _react["default"].createElement(_reactstrap.Input, {
    type: "text",
    name: "name",
    id: "name",
    onChange: handleChangeName,
    value: Name
  })), _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
    "for": "amount"
  }, "Budget Amount"), _react["default"].createElement(_reactstrap.Input, {
    type: "number",
    name: "number",
    id: "amount",
    placeholder: "Enter a general budget amount",
    onChange: handleChangeAmount,
    value: Amount
  }), Validation ? _react["default"].createElement("div", {
    style: {
      color: "red"
    }
  }, " Please add only numbers!") : null), _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
    "for": "description"
  }, "Enter a brief budget description"), _react["default"].createElement(_reactstrap.Input, {
    type: "textarea",
    name: "description",
    id: "description",
    onChange: handleChangeDescription,
    value: Description
  })), _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement("p", null, "Choose an Icon for the Budget"), _react["default"].createElement(_IconItem["default"], {
    icons: IconList,
    radioStyle: radioStyle,
    handleChangeIcon: handleChangeIcon,
    section: "budgets"
  })), _react["default"].createElement(_reactstrap.FormGroup, {
    check: true
  }, _react["default"].createElement(_reactstrap.Label, {
    check: true
  }, _react["default"].createElement(_reactstrap.Input, {
    type: "checkbox",
    onChange: handleChangeMonthly
  }), " This is a monthly budget")), _react["default"].createElement("hr", null), _react["default"].createElement(_reactstrap.Button, {
    color: "primary",
    type: "submit",
    onClick: handleSubmit,
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

var _default = AddBudget;
exports["default"] = _default;