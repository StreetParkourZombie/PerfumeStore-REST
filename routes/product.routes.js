const express = require("express");
const router = express.Router();
const controller = require("../controllers/product.controller");

router.get("/", controller.getAll);
router.post("/create", controller.create);
router.delete("/delete/:id", controller.delete);
router.put("/update/:id", controller.update);
router.patch("/update/:id", controller.patch);

module.exports = router;
