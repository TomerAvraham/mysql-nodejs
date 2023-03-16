const router = require("express").Router();
const heroesController = require("../controllers/heroesController");

router.route("/").get(heroesController.getAll);

router.get("/move-to-hospital", heroesController.moveToHospital);

module.exports = router;
