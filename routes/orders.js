const express = require("express");
const controller = require("../controllers/orders");

const route = express.Router();

route.get("/", controller.getAll);


module.exports = route;
