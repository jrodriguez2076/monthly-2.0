"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireWildcard(require("path"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _models = _interopRequireWildcard(require("./models"));

require("core-js/stable");

require("regenerator-runtime/runtime");

require("dotenv/config");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fs = require('fs');

var app = (0, _express["default"])();
var users = [// {
//     "name": "Jose",
//     "lastName": "Rodriguez",
//     "avatar": "boat.png",
//     "email": "myplaceholder@gmail.com"
// },
{
  "name": "Ana",
  "lastName": "Smith",
  "avatar": "avatar-31.png",
  "email": "myotherplaceholder@gmail.com"
}, {
  "name": "Jose",
  "lastName": "Smith",
  "avatar": "avatar-27.png",
  "email": "myotherplaceholder@gmail.com"
}]; // Middlewares

app.use(_express["default"]["static"]('dist'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(function (req, res, next) {
  req.context = {
    models: _models["default"]
  };
  next();
}); // Routes
// Expenses API

app.get('/api/icons', function (req, res) {
  //Check if user specified section (avatar,income,budget.etc)
  if (req.query.section) {
    var iconSection = req.query.section;
    var prefix = "dist/img/icon/";
    var dir = prefix.concat(iconSection);
    var iconPath = "";
    var options = {
      root: _path["default"].join(process.cwd(), prefix),
      dotfiles: 'deny'
    };

    if (req.query.iconid) {
      var icon = req.query.iconid;
      iconPath = _path["default"].join(iconSection, icon);
    }

    fs.readdir(dir, function (err, files) {
      try {
        res.set({
          'Content-Type': 'image/png'
        });
        res.sendFile(iconPath, options);
      } catch (_unused) {
        res.send(err);
      }
    });
  } else res.send('no icons found in this folder');
});
app.get('/api/icons/all', function (req, res) {
  if (req.query.section) {
    var sectionPath = _path["default"].join(process.cwd(), 'dist/img/icon', req.query.section);

    fs.readdir(sectionPath, function (err, files) {
      try {
        files.forEach(function (item) {});
      } catch (_unused2) {
        console.log(err);
      }

      res.send(files);
    });
  }
});
app.get('/api/expenses', function _callee(req, res) {
  var queriedMonth, expensesdb;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!req.query.month) {
            _context.next = 8;
            break;
          }

          queriedMonth = parseInt(req.query.month);
          _context.next = 4;
          return regeneratorRuntime.awrap(req.context.models.Expense.aggregate([{
            $addFields: {
              month: {
                $month: '$date'
              }
            }
          }, {
            $match: {
              month: queriedMonth
            }
          }]));

        case 4:
          expensesdb = _context.sent;
          res.send(expensesdb);
          _context.next = 9;
          break;

        case 8:
          res.send('Here we will get the expenses');

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.post('/api/expenses', function _callee2(req, res) {
  var expenseDate, expenseDb;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          expenseDate = Date.parse(req.body.date);
          _context2.next = 3;
          return regeneratorRuntime.awrap(req.context.models.Expense.create({
            user: req.body.user,
            date: expenseDate,
            location: req.body.location,
            amount: req.body.amount,
            description: req.body.description,
            budget: req.body.budget
          }));

        case 3:
          expenseDb = _context2.sent;
          res.send("successfully posted new income: ".concat(expenseDb)); // }

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
});
app.put('/api/expenses', function _callee3(req, res) {
  var selectedExpense, update, expense;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          selectedExpense = req.body._id;
          update = req.body.update;
          _context3.next = 4;
          return regeneratorRuntime.awrap(req.context.models.Expense.findByIdAndUpdate(selectedExpense, update));

        case 4:
          expense = _context3.sent;
          res.send('Successfully updated Expense');

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
});
app["delete"]('/api/expenses', function _callee4(req, res) {
  var selectedExpense, expenseToDelete;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          selectedExpense = req.body;
          _context4.next = 3;
          return regeneratorRuntime.awrap(req.context.models.Expense.findByIdAndDelete(selectedExpense.expenseId));

        case 3:
          expenseToDelete = _context4.sent;
          res.send('Successfully deleted Expense');

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
}); // incomes API

app.get('/api/incomes', function _callee5(req, res) {
  var incomesdb;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(req.context.models.Income.find());

        case 2:
          incomesdb = _context5.sent;
          res.send(incomesdb);

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
});
app.post('/api/incomes', function _callee6(req, res) {
  var newIncome;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          if (!req.body) {
            _context6.next = 5;
            break;
          }

          _context6.next = 3;
          return regeneratorRuntime.awrap(req.context.models.Income.create({
            user: req.body.user,
            amount: req.body.amount,
            description: req.body.description,
            monthly: req.body.monthly
          }));

        case 3:
          newIncome = _context6.sent;
          res.send("successfully posted new income: ".concat(newIncome));

        case 5:
        case "end":
          return _context6.stop();
      }
    }
  });
});
app.put('/api/incomes', function _callee7(req, res) {
  var selectedIncome, update, income;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          selectedIncome = req.body._id;
          update = req.body.update;
          _context7.next = 4;
          return regeneratorRuntime.awrap(req.context.models.Income.findByIdAndUpdate(selectedIncome, update));

        case 4:
          income = _context7.sent;
          res.send('Successfully updated Income');

        case 6:
        case "end":
          return _context7.stop();
      }
    }
  });
});
app["delete"]('/api/incomes', function _callee8(req, res) {
  var selectedIncome, incomeToDelete;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          selectedIncome = req.body;
          _context8.next = 3;
          return regeneratorRuntime.awrap(req.context.models.Income.findByIdAndDelete(selectedIncome.incomeId));

        case 3:
          incomeToDelete = _context8.sent;
          res.send('Successfully deleted Income');

        case 5:
        case "end":
          return _context8.stop();
      }
    }
  });
}); // Budgets API

app.get('/api/budgets', function _callee9(req, res) {
  var queriedMonth, budgets;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          if (!req.query.month) {
            _context9.next = 6;
            break;
          }

          queriedMonth = parseInt(req.query.month);
          _context9.next = 4;
          return regeneratorRuntime.awrap(req.context.models.Budget.find({
            month: queriedMonth
          }));

        case 4:
          budgets = _context9.sent;
          // const budgetDb = await req.context.models.Budget.find();
          res.send(budgets);

        case 6:
        case "end":
          return _context9.stop();
      }
    }
  });
});
app.post('/api/budgets', function _callee10(req, res) {
  var newBudget, iconName, today, budgetDb;
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          newBudget = req.body;
          iconName = req.body.icon;
          today = new Date();

          if (req.body.amount) {
            _context10.next = 7;
            break;
          }

          res.status(422).send("invalid budget format: ".concat(newBudget));
          _context10.next = 11;
          break;

        case 7:
          _context10.next = 9;
          return regeneratorRuntime.awrap(req.context.models.Budget.create({
            name: req.body.name,
            amount: req.body.amount,
            description: req.body.description,
            icon: iconName,
            month: today.getMonth() + 1,
            monthly: req.body.monthly
          }));

        case 9:
          budgetDb = _context10.sent;
          res.send("successfully posted new budget: ".concat(budgetDb));

        case 11:
        case "end":
          return _context10.stop();
      }
    }
  });
});
app.put('/api/budgets', function _callee11(req, res) {
  var selectedBudget, update, iconName, budget;
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          selectedBudget = req.body._id;
          update = req.body.update;
          iconName = '';

          if (req.body.icon == 0) {
            iconName = "house.svg";
          } else iconName = req.body.icon;

          _context11.next = 6;
          return regeneratorRuntime.awrap(req.context.models.Budget.findByIdAndUpdate(selectedBudget, update));

        case 6:
          budget = _context11.sent;
          res.send('Successfully updated Budget');

        case 8:
        case "end":
          return _context11.stop();
      }
    }
  });
});
app["delete"]('/api/budgets', function _callee12(req, res) {
  var selectedBudget, budgetToDelete;
  return regeneratorRuntime.async(function _callee12$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          selectedBudget = req.body;
          _context12.next = 3;
          return regeneratorRuntime.awrap(req.context.models.Budget.findByIdAndDelete(selectedBudget.budgetId));

        case 3:
          budgetToDelete = _context12.sent;
          res.send('Successfully deleted Budget');

        case 5:
        case "end":
          return _context12.stop();
      }
    }
  });
}); //Users API

app.get('/api/users', function _callee13(req, res) {
  var users;
  return regeneratorRuntime.async(function _callee13$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return regeneratorRuntime.awrap(req.context.models.User.find());

        case 2:
          users = _context13.sent;
          res.send(users);

        case 4:
        case "end":
          return _context13.stop();
      }
    }
  });
});
app.post('/api/users', function _callee14(req, res) {
  var newUser;
  return regeneratorRuntime.async(function _callee14$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          if (!req.body) {
            _context14.next = 5;
            break;
          }

          _context14.next = 3;
          return regeneratorRuntime.awrap(req.context.models.User.create({
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            avatar: req.body.avatar
          }));

        case 3:
          newUser = _context14.sent;
          res.send("successfully posted new user: ".concat(newUser));

        case 5:
        case "end":
          return _context14.stop();
      }
    }
  });
});
app.put('/api/users', function _callee15(req, res) {
  var selectedUser, update, user;
  return regeneratorRuntime.async(function _callee15$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          selectedUser = req.body._id;
          update = req.body.update;
          _context15.next = 4;
          return regeneratorRuntime.awrap(req.context.models.User.findByIdAndUpdate(selectedUser, update));

        case 4:
          user = _context15.sent;
          res.send('Successfully updated User'); // res.send('Here we will UPDATE the USERS')

        case 6:
        case "end":
          return _context15.stop();
      }
    }
  });
});
app["delete"]('/api/users', function _callee16(req, res) {
  var selectedUser, userToDelete;
  return regeneratorRuntime.async(function _callee16$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          selectedUser = req.body;
          _context16.next = 3;
          return regeneratorRuntime.awrap(req.context.models.User.findByIdAndDelete(selectedUser.userId));

        case 3:
          userToDelete = _context16.sent;
          res.send('Successfully deleted user');

        case 5:
        case "end":
          return _context16.stop();
      }
    }
  });
}); //main index file

app.get('*', function (req, res) {
  res.sendFile(_path["default"].join(process.cwd(), "dist", "index.html"));
}); // Server Start

(0, _models.connectDb)().then(function () {
  app.listen(process.env.PORT, function () {
    console.log("Now listening on port ".concat(process.env.PORT));
    app.use(function (req, res, next) {
      next();
    });
  });
});