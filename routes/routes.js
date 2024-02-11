const express = require("express")
const router = express.Router()

const body = require("body-parser")
router.use(body.urlencoded({extended:false}))
router.use(body.json())
router.use(body.raw())

//DATABASE CONNECTION

const mongoose = require("mongoose")
const techMcq = require("../modules/techSchema")

mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = "mongodb://127.0.0.1:27017/techMcq"
db.techMcq = techMcq
db.mongoose.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database is Successfully Connected")
}).catch(err=>{
    console.log("Error Occured")
    process.exit()
})

module.exports = router