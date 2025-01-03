const express = require("express");
const app = express();
const path = require("path");

const pages = ["about.html", "contact-me.html", "index.html"];

app.get("/:name", (req, res, next) => {
  const options = {
    root: path.join(__dirname, "public"),
  };

  const filename = req.params.name.includes(".html")
    ? req.params.name
    : req.params.name + ".html";

  if (pages.includes(filename)) {
    res.sendFile(filename, options, (err) => {
      if (err) {
        throw err;
      } else {
        console.log("Sent:", filename);
      }
    });
  } else {
    res.sendFile("404.html", options, (err) => {
      if (err) {
        throw err;
      } else {
        console.log("Sent:", "404.html");
      }
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/* const http = require("http");
const url = require("url");
const fs = require("fs");

const pages = ["./about.html", "./contact-me.html", "./index.html"];

http
  .createServer(function (req, res) {
    let q = url.parse(req.url, true);
    let filename = "." + q.pathname;

    //checks if the url path matches any of the pages, if so it reads the correct file, else reads the 404 file
    //just throwing errors for handling

    if (pages.includes(filename.toString())) {
      fs.readFile(filename, function (err, data) {~
        if (err) throw err;

        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile("./404.html", function (err, data) {
        if (err) throw err;

        res.writeHead(404, { "content-type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);
 */
