const express = require("express");
const { showQnA, postQnA } = require("../controller/QnA.js");
const router = express.Router();

router.get("/show", showQnA);
router.post("/post", postQnA);

module.exports = router;
