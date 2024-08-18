const express = require("express");
const { signup, login, verifyToken } = require("../controller/user-controller");

const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.get("/user",verifyToken);

module. exports = router
