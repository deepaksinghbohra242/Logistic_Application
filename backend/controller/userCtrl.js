const User = require('../model/User');
const generateToken = require('../utils/generateToken')
const expressAsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

//user register 
const userRegisterCtrl = expressAsyncHandler(async (req, res) => {
    const userExists = await User.findOne({ email: req?.body?.email });
    if (userExists) throw new Error("User Already exists");
    try {
        const user = await User.create({
            firstName: req?.body?.firstName,
            lastName: req?.body?.lastName,
            userName: req?.body?.userName,
            email: req?.body?.email,
            phone: req?.body?.phone,
            password: req?.body?.password
        });
        res.json(user);
    } catch (error) {
        res.json(error);
    }
})

//user login
const userLoginCtrl = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });
    try {
        if (userFound && (await userFound.isPasswordMatched(password))) {
            const token = generateToken(userFound?.id)
            res.cookie('token', token).json({
                id: userFound?._id,
                name: userFound?.name,
                email: userFound?.email,
                token
            });
        }
        else {
            res.status(401);
            throw new Error('Invalid Login Crediential');
        }
    } catch (error) {
        res.json(error);
    }
})

//fetch user profile
const fetchUserProfile = expressAsyncHandler(async (req, res) => {
    const { token } = req.cookies;
    if (!token) {  
        return res.status(401).json({ message: 'Unauthorized : Missing token' });
    }
    jwt.verify(token, process.env.JWT_KEY, async (err, userData) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden: Invalid token' });
        }
        const user = await User.findById(userData.id).select("-password");
        req.user = user;
        res.json(user);
    });
});


// logout
const logout = expressAsyncHandler((req, res) => {
    res.cookie('token', '').json(true);
})



module.exports = {
    userRegisterCtrl,
    userLoginCtrl,
    fetchUserProfile,
    logout,
} 