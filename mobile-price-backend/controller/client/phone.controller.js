const Phone = require("../../models/phone.model");
const allPhonesCotroller = (req, res) => {
    console.log("called phone for data fatch")
    Phone.find({categories : "phone"}, (err, data)=>{
        res.json(data)
    });
    
};
const phoneController = (req, res) => {
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
    allPhonesCotroller,
    phoneController
};