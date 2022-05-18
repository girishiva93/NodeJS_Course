// // Http course (video number 15)
// const http = require("http");
// const server = http.createServer((req, res) => {
//     if(req == "/"){
//         res.write(`<h1> Hello Home Page </h1`)
//         res.end()
//     }
//     if(req == "/about"){
//         res.end(`<h1>Hello About Page</h1>`)
//     }
//   res.write("Hello Node Js ");
//   res.end();
// });

// server.listen(5000);

// more feature in models

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`<h1>This is Home Page</h1>`);
  }
  if (req.url === "/about") {
    res.end(`<h1>This is about Page</h1>`);
  }
  res.end(`
  <h1>Page not FOund</h1>
  <p> Would you like to go home page </p>
  <a href="/">Home Page</a>
  `);
});

server.listen(5000);
