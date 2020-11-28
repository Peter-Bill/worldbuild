const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Planet = require('../models/planet.js');

router.get('/solar_system', (req,res)=>{

    res.render('solar_system')
})

//Planet Creation

router.post('/solar_system', (req,res)=> {

    for(let i=0; i < 10; i++) {

        const newPlanet = new Planet ({

            position = i,
            planet_type = 'Random',
            slots = 10,
            owner = 'Shade'

        });

        newPlanet.save();
    }
})

module.exports = router;