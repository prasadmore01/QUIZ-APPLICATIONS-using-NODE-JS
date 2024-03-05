let express = require("express")
let router = express.Router()

let body = require("body-parser")
router.use(body.urlencoded({extended:false}))
router.use(body.json())
router.use(body.raw())

//MONGOOSE CONNECTION

let mongoose = require("mongoose")
let admin = require("../modules/adminSchema")

mongoose.Promise = global.Promise

let db = {}
db.mongoose = mongoose
db.url = "mongodb://127.0.0.1:27017/techMcq"
db.admin = admin
db.mongoose.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Admin Database Connected!")
}).catch(err=>{
    console.log("Error Occured!")
})

module.exports = router