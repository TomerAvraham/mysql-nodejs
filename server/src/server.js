require("dotenv").config();
const express = require("express");
const config = require("./config");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

const routes = require("./routes");
app.use("/", routes);

const port = config.port;
app.listen(port, () => console.log("Running on " + port));
