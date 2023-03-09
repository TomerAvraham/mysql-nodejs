const runQuery = require("../database/runQuery");

async function findAll(options = {}) {
  try {
    const query = "SELECT * FROM weapons";
    const result = runQuery(query);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = { findAll };
