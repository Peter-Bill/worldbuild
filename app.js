const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const app = express();
const expressEjsLayout = require('express-ejs-layouts');

const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

require("./config/passport") (passport)

//Mongoose

mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('connected,,'))
.catch((err)=> console.log(err));

//EJS Sys

app.set('view engine', 'ejs');
app.use(expressEjsLayout);

//Body Parser

app.use(express.urlencoded({extended: false}));

//Express

app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}));

app.use(passport.initialize());
app.use(passport.session());

//use flash
app.use(flash());
app.use((req,res,next)=> {

    res.locals.success_msg = req.flash('success_msq');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
next();
})

app.use(('/public'), express.static('public'));

//Routes

app.use('/',require('./route/index'));
app.use('/users',require('./route/users'));

app.listen(3000);