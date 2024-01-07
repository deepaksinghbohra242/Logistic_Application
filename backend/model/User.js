const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    userName : {
        require : [true , 'userName is required'],
        type: String,
    },
    firstName :{
        require : [true , "firstname is required"],
        type: String,

    },
    lastName :{
        require : [true , "lastname is required"],
        type: String,
    },
    email : {
        require : [true , 'Email is required'],
        type : String,
        unique : true
    },
    phone : {
        require : [true , 'Phone is required'],
        type: String,
        unquie : true,
    },
    pic :{
        type : String , 
        default : "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    },
    password : {
        require : [true , 'Password is required'],
        type : String
    },
    date: {
        type: Date,
        default: Date.now,
    },
});



//middleware
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    //hash password 
    const salt = bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
})

userSchema.methods.isPasswordMatched = async function (enterdPassword){
    return await bcrypt.compare(enterdPassword,this.password);
}



const User = mongoose.model("User" , userSchema);

module.exports = User;