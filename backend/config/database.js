const mongoose = require('mongoose');

const dbConnect = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB Connected...");
        
    }
    catch(error){
        console.log(`Error ${error}`)
    }
}

module.exports = dbConnect;