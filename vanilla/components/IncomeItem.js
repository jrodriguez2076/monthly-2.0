"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("bootstrap/dist/css/bootstrap.min.css");

require("core-js/stable");

require("regenerator-runtime/runtime");

var _reactstrap = require("reactstrap");

var _submodule = _interopRequireDefault(require("./submodules/submodule"));

var _GenericModal = _interopRequireDefault(require("./GenericModal"));

var _envOptions = require("dotenv/lib/env-options");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var IncomeItem = function IncomeItem(props) {
  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      iconPaths = _useState2[0],
      setIconPaths = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      ConfirmModal = _useState4[0],
      setConfirmModal = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      SelectedItem = _useState6[0],
      setSelectedItem = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      ItemAction = _useState8[0],
      setItemAction = _useState8[1];

  var toggle = function toggle() {
    return setConfirmModal(!ConfirmModal);
  };

  var selectItem = function selectItem(item, action) {
    setSelectedItem(item);

    if (action == 0) {
      setItemAction("income");
    } else if (action == 1) setItemAction("confirm");

    toggle();
  };

  (0, _react.useEffect)(function () {
    var getIconPaths = function getIconPaths() {
      var users, paths;
      return regeneratorRuntime.async(function getIconPaths$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(getUsers());

            case 2:
              users = _context.sent;
              paths = {};
              users.forEach(function (element) {
                paths[element.name] = "/img/icon/avatar/".concat(element.avatar);
              });
              setIconPaths(paths);
              return _context.abrupt("return");

            case 7:
            case "end":
              return _context.stop();
          }
        }
      });
    };

    getIconPaths();
  }, []);

  var deleteItem = function deleteItem() {
    var data = {
      "incomeId": SelectedItem._id
    };
    var incomeDeleteRequest = new Request("/api/incomes", {
      method: 'DELETE',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    fetch(incomeDeleteRequest).then(function (data) {
      return data;
    }).then(function (res) {
      props.updateIncomes();
      toggle();
    });
  };

  var getUsers = function getUsers() {
    var response, data;
    return regeneratorRuntime.async(function getUsers$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(fetch('/api/users'));

          case 2:
            response = _context2.sent;
            _context2.next = 5;
            return regeneratorRuntime.awrap(response.json());

          case 5:
            data = _context2.sent;
            return _context2.abrupt("return", data);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    });
  };

  var incomeMapper = props.incomes.map(function (item, i) {
    return _react["default"].createElement("div", {
      key: i,
      className: "col-md-6",
      style: {
        marginBottom: "2rem"
      }
    }, _react["default"].createElement(_reactstrap.Card, null, _react["default"].createElement(_reactstrap.CardImg, {
      className: "mx-auto",
      top: true,
      width: "100%",
      src: iconPaths[item.user],
      style: {
        width: "7rem"
      },
      alt: "Avatar goes here"
    }), _react["default"].createElement(_reactstrap.CardBody, null, _react["default"].createElement(_reactstrap.CardTitle, {
      tag: "h3"
    }, (0, _submodule["default"])(item.amount)), _react["default"].createElement(_reactstrap.CardText, null, item.user), _react["default"].createElement(_reactstrap.CardText, null, item.description), _react["default"].createElement(_reactstrap.Button, {
      color: "link",
      style: {
        padding: "1rem"
      },
      onClick: function onClick() {
        return selectItem(item, 0);
      }
    }, _react["default"].createElement("img", {
      src: "/img/icon/edit.png"
    })), _react["default"].createElement(_reactstrap.Button, {
      color: "link",
      style: {
        padding: "1rem"
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
      updateIncomes: props.updateIncomes,
      "delete": true
    }))));
  });
  return _react["default"].createElement(_reactstrap.CardGroup, {
    className: "row text-center"
  }, incomeMapper);
};

var _default = IncomeItem;
exports["default"] = _default;