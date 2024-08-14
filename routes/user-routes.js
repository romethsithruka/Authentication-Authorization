const express = require("express");
const { signup } = require("../controller/user-controller");

const router = express.Router();

router.post("/signup",signup)
//acess
module. exports = router
//commet