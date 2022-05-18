const express = require("express");
const path = require("path");
const app = express();

// middleware
app.use(express.static("./ExpressJS/public"));

app.get("/", (req, res) => {
  res
    .status(201)
    .sendFile(path.resolve(__dirname, "./ExpressJS/navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Error Link Boss </h1>");
});
app.listen(5000, () => console.log("Server is listing on 5000 port"));
