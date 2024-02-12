const mongoose = require("mongoose")
var AutoIncrement = require('mongoose-sequence')(mongoose);

const mcqSchema = new mongoose.Schema({
    qid:{
        type:Number,
        
    },
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

// const techMcq = mongoose.model("techMcqData",mcqSchema,"techMcqTable")
techMcq.plugin(AutoIncrement, {id:'qid',inc_field: 'qid'});
var techMcq = mongoose.model('techMcqData', mcqSchema,"techMcqTable");

module.exports = techMcq;