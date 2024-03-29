const router = require("express").Router();

const taskController = require("../controllers/taskController");



router
  .route("/tasks")
  .post((req,res) => taskController.create(req,res));

router.route("/tasks").get((req, res) => taskController.getAll(req, res));

router.route("/tasks/:user_id").get((req, res) => taskController.getTasks(req, res));

router.route("/task/:id").get((req, res) => taskController.get(req, res));

router.route("/task/:id").delete((req, res) => taskController.delete(req, res));

router.route("/task/:id").put((req, res) => taskController.update(req, res));

module.exports = router;