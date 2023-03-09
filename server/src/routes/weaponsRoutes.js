const express = require("express");
const router = express.Router();
const weaponsController = require("../controllers/weaponsCotroller");

router.route("/").get(weaponsController.getAll).post();

router.route("/:id").put().delete();

module.exports = router;
