let mongoose = require("mongoose")

let userSchema = new mongoose.Schema({
    userName:{
        type:String
    },
    userPass:{
        type:String
    },
    userEmail:{
        type:String
    }
})

let users = mongoose.model("userModel",userSchema,usersTable)