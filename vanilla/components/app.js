"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("bootstrap/dist/css/bootstrap.min.css");

var _reactstrap = require("reactstrap");

var _reactRouterDom = require("react-router-dom");

var _NavSection = _interopRequireDefault(require("./NavSection"));

var _ExpenseTotal = _interopRequireDefault(require("./ExpenseTotal"));

var _ActionButton = _interopRequireDefault(require("./ActionButton"));

var _LatestExpenses = _interopRequireDefault(require("./LatestExpenses"));

var _Pagination = _interopRequireDefault(require("./Pagination"));

var _Budgets = _interopRequireDefault(require("./Budgets"));

var _Home = _interopRequireDefault(require("./Home"));

var _incomes = _interopRequireDefault(require("./incomes"));

var _users = _interopRequireDefault(require("./users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var title = 'More functions coming soon...';

function App() {
  return _react["default"].createElement(_reactRouterDom.BrowserRouter, null, _react["default"].createElement("div", null, _react["default"].createElement(_NavSection["default"], null), _react["default"].createElement(_reactRouterDom.Switch, null, _react["default"].createElement(_reactRouterDom.Route, {
    path: "/expenses",
    exact: true,
    component: _LatestExpenses["default"]
  }), _react["default"].createElement(_reactRouterDom.Route, {
    path: "/incomes",
    exact: true,
    component: _incomes["default"]
  }), _react["default"].createElement(_reactRouterDom.Route, {
    path: "/budgets",
    exact: true,
    component: _Budgets["default"]
  }), _react["default"].createElement(_reactRouterDom.Route, {
    path: "/users",
    exact: true,
    component: _users["default"]
  }), _react["default"].createElement(_reactRouterDom.Route, {
    path: "/",
    exact: true,
    component: _Home["default"]
  }))));
}

_reactDom["default"].render(_react["default"].createElement(App, null), document.getElementById('app'));