const categoryController = require("../controllers/category.controller");
const express = require("express");
const router = express.Router();

router.get("/", categoryController.getAll);
router.post("/create", categoryController.create);
router.delete("/delete/:id", categoryController.delete);
router.put("/update/:id", categoryController.update);

module.exports = router;