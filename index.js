const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs');

//default homepage
app.get("/", (req, res ) => {
  res.render("index");
});

app.listen(8080, () => {
  console.log('Server is running.. ');
});
