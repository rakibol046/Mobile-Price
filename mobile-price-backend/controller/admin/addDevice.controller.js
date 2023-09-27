const Phone = require("../../models/phone.model");
;
const addDevice = (req, res) => {
   // console.log(req.files)
   const phone = new Phone({
      deviceName : req.body.deviceName,
      categories : req.body.categories,
      price : req.body.price,
      general : {
         brand : req.body.brand,
      },
      performance : {
         ram : req.body.ram,
      },
      storage : {
         rom : req.body.rom,
      }
   })
   // console.log(data)
   // phone.save();
   console.log('hello'+req.body)
    
};

module.exports = addDevice