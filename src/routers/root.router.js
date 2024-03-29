const express = require("express");
const studentRouter = require("./student.router");
const router = express.Router();

router.use("/students", studentRouter);

module.exports = router;
