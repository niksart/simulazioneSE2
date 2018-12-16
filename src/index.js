const express = require('express');

const string_square = require('./string_square');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json('Hello World!');
});

app.get('/square', (req, res) => {
    res.json({result: string_square(req.query.string)});
});

module.exports = app;
