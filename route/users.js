const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const User = require("../models/user.js");

//login handle

router.get('/login', (req,res)=>{

    res.render('login');
})

router.get('/register', (req,res)=> {

    res.render('register');
})

//register handle

router.post('/register', (req,res)=>{

    const {name,email,password,password2} = req.body;
    let errors=[];
    console.log(' Name ' + name+ ' email ' + email+ ' pass: ' + password);
    if (!name || !password || !password2) {
        errors.push({msg : "Please fill in all fields!"})
    }

    //check if match

    if(password != password2) {

        errors.push({msg : "Passwords do not match"});
    }

    //check if password is more than 6 chars

    if (password.length < 6) {

        errors.push({msg : "Password needs to be at least 6 characters."})
    }

    if(errors.length > 0){

        res.render('register', {

            errors: errors,
            name : name,
            email: email,
            password : password,
            password2 : password2})
    } else {

        const newUser = new User ({

            name : name,
            email : email,
            password : password
        });
    }
})
router.post('/login', (req,res)=>{
})

//logout

router.get('/logout', (req,res)=>{
})

module.exports = router;