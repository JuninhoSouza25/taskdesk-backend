const router = require("express").Router()

// Task Routes

const taskRouter = require("./task")

router.use("/", taskRouter)

module.exports = router;
