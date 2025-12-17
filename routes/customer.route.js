const customerController = require("../controllers/customer.controller");

const express = require("express");
const router = express.Router();

router.post("/login", customerController.login);

module.exports = router;