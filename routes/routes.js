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

const techMcqs = db.techMcq

// INSERT A DATA INTO A DATABASE

router.get("/addTechMcq",(req,res)=>{
    res.sendFile(__dirname+"/public/addTechMcq.html")
})

router.get("/techMcqStyle",(req,res)=>{
    res.sendFile(__dirname+"/public/addTechMcq.css")
})

router.post("/insertTechMcq",async(req,res)=>{
    const techM = new techMcqs(req.body)
    try{
        await techM.save()
        res.send(techM)
    }
    catch(err){
        res.status(500).send(err)
    }
})

//GET A DATA FROM DATABASE

router.get("/getTechMcq",async(req,res)=>{
    try{
        let response = await techMcqs.find().select({"_id":1,"question":1})
        res.send(response)
    }
    catch{
        res.send("Error Occured")
    }
})


//DELETE A DATA FROM DATABASE

router.get("/deleteTechMcq",(req,res)=>{
    res.sendFile(__dirname+"/public/deleteTechMcq.html")
})

router.delete("/deleteTechMcq/:id",async(req,res)=>{
    try{
        let quid = req.params.id
        let response = await techMcqs.findOneAndDelete({"_id":quid})
        res.send("Record Deleted")
    }
    catch{
        res.send("Errror Occured")
    }
})

module.exports = router