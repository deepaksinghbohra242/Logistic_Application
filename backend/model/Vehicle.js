const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    type : {
        type: String,
        require : [true , "Type is required"]
    },
    user : {
        ref : 'User',
        type : mongoose.Schema.Types.ObjectId,
        require : [true , "User is required"]
    },
    name : {
        type : String,
        require : [true , "Vehicle name is required"]
    },
    weight : {
        type : Number,
        require : [true , "Weight in KG"]
    },
    place : [
        {
            type : String,
            require : [true , "Places are required"]
        }
    ]
});



const Vehicle = mongoose.model("Vehicle" , vehicleSchema);

module.exports = Vehicle;