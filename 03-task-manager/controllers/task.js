const getAllTask = (req, res) => {
  res.send("All Task");
};
const createTask = (req, res) => {
  res.json(req.body);
  console.log(req.json);
  res.send("CHeck");
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.send("update Task");
};

const deleteTask = (req, res) => {
  res.send("delete Task");
};

module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
