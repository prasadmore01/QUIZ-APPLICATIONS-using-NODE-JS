const mongoose = require("mongoose")

const mcqSchema = new mongoose.Schema({

    question:{
        type:String
    },
    options:{
        type:Array
    },
    correct_answer:{
        type:String
    },
    category:{
        type:String
    }
})

const techMcq = mongoose.model("techMcqData",mcqSchema,"techMcqTable")

module.exports = techMcq;