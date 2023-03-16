const express = require("express");
const router = express.Router();

const weaponsRoutes = require("./weaponsRoutes");
const heroesRoutes = require("./heroesRoutes");
router.use("/weapon", weaponsRoutes);
router.use("/hero", heroesRoutes);

module.exports = router;
