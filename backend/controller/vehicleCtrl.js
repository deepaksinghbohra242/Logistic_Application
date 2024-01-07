const Vehicle = require('../model/Vehicle');
const expressAsyncHandler = require('express-async-handler');

const addVehicle = expressAsyncHandler(async (req, res) => {
    const { userId } = req.userId;
    const { type, name, weight, place } = req.body
    try {
        const vehicle = await Vehicle.create({
            user: userId,
            type,
            name,
            weight,
            place
        });
        res.json(vehicle);
    } catch (error) {
        res.json(error);
    }
});

const hostedVehicle = expressAsyncHandler(async (req, res) => {
    const { userId } = req.userId;
    try {
        const vehicles = await Vehicle.find({ user: userId });
        res.json(vehicles);
    } catch (error) {
        res.json(error);
    }
})

module.exports = {
    addVehicle,
    hostedVehicle
}