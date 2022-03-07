const express =  require('express');
const Route = express.Router();

const {allPhonesCotroller, phoneController} = require("../../controller/phone.controller")
const {allTabletsCotroller, tabletController} = require("../../controller/tablet.controller")
const {allWatchsCotroller, watchController} = require("../../controller/watch.controller")


Route.get("/phones", allPhonesCotroller);
Route.get("/phone/:deviceId", phoneController);
Route.get("/tablets", allTabletsCotroller);
Route.get("/tablet/:deviceId", tabletController);
Route.get("/watches", allWatchsCotroller);
Route.get("/watch/:deviceId", watchController);



module.exports = Route;