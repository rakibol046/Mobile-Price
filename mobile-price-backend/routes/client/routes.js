const express =  require('express');
const Route = express.Router();

const {allPhonesCotroller, phoneController} = require("../../controller/client/phone.controller")
const {allTabletsCotroller, tabletController} = require("../../controller/client/tablet.controller")
const {allWatchsCotroller, watchController} = require("../../controller/client/watch.controller")


Route.get("/phones", allPhonesCotroller);
Route.get("/phones/:deviceId", phoneController);
Route.get("/tablets", allTabletsCotroller);
Route.get("/tablets/:deviceId", tabletController);
Route.get("/watches", allWatchsCotroller);
Route.get("/watches/:deviceId", watchController);



module.exports = Route;