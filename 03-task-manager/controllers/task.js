const Task = require("../models/Task");

const getAllTask = async (req, res) => {
  try {
    const task = await Task.find({});
    res.status(200).json({ task: task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
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
