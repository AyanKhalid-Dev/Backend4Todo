const express = require('express')
const app = express()
const Get = require('./routes/get')
const Post = require('./routes/post')
const Put = require("./routes/put")
const Delete = require("./routes/delete")
const Patch = require("./routes/patch")
const dotenv = require('dotenv')
const cors= require("cors")
const  verifyUser  = require("./verifyUser")
dotenv.config()
const port = process.env.PORT



app.use(express.json())
app.use(cors())

app.get('/',verifyUser, Get)
app.post('/',verifyUser, Post)
app.put('/',verifyUser, Put)
app.delete('/',verifyUser, Delete)
app.patch('/',verifyUser, Patch)



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
