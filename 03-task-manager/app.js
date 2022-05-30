const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const bodyParser = require("body-parser");

const connectDB = require("./db/connect");

require("dotenv").config();

app.get("/hello", (req, res) => {
  res.send("Hello Task Manager");
});
// bodyParser tei body ko kunai pani data read garna lai kam lagxa
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use("/api/v1/tasks", task);
// app.use("/api/v1/tasks/:");

// adding frontend project
app.use(express.static("./public"));

app.use("/api/v1/tasks", tasks);
app.use(express.json());

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
