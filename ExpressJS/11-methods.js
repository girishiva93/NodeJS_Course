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

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  // console.log(id, name);
  // res.send("Hello");
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, message: "Person Not Found" });
  }

  const updatePeople = people.map((person) => {
    if (person.id == Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({
    success: true,
    message: "Thank you for Updating the value",
    data: updatePeople,
  });
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  // res.send("hell");
  const deletePeople = people.find(
    (deletePeople) => deletePeople.id === Number(id)
  );
  if (!deletePeople) {
    return res
      .status(401)
      .json({ success: false, msg: "People with the id name is not found" });
  }
  const newPeople = people.filter(
    (deletePeople) => deletePeople.id !== Number(req.params.id)
  );

  return res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("Server is listing on 5000 port");
});
