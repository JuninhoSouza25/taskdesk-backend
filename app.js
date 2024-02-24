const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

const conn  = require("./db/conn")
conn()

// Routes

const routes = require("./routes/router")

app.use("/api", routes)

const port = process.env.PORT

app.listen(port, function() {
    console.log("Servidor Online!")
})