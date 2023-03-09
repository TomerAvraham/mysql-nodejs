const express = require("express");
const router = express.Router();

const weaponsRoutes = require("./weaponsRoutes");
router.use("/weapon", weaponsRoutes);

module.exports = router;
