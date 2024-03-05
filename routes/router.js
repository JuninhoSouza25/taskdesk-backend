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

// Image Routes

const uploadImage = require('../config/multer')

const imagesRouter = require("./images")
const firebaseImage = require("../db/firebase")

router.use("/", uploadImage.single("file"), firebaseImage, imagesRouter)

module.exports = router;




