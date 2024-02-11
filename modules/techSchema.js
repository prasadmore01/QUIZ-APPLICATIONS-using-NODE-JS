const mongoose = require("mongoose")

const mcqSchema = new mongoose.Schema({

    question:{
        type:String
    },
    options:{
        type:String
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