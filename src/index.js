import express from 'express';
import path, { dirname } from 'path';
import 'dotenv/config';
var fs = require('fs');

const app = express();

const expenseQuery = {
    "11": [
        {
            "user": "Jose",
            "date": "12/12/2019",
            "location": "Villa Urquiza",
            "amount": 5000,
            "description": "Christmas Dinner"
        },
        {
            "user": "Ana",
            "date": "5/12/2019",
            "location": "Villa Urquiza",
            "amount": 400,
            "description": "Christmas gift"
        },
        {
            "user": "Ana",
            "date": "6/12/2019",
            "location": "Villa Urquiza",
            "amount": 1000,
            "description": "Taxi"
        },
        {
            "user": "Jose",
            "date": "1/12/2019",
            "location": "Microcentro",
            "amount": 500,
            "description": "Gift"
        },
    ],
    "0": [
        {
            "user": "Ana",
            "date": "1/1/2019",
            "location": "Vicente Lopez",
            "amount": 600,
            "description": "Christmas Dinner"
        },
        {
            "user": "Ana",
            "date": "5/1/2019",
            "location": "Urquiza",
            "amount": 4600,
            "description": "Christmas gift"
        },
        {
            "user": "Jose",
            "date": "6/1/2019",
            "location": "Mar del Plata",
            "amount": 15900,
            "description": "Rent"
        },
        {
            "user": "Jose",
            "date": "12/1/2019",
            "location": "Iguazu",
            "amount": 1500,
            "description": "Birthday Gift"
        },
    ],
    "1": [
        {
            "user": "Jose",
            "date": "16/2/2019",
            "location": "Villa Urquiza",
            "amount": 5000,
            "description": "stuff"
        },
        {
            "user": "Ana",
            "date": "18/2/2019",
            "location": "Villa Urquiza",
            "amount": 4050,
            "description": "more stuff"
        },
        {
            "user": "Ana",
            "date": "6/2/2019",
            "location": "Villa Martelli",
            "amount": 300,
            "description": "another Taxi"
        },
        {
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
        "name": "Rent",
        "amount": 10000,
        "description": "Rent for the month",
        "icon": "004-house.svg",
    },
    {
        "name": "Vacations",
        "amount": 8850,
        "description": "plane tickets, hotels, events, suitcases, etc.",
        "icon": "aircraft.png",
    },
    {
        "name": "Food",
        "amount": 10000,
        "description": "Food for market, meals, take-outs and out-of-house foods",
        "icon": "034-store.svg",
    }
]

const incomes = [
    {
        "user": "Jose",
        "amount": 20000,
        "description": "base salary",
        "icon": "dragon.png",
        "monthly": true
    },
    {
        "user": "Ana",
        "amount": 20000,
        "description": "base salary",
        "icon": "duck.png",
        "monthly": true
    }
]

const users = [
    {
        "name":"Jose",
        "lastName":"Rodriguez",
        "avatar":"dragon.png",
        "email":"myplaceholder@gmail.com"
    },
    {
        "name":"Ana",
        "lastName":"Smith",
        "avatar":"duck.png",
        "email":"myotherplaceholder@gmail.com"
    }
]

// Middlewares

app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
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

app.get('/api/expenses', (req, res) => {
    if (req.query.month) {
        let month;
        month = req.query.month;
        console.log("Fetching latest expenses for the month...")
        res.send(expenseQuery[month]);
    }
    else res.send('Here we will get the expenses');
});

app.post('/api/expenses', (req, res) => {
    res.send('Here we will POST expenses')
});

app.put('/api/expenses', (req, res) => {
    res.send('Here we will UPDATE expenses')
});

app.delete('/api/expenses', (req, res) => {
    res.send('Here we will DELETE expenses')
});

// incomes API

app.get('/api/incomes', (req, res) => {
    console.log("getting the incomes...")
    res.send(incomes);
});

app.post('/api/incomes', (req, res) => {
    res.send('Here we will POST incomes')
});

app.put('/api/incomes', (req, res) => {
    res.send('Here we will UPDATE incomes')
});

app.delete('/api/incomes', (req, res) => {
    res.send('Here we will DELETE incomes')
});

// Budgets API

app.get('/api/budgets', (req, res) => {
    console.log("getting the budgets...")
    res.send(budgets)
});

app.post('/api/budgets', (req, res) => {
    res.send('Here we will POST the BUDGETS')
});

app.put('/api/budgets', (req, res) => {
    res.send('Here we will UPDATE the BUDGETS')
});

app.delete('/api/budgets', (req, res) => {
    res.send('Here we will DELETE the BUDGETS')
});

// Goals API

app.get('/api/goals', (req, res) => {
    res.send('Here we will get the GOALS')
});

app.post('/api/goals', (req, res) => {
    res.send('Here we will POST new GOALS')
});

app.delete('/api/budgets', (req, res) => {
    res.send('Here we will DELETE the GOALS')
});

//Users API

app.get('/api/users', (req, res) => {
    console.log("getting the users...")
    res.send(users)
});

app.post('/api/budgets', (req, res) => {
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

app.listen(process.env.PORT, () => {
    console.log(`Now listening on port ${process.env.PORT}`); app.use((req, res, next) => {
        next();
    });
})