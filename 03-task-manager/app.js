const express = require("express");

const app = express();

const task = require("./routes/task");

app.get("/hello", (req, res) => {
  res.send("Hello Task Manager");
});

app.use("/api/v1/tasks", task);
// app.use("/api/v1/tasks/:");

const port = 5000;

app.listen(port, () => {
  console.log("server is running on 5000 port....");
});
