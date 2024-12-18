const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer(function (req, res) {
    let q = url.parse(req.url, true);
    let filename = "." + q.pathname;

    fs.readFile(filename, function (err, data) {
      console.log(filename);
      if (err) {
        fs.readFile("./404.html", function (err, data) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        });
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
