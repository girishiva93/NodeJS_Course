const express = require("express");
const app = express();

// import routes of api/people
const people = require("./ExpressJS/routes/people");

// importing auth
const auth = require("./ExpressJS/routes/auth");

// static
app.use(express.static("./methods-public"));

// middleware
// yo use garesi hamro html ma name banera lakheko kura garu catch garna sakinxa yo tei html ko lagi ho
app.use(express.urlencoded({ extended: false }));

// Adding Json for JS to read our name file
app.use(express.json());

// aaba yesma use halesi api/people use garnu pardaina
app.use("/api/people", people);

app.use("/login", auth);

app.listen(5000, () => {
  console.log("Server is listing on 5000 port");
});
