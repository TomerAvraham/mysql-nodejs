require("dotenv").config();
const express = require("express");
const config = require("./config");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const port = config.port;
app.listen(port, () => console.log("Running on " + port));
