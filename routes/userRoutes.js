let express = require('express')
let router = express.Router()

let body = require("body-parser")
router.use(body.urlencoded({extended:false}))
router.use(body.json())
router.use(body.raw())

//DB Connection 
let mongoose = require("mongoose")
let users = require("../modules/userSchema")
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = "mongodb://127.0.0.1:27017/techMcq"
db.users = users
db.mongoose.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Users Database is Successfully Connected!")
}).catch(err=>{
    console.log("Error Occured!")
    
})


module.exports = router