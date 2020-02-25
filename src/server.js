import express from 'express';
import path, { dirname } from 'path';
import mongoose from 'mongoose'
import models, { connectDb } from './models';
import "core-js/stable";
import "regenerator-runtime/runtime";

import 'dotenv/config';
var fs = require('fs');

const app = express();

const users = [
    // {
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
    },
    {
        "name": "Jose",
        "lastName": "Smith",
        "avatar": "avatar-27.png",
        "email": "myotherplaceholder@gmail.com"
    }
]

// Middlewares

app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    req.context = {
        models,
    };
    next();
});

// Routes

// Expenses API
app.get('/api/icons', (req, res) => {
    //Check if user specified section (avatar,income,budget.etc)
    if (req.query.section) {
        let iconSection = req.query.section;
        const prefix = "dist/img/icon/";
        const dir = prefix.concat(iconSection);
        let iconPath = "";

        var options = {
            root: path.join(process.cwd(), prefix),
            dotfiles: 'deny'
        };

        if (req.query.iconid) {
            let icon = req.query.iconid;
            iconPath = path.join(iconSection, icon)
        }

        fs.readdir(dir, (err, files) => {
            try {
                res.set({ 'Content-Type': 'image/png' });
                res.sendFile(iconPath, options);
            }
            catch{
                res.send(err)
            }
        });
    }
    else res.send('no icons found in this folder');
});

app.get('/api/icons/all', (req, res) => {
    if (req.query.section) {
        let sectionPath = path.join(process.cwd(), 'dist/img/icon', req.query.section);
        fs.readdir(sectionPath, (err, files) => {
            try {
                files.forEach((item) => {
                })
            }
            catch{
                console.log(err)
            }
            res.send(files)
        })
    }
});

app.get('/api/expenses', async (req, res) => {
    if (req.query.month) {
        let queriedMonth;
        queriedMonth = parseInt(req.query.month);
        console.log("Fetching latest expenses for the month...")
        const expensesdb = await req.context.models.Expense.aggregate([
            { $addFields: { month: { $month: '$date' } } },
            { $match: { month: queriedMonth } }
        ]);

        res.send(expensesdb);
    }
    else res.send('Here we will get the expenses');
});

app.post('/api/expenses', async (req, res) => {
    // if (req.query.month) {
    //     let month;
    //     month = req.query.month;
    // let newExpense = req.body;
    let expenseDate = Date.parse(req.body.date)
    // newExpense["amount"] = parseInt(newExpense["amount"]);
    // newExpense["id"] = parseInt(newExpense["id"]);
    // console.log(newExpense)
    // expenseQuery[month].push(newExpense);
    console.log(req.body)
    const expenseDb = await req.context.models.Expense.create({
        user: req.body.user,
        date: expenseDate,
        location: req.body.location,
        amount: req.body.amount,
        description: req.body.description,
        budget: req.body.budget
    })
    console.log(expenseDb)
    res.send(`successfully posted new income: ${expenseDb}`)
    // }
});

app.put('/api/expenses', async (req, res) => {
    let selectedExpense = req.body._id;
    let update = req.body.update;
    const expense = await req.context.models.Expense.findByIdAndUpdate(selectedExpense, update)
    res.send('Successfully updated Expense')
});

app.delete('/api/expenses', async (req, res) => {
    let selectedExpense = req.body;
    const expenseToDelete = await req.context.models.Expense.findByIdAndDelete(selectedExpense.expenseId)
    res.send('Successfully deleted Expense')
});

// incomes API

app.get('/api/incomes', async (req, res) => {
    console.log("getting the incomes...")
    const incomesdb = await req.context.models.Income.find();
    res.send(incomesdb);
});

app.post('/api/incomes', async (req, res) => {
    console.log(req.body)
    if (req.body) {
        const newIncome = await req.context.models.Income.create({
            user: req.body.user,
            amount: req.body.amount,
            description: req.body.description,
            monthly: req.body.monthly,
        })
        console.log(newIncome)
        res.send(`successfully posted new income: ${newIncome}`)
    }
});

app.put('/api/incomes', async (req, res) => {
    let selectedIncome = req.body._id;
    let update = req.body.update;
    const income = await req.context.models.Income.findByIdAndUpdate(selectedIncome, update)
    res.send('Successfully updated Income')
});

app.delete('/api/incomes', async (req, res) => {
    let selectedIncome = req.body;
    const incomeToDelete = await req.context.models.Income.findByIdAndDelete(selectedIncome.incomeId)
    res.send('Successfully deleted Income')
});

// Budgets API

app.get('/api/budgets', async (req, res) => {
    if (req.query.month) {
        let queriedMonth = parseInt(req.query.month);
        console.log("Fetching budgets for the month...")
        const budgets = await req.context.models.Budget.find(
            { month: queriedMonth }
        );
        // const budgetDb = await req.context.models.Budget.find();
        res.send(budgets)
    }
});

app.post('/api/budgets', async (req, res) => {
    let newBudget = req.body;
    let iconName = req.body.icon;
    let today = new Date();

    console.log(req.body)

    if (!req.body.amount) {
        console.log("FIELD NULL OR UNDEFINED")

        res.status(422).send(`invalid budget format: ${newBudget}`)
    }

    else {

        const budgetDb = await req.context.models.Budget.create({
            name: req.body.name,
            amount: req.body.amount,
            description: req.body.description,
            icon: iconName,
            month: today.getMonth() + 1,
            monthly: req.body.monthly
        })
        res.send(`successfully posted new budget: ${budgetDb}`)
    }
});

app.put('/api/budgets', async (req, res) => {
    let selectedBudget = req.body._id;
    let update = req.body.update;
    let iconName = '';
    if (req.body.icon == 0) {
        iconName = "house.svg";
    } else iconName = req.body.icon;
    const budget = await req.context.models.Budget.findByIdAndUpdate(selectedBudget, update)
    res.send('Successfully updated Budget')
});

app.delete('/api/budgets', async (req, res) => {
    let selectedBudget = req.body;
    const budgetToDelete = await req.context.models.Budget.findByIdAndDelete(selectedBudget.budgetId)
    res.send('Successfully deleted Budget')
});

//Users API

app.get('/api/users', async (req, res) => {
    console.log("getting the users...")
    const users = await req.context.models.User.find()
    res.send(users)
});

app.post('/api/users', async (req, res) => {
    console.log(req.body)
    if (req.body) {
        const newUser = await req.context.models.User.create({
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            avatar: req.body.avatar,
        })
        console.log(newUser)
        res.send(`successfully posted new user: ${newUser}`)
    }
});

app.put('/api/budgets', (req, res) => {
    res.send('Here we will UPDATE the USERS')
});

app.delete('/api/budgets', (req, res) => {
    res.send('Here we will DELETE the USERS')
});

//main index file

app.get('*', (req, res) => {
    res.sendFile(path.join(process.cwd(), "dist", "index.html"))
});



// Server Start

connectDb().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Now listening on port ${process.env.PORT}`); app.use((req, res, next) => {
            next();
        });
    })
});