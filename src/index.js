import express from 'express';

const app = express();

app.listen(3000, (req, res) => {
    console.log('Now listening on port 3000');
    console.log("heres is your request: " + req);
})