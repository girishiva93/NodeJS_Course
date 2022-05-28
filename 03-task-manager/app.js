const express = require("express");
const app = express();
const task = require("./routes/task");

const connectDB = require("./db/connect");

require("dotenv").config();

app.get("/hello", (req, res) => {
  res.send("Hello Task Manager");
});

app.use("/api/v1/tasks", task);
// app.use("/api/v1/tasks/:");

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("server is running on 5000 port....");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
