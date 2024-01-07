const express = require('express');
const {
    userRegisterCtrl,
    userLoginCtrl,
    fetchUserProfile,
    logout
} = require('../controller/userCtrl');
const fetchUserFromToken = require('../middleware/fetchUserFromToken')

 
const userRoutes = express.Router(); 

userRoutes.post('/register' , userRegisterCtrl);
userRoutes.post('/login', userLoginCtrl);
userRoutes.get('/profile',fetchUserProfile);
userRoutes.post('/logout',logout)
 
module.exports = userRoutes;