const runQuery = require("../database/runQuery");

async function findAll() {
  const query = `SELECT 
    heroes.id as hero_id,
    heroes.create_at as hero_create_at,
    first_name,
    last_name,
    heroes.type as hero_type,
    active,
    weapons.id as weapon_id,
    weapons.name as weapon_name,
    weapons.color as weapon_color,
    weapons.material as weapon_material,
    weapons.img_src as weapon_src
     FROM heroes INNER JOIN weapons on heroes.weapon_id = weapons.id`;

  const heroes = await runQuery(query);
  return heroes;
}

async function moveAllInactiveToHospital() {
  const query = "call move_inactive_hero_to_hospital";
  return runQuery(query);
}

module.exports = { findAll, moveAllInactiveToHospital };
