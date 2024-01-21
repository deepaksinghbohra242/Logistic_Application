const express = require('express');
const {
    addVehicle,
    hostedVehicle
} = require('../controller/vehicleCtrl');
const fetchUserFromToken = require('../middleware/fetchUserFromToken');

const vehicleRoute = express.Router();

vehicleRoute.post('/addVehicle', fetchUserFromToken , addVehicle);
vehicleRoute.get('/hostedvehicle', fetchUserFromToken , hostedVehicle );

module.exports = vehicleRoute;