// const { readFile } = require("fs");

// const getText = (path) => {
//   return new Promise((resolve, rejects) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         rejects(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// const start = async () => {
//   try {
//     const first = await getText("./content/first.txt");
//     const second = await getText("./content/second.txt");
//     console.log(first);
//     console.log(second);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();
// Express Code
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "content-type": "text/html" });
//   res.write(`<h1>Hello Express Js </h1>`);
//   res.end();
// });

// server.listen(5000);

// Express next code
const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./ExpressJS/navbar-app/index.html");
const homeLogo = readFileSync("./ExpressJS/navbar-app/logo.svg");
const homeJS = readFileSync("./ExpressJS/navbar-app/browser-app.js");
const homeStyle = readFileSync("./ExpressJS/navbar-app/styles.css");
const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  let url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyle);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeLogo);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeJS);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1> k url haleko vai temi le </h1>");
    res.end();
  }
});

server.listen(5000);
