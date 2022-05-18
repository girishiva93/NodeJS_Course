// Task - json data lai import garne ani website ma display garne
const express = require("express");
const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  res.json(products);
});

app.all("*", (req, res) => {
  res.send("<h1>Error aayo boss</h1>");
});

app.listen(5000, () => console.log("server is running on 5000 port"));
