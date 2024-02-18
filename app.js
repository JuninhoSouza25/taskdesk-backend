const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

const conn  = require("./db/conn")

conn()

app.listen(3001, function() {
    console.log("Servidor Online!")
})