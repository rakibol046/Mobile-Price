const Phone = require("../../models/phone.model");

const device_list = (req, res) => {
        Phone.find({}, (err, data)=>{
            res.json(data)
        }).limit(20);
}

module.exports = device_list


