const express = require('express');
const path = require('path');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('posts')
});
app.get('/singlepost/:id', (req, res) => res.render('singlepost', {id: req.params.id}));
app.get('/addnewpost', (req, res) => res.render('addnewpost'));

app.use((req, res) => {
  res.status(404)
  res.render('404')
});

console.log("Server started on port 5050")
app.listen(5050)
