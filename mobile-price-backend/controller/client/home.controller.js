const Phone = require("../../models/phone.model");
const getAllData = (req, res) => {
    Phone.find({}, (err, data)=>{
        res.json(data)
    }).limit(6);
    
};

module.exports = getAllData;