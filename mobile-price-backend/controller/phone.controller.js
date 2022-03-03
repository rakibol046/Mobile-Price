const Phone = require("../models/phone.model");
const allPhones = (req, res) => {
    Phone.find({}, (err, data)=>{
        res.json(data)
    });
    
};
const phone = (req, res) => {
    let deviceId = req.params.deviceId
    console.log(deviceId)
    Phone.findById({_id: deviceId}, (err, data)=>{
        if(err){
            console.log(err)
        }
        else {
            console.log(data)
            res.json(data)
    }
    });
    
};

module.exports = {
    allPhones,
    phone
};