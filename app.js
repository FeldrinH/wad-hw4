require('dotenv').config()

const express = require('express');
const path = require('path');
const routes = require('./routes')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }))

app.use(routes)

app.use((req, res) => {
  res.status(404)
  res.render('message', { title: '404: Page not found', message: `404: Page ${req.url} not found` })
});

console.log("Server started on port 8080")
app.listen(8080)
