const mongoose = require("mongoose");

var PhoneSchema = new mongoose.Schema({
    categories : String,
    deviceName: {
        type: String,
        required: true
    },
    price: {
        type: [String],
        required: true
    },
    images:{
       type:[String],
       required: false
    },
    released: String,
    colors: String,
    general:{
        deviceType: String,
        brand: String,
        model: String,
        status: String
    },
    connectivity:{
        network: String,
        sim: String,
        wlan: String,
        usb: String,
        radio: String
    },
    body:{
        style: String,
        material: String,
        dimensions: String,
        weight: String
    },
    display:{
        size: String,
        resolution: String,
        technology: String,
        protection: String,
        features: String
    },
    backCamera:{
        resolution: String,
        features: String,
        videoRecording: String   
    },
    frontCamera:{
        resolution: String,
        features: String,
        videoRecording: String   
    },
    performance:{
        operatingSystem: String,
        chipset: String,
        ram: {
            type: [String],
            required: false
            
        },
        processor: String,
        gpu: String
    },
    storage:{
        rom: {
            type: [String],
            required: false
        },
        microSDSlot: String,
        technology: String,
        protection: String,
        features: String
    },
    sound:{
        jack: String,
        features: String
    },
    security:{
        fingerprint: String,
        faceUnlock: String,
        features: String
    },
    others:{
        notificationLight: String,
        sensors: String,
        madeIn: String
    }

  });


const Phone = mongoose.model("phone", PhoneSchema);

module.exports = Phone;