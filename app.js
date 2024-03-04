const express = require("express")
const app = express()
const port = 3000

const routes = require("./routes/routes")
app.use("/brainstorm",routes)

const userRoutes = require("./routes/userRoutes")
app.use("/brainstorm",userRoutes)

app.listen(port,()=>{
    console.log(port+" server is Listening!")
})