// Setup middleware
// methods. url, time
const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// app.get("/", logger, (req, res) => {
//   res.send("<h1>Home Page</h1>");
// });

// app.get("/about", logger, (req, res) => {
//   res.send("<h1>About Page</h1>");
// });

// yestyo garyo vani k hunxa vani url ma get use gareko ma by default logger function banera define garxa so that we don't have to redefine
// app.use(logger);

// yestyo garyo vani api pachadi suru vako link haru ma by default logger vanne function defune hunxa
// app.use(/api/logger);

// euta vanda dherai value use ma use garnu paryo vani array ma halnu parxa

app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

app.get("/api/product", (req, res) => {
  res.send("<h1>Product</h1>");
});

app.get("/api/items", (req, res) => {
  res.send("<h1>Items</h1>");
});

app.listen(5000, () => console.log("Server is Running on 5000 port"));
