const express = require("express");
const router = express.Router();

const getDB = require("../database");

const GET_ALL_QUERY = "SELECT * FROM categories";

const runQuery = require("../database/runQuery");

router.get("/categories", async (req, res) => {
  const categories_query = "SELECT * FROM categories";
  const products_query = "SELECT * FROM products";

  try {
    const [categories, products] = await Promise.all([
      runQuery(categories_query),
      runQuery(products_query),
    ]);

    res.send({ categories, products });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/categories/:name", async (req, res) => {
  const query = `${GET_ALL_QUERY} WHERE name=?`;

  try {
    const categories = await runQuery(query, req.params.name);
    res.send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/categories", (req, res) => {
  const query = `INSERT INTO categories(name) VALUES(?)`;

  getDB().query(query, [req.body.name], (err, result) => {
    if (err) {
      console.log(err);
      return res.json({ err });
    }
    res.send(result);
  });
});

module.exports = router;
