const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  let { name } = req.body;
  if (name) {
    res.send(`Welcome ${name}`);
  }
  res.status(404).send("The FIeld is Empty");
});

module.exports = router;
