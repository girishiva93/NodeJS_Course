const express = require("express");
const routes = express.Router();

const {
  createPeople,
  deletePeople,
  updatePerson,
  getPeople,
} = require("../controllers/people");

// routes.get("/api/people", (req, res) => {
//   res.status(200).json({ success: true, data: people });
// });

// api/people lai remove garera / matra kina use gareko vani hame le main app mei app.use(/api/people) use gareko vayera ho
// routes.get("/", getPeople);
// routes.post("/", createPeople);
// routes.put("/:id", updatePerson);
// routes.delete("/:id", deletePeople);

routes.route("/").get(getPeople).post(createPeople);
routes.route("/:id").put(updatePerson).delete(deletePeople);

module.exports = routes;
