const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const db = require('./config/database');
const userRoutes = require('./route/userRoute');
const vehicleRoute = require('./route/vehicleRoute');
dotenv.config();
const app = express();

app.use(cookieParser());    
app.use(express.json());

db();

app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true
}));

app.use('/api/user' , userRoutes);
app.use('/api/vehicle', vehicleRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT , console.log(`server is running at ${PORT}`));