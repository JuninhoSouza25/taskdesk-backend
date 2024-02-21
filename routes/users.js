const router = require("express").Router();
const jwt = require('jsonwebtoken')
const userController = require("../controllers/userController");

router
  .route("/users")
  .post((req,res) => userController.create(req, res));

router.route("/users").get((req, res) => userController.getAll(req, res));

router.route("/user/:id").get((req, res) => userController.get(req, res));

router.route("/user/:id").delete((req, res) => userController.delete(req, res));

router.route("/user/:id").put((req, res) => userController.update(req, res));

// function checkToken(req, res, next){
//   const authHeader = req.headers['authorization']
//   const token = authHeader && authHeader.split(" ")[1]

//   if(!token) {
//     return res.status(401).json({msg: 'Acesso negado!'})
//   }

//   try {
//       const secret = process.env.SECRET

//       jwt.verify(token, secret)

//       next()

//   } catch (error) {
//     res.status(400).json({msg: 'Token inválido!'})
//   }
// }

module.exports = router;