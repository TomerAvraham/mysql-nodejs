require("dotenv").config();
const express = require("express");
const config = require("./config");
const bodyParser = require("body-parser");
const app = express();

const categoriesRoutes = require("./routes/categoriesRoutes");

function test(one, ...values) {
  console.log(values);
}

test(1, 2, 3, "adi", 5);

app.use(bodyParser.json());

app.use("/", categoriesRoutes);

const port = config.port;
app.listen(port, () => console.log("Running on " + port));
