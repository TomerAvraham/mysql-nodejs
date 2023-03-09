const Weapon = require("../models/Weapon");

exports.getAll = async (req, res) => {
  try {
    const weapons = await Weapon.findAll();
    res.status(200).send(weapons);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
