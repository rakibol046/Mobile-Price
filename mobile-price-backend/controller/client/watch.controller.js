const Phone = require("../../models/phone.model");
const allWatchsCotroller = (req, res) => {
    Phone.find({categories : "watch"}, (err, data)=>{
        res.json(data)
    });
    
};
const watchController = (req, res) => {
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
    allWatchsCotroller,
    watchController
};