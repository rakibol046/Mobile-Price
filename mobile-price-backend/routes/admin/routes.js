const express =  require('express');
const Route = express.Router();
const userControll = require("../../controller/admin/user.controller")
const getDevice = require("../../controller/admin/device_list.controller")
const updateDevice = require("../../controller/admin/updateDevice.controller")
const deleteDevice = require("../../controller/admin/deleteDevice.controller")
const addDevice = require("../../controller/admin/addDevice.controller")
const attachmentUpload = require("../../middlewares/file/attachmentUpload")

Route.post("/auth", userControll);
Route.get("/device_list", getDevice);
Route.delete("/delete_device/:deviceId", deleteDevice);
Route.delete("/update_device/:deviceId", updateDevice);
Route.post("/add_device", attachmentUpload ,addDevice);









module.exports = Route