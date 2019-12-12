import express from 'express';
import path from 'path';

const app = express();

app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(req);
    next();
});

app.get('/api/expenses', (req,res)=>{
    res.send('Here we will get the expenses')
});

app.post('/api/expenses', (req,res)=>{
    res.send('Here we will POST new expenses')
});

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})

app.listen(3000, () => {
    console.log('Now listening on port 3000');app.use((req, res, next) => {
    next();
});
})