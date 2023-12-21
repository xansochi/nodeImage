'use strict';

// константы
const port = 3000;
const host = '127.0.0.1';

// приложение
const express = require('express')
const test = require('./controllers/imageController')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello User. Cats are waiting!')
  })

app.get('/image', (req, res) => {
    test(req, res);
  })

app.listen(port, host, () => {
  console.log(`Running on http://${host}:${port}`);
});