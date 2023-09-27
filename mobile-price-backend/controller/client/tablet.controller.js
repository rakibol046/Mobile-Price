const Phone = require("../../models/phone.model");
const allTabletsCotroller = (req, res) => {
    Phone.find({categories : "tablet"}, (err, data)=>{
        res.json(data)
    });
    
};
const tabletController = (req, res) => {
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
    allTabletsCotroller,
    tabletController
};