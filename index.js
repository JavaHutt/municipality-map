const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const homeRoute = require('./route/home');

const port = 3000;

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'view');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/', homeRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})