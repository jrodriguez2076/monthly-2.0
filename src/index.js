import express from 'express';
import path, { dirname } from 'path';
import 'dotenv/config';

const app = express();

// Middlewares

app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    next();
});

// Routes

// Expenses API

app.get('/api/expenses', (req,res)=>{
    if (req.query.month){
        let month;
        month = req.query.month;
        res.send(`Here are the expenses for ${month}`);        
    }
    else res.send('Here we will get the expenses');
});

app.post('/api/expenses', (req,res)=>{
    res.send('Here we will POST expenses')
});

app.put('/api/expenses', (req,res)=>{
    res.send('Here we will UPDATE expenses')
});

app.delete('/api/expenses', (req,res)=>{
    res.send('Here we will DELETE expenses')
});

// incomes API

app.get('/api/incomes', (req,res)=>{
    if (req.query.month){
        let month;
        month = req.query.month;
        res.send(`Here are the incomes for ${month}`);        
    }
    else res.send('Here we will get the incomes');
});

app.post('/api/incomes', (req,res)=>{
    res.send('Here we will POST incomes')
});

app.put('/api/incomes', (req,res)=>{
    res.send('Here we will UPDATE incomes')
});

app.delete('/api/incomes', (req,res)=>{
    res.send('Here we will DELETE incomes')
});

// Budgets API

app.get('/api/budgets', (req,res)=>{
    res.send('Here we will get the BUDGETS')
});

app.post('/api/budgets', (req,res)=>{
    res.send('Here we will POST the BUDGETS')
});

app.put('/api/budgets', (req,res)=>{
    res.send('Here we will UPDATE the BUDGETS')
});

app.delete('/api/budgets', (req,res)=>{
    res.send('Here we will DELETE the BUDGETS')
});

// Goals API

app.get('/api/goals', (req,res)=>{
    res.send('Here we will get the GOALS')
});

app.post('/api/goals', (req,res)=>{
    res.send('Here we will POST new GOALS')
});

app.delete('/api/budgets', (req,res)=>{
    res.send('Here we will DELETE the GOALS')
});

app.get('*', (req,res)=>{
    res.sendFile(path.join(process.cwd(),"dist","index.html"))
});


// Server Start

app.listen(process.env.PORT, () => {
    console.log(`Now listening on port ${process.env.PORT}`);app.use((req, res, next) => {
    next();
});
})