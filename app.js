const express = require("express");

const app = express();
let { people } = require("./data");

// static
app.use(express.static("./methods-public"));

// middleware
// yo use garesi hamro html ma name banera lakheko kura garu catch garna sakinxa yo tei html ko lagi ho
app.use(express.urlencoded({ extended: false }));

// Adding Json for JS to read our name file
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  let { name } = req.body;
  if (name) {
    res.send(`Welcome ${name}`);
  }
  res.status(404).send("The FIeld is Empty");
});

app.post("/api/people", (req, res) => {
  let { name } = req.body;
  if (!name) {
    res.status(404).json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});

app.listen(5000, () => {
  console.log("Server is listing on 5000 port");
});
