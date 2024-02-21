const router = require("express").Router()

// Task Routes

const taskRouter = require("./task")

router.use("/", taskRouter)

// User Routes

const userRouter = require("./users")

router.use("/", userRouter)

// Login Routes

const loginRouter = require("./login")

router.use("/", loginRouter)

module.exports = router;




