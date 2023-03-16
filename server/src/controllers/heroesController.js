const Hero = require("../models/Hero");

exports.getAll = async (req, res) => {
  try {
    const heroes = await Hero.findAll();
    res.status(200).send(heroes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

exports.moveToHospital = async (req, res) => {
  try {
    const result = await Hero.moveAllInactiveToHospital();
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
