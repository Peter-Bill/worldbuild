const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const expressEjsLayout = require('express-ejs-layouts');

//Mongoose

mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('connected,,'))
.catch((err)=> console.log(err));

//EJS Sys

app.set('view engine', 'ejs');
app.use(expressEjsLayout);

//Body Parser

app.use(express.urlencoded({extended: false}));

//Routes

app.use('/',require('./route/index'));
app.use('/users',require('./route/users'));

app.listen(3000);