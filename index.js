const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
