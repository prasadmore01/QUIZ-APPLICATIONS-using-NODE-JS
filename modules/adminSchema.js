let mongoose = require("mongoose")

let adminSchema = mongoose.Schema({
    adminName:{
        type:String
    },
    adminEmail:{
        type:String
    },
    adminPass:{
        type:String
    }
})

let admin = mongoose.model("adminModel",adminSchema,"adminTable")

modules.export = admin
