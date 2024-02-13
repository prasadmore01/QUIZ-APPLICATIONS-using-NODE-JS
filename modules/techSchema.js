const mongoose = require("mongoose")

const mcqSchema = new mongoose.Schema({
  
    question:{
        type:String,
        required:true
    },
    options:{
        type:Array,
        required:true
    },
    correct_answer:{
        type:String,
        required:true
    },
    category:{
        required:true,
        type:String
    }
})

const techMcq = mongoose.model("techMcqData",mcqSchema,"techMcqTable")

module.exports = techMcq;