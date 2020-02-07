import express from 'express';
import path, { dirname } from 'path';
import mongoose from 'mongoose'
import models, { connectDb } from './models';

import 'dotenv/config';
var fs = require('fs');

const app = express();

const expenseQuery = {
    "11": [
        {
            "id": 1,
            "user": "Jose",
            "date": "12/12/2019",
            "location": "Villa Urquiza",
            "amount": 5000,
            "description": "Christmas Dinner"
        },
        {
            "id": 2,
            "user": "Ana",
            "date": "5/12/2019",
            "location": "Villa Urquiza",
            "amount": 400,
            "description": "Christmas gift"
        },
        {
            "id": 3,
            "user": "Ana",
            "date": "6/12/2019",
            "location": "Villa Urquiza",
            "amount": 1000,
            "description": "Taxi"
        },
        {
            "id": 4,
            "user": "Jose",
            "date": "1/12/2019",
            "location": "Microcentro",
            "amount": 500,
            "description": "Gift"
        },
    ],
    "0": [
        {
            "id": 5,
            "user": "Ana",
            "date": "1/1/2019",
            "location": "Vicente Lopez",
            "amount": 600,
            "description": "Christmas Dinner"
        },
        {
            "id": 6,
            "user": "Ana",
            "date": "5/1/2019",
            "location": "Urquiza",
            "amount": 4600,
            "description": "Christmas gift"
        },
        {
            "id": 7,
            "user": "Jose",
            "date": "6/1/2019",
            "location": "Mar del Plata",
            "amount": 15900,
            "description": "Rent"
        },
        {
            "id": 8,
            "user": "Jose",
            "date": "12/1/2019",
            "location": "Iguazu",
            "amount": 1500,
            "description": "Birthday Gift"
        },
    ],
    "1": [
        {
            "id": 9,
            "user": "Jose",
            "date": "16/2/2019",
            "location": "Villa Urquiza",
            "amount": 5000,
            "description": "stuff"
        },
        {
            "id": 10,
            "user": "Ana",
            "date": "18/2/2019",
            "location": "Villa Urquiza",
            "amount": 4050,
            "description": "more stuff"
        },
        {
            "id": 11,
            "user": "Ana",
            "date": "6/2/2019",
            "location": "Villa Martelli",
            "amount": 300,
            "description": "another Taxi"
        },
        {
            "id": 12,
            "user": "Jose",
            "date": "8/2/2019",
            "location": "Microcentro",
            "amount": 5600,
            "description": "yet more stuff"
        },
    ],
}

const budgets = [
    {
        "id": 1,
        "name": "Rent",
        "amount": 10000,
        "description": "Rent for the month",
        "icon": "004-house.svg",
    },
    {
        "id": 2,
        "name": "Vacations",
        "amount": 8850,
        "description": "plane tickets, hotels, events, suitcases, etc.",
        "icon": "aircraft.png",
    },
    {
        "id": 3,
        "name": "Food",
        "amount": 10000,
        "description": "Food for market, meals, take-outs and out-of-house foods",
        "icon": "034-store.svg",
    }
]

const incomes = [
    {
        "id": 1,
        "user": "Jose",
        "amount": 20000,
        "description": "base salary",
        "icon": "dragon.png",
        "monthly": true
    },
    {
        "id": 2,
        "user": "Ana",
        "amount": 20000,
        "description": "base salary",
        "icon": "duck.png",
        "monthly": true
    }
]

const users = [
    {
        "name": "Jose",
        "lastName": "Rodriguez",
        "avatar": "dragon.png",
        "email": "myplaceholder@gmail.com"
    },
    {
        "name": "Ana",
        "lastName": "Smith",
        "avatar": "duck.png",
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
            console.log(iconPath)
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

app.get('/api/expenses', async (req, res) => {
    if (req.query.month) {
        let queriedMonth;
        queriedMonth = parseInt(req.query.month);
        console.log("Fetching latest expenses for the month...")
        const expensesdb = await req.context.models.Expense.aggregate([
            { $addFields: { month: { $month: '$date' } } },
            { $match: { month: queriedMonth } }
        ]);

        console.log(expensesdb)

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
    let selectedExpense = req.body;
    let update = JSON.parse(req.body.update)
    const expense = await req.context.models.Expense.findByIdAndUpdate(selectedExpense.expenseId, update)
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
    if (req.body){
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
    let selectedIncome = req.body;
    let update = JSON.parse(req.body.update)
    const income = await req.context.models.Income.findByIdAndUpdate(selectedIncome.incomeId, update)
    res.send('Successfully updated Income')
});

app.delete('/api/incomes', async (req, res) => {
    let selectedIncome = req.body;
    const incomeToDelete = await req.context.models.Income.findByIdAndDelete(selectedIncome.incomeId)
    res.send('Successfully deleted Income')
});

// Budgets API

app.get('/api/budgets', async (req, res) => {
    const budgetDb = await req.context.models.Budget.find();

    res.send(budgetDb)
});

app.post('/api/budgets', async (req, res) => {
    let newBudget = req.body;
    let iconName = '';
    budgets.push(newBudget);
    if (req.body.icon == 0) {
        iconName = "004-house.svg";
    } else iconName = req.body.icon

    const budgetDb = await req.context.models.Budget.create({
        name: req.body.name,
        amount: req.body.amount,
        description: req.body.description,
        icon: iconName,
    })
    console.log(budgetDb)
    res.send(`successfully posted new income: ${newBudget}`)
});

app.put('/api/budgets', async (req, res) => {
    let selectedBudget = req.body;
    let update = JSON.parse(req.body.update)
    const budget = await req.context.models.Budget.findByIdAndUpdate(selectedBudget.budgetId, update)
    res.send('Successfully updated Budget')
});

app.delete('/api/budgets', async (req, res) => {
    let selectedBudget = req.body;
    const budgetToDelete = await req.context.models.Budget.findByIdAndDelete(selectedBudget.budgetId)
    res.send('Successfully deleted Budget')
});

// Goals API

// app.get('/api/goals', (req, res) => {
//     res.send('Here we will get the GOALS')
// });

// app.post('/api/goals', (req, res) => {
//     res.send('Here we will POST new GOALS')
// });

// app.delete('/api/budgets', (req, res) => {
//     res.send('Here we will DELETE the GOALS')
// });

//Users API

app.get('/api/users', (req, res) => {
    console.log("getting the users...")
    res.send(users)
});

app.post('/api/budgets', (req, res) => {
    let newUsera = req.body;
    res.send('Here we will POST the USERS')
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