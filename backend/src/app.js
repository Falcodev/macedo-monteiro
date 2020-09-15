require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");

const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(errors());

app.listen(process.env.PORT || 3333);
