// importing data
let { people } = require("../../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPeople = (req, res) => {
  let { name } = req.body;
  if (!name) {
    res.status(404).json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
};

const updatePerson = (req, res) => {
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
};

const deletePeople = (req, res) => {
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
};

module.exports = { createPeople, deletePeople, updatePerson, getPeople };
