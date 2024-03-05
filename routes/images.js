const router = require("express").Router();

const imageController = require("../controllers/imageController");

router.route("/images").post((req,res) => imageController.create(req,res));

router.route("/images").get((req, res) => imageController.getAll(req, res));

router.route("/image/:id").get((req, res) => imageController.get(req, res));

router.route("/image/:id").delete((req, res) => imageController.delete(req, res));

module.exports = router;