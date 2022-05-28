const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.connect(url, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopologies: true,
  });
};

module.exports = connectDB;
