const mongoose = require('mongoose');
const PlanetSchema = new mongoose.Schema({

    position :{

        type : BigInt,
        required : true
    },
    planet_type :{

        type: String,
        required : true
    } ,

    slots :{
        
        type: String,
        required: true
    } ,

    owner :{

        type: String,
        default: "Not Occupied",
        required: true
    }
});

const Planet= mongoose.model('Planet',PlanetSchema);

module.exports = Planet;