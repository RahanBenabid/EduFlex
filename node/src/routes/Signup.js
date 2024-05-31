const express = require("express");
const { signupUser, getAllUsers } = require("../controller/Signup");
const router = express.Router();

router.post("/register", signupUser);
router.get("/", getAllUsers);

module.exports = router;
