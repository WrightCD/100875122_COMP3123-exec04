var express = require("express");
const res = require("express/lib/response");

const SERVER_PORT = 8090;
var app = express();

app.get("/hello", (req, res) => {
  res.status(200).send("<h1>Hello Express JS");
});

//Path Parameter
app.get("/user/:firstname/:lastname", (req, res) => {
  res.json(req.params);
});

app.post("/user/:firstname/:lastname", (req, res) => {
  res.json(req.params);
});

//QueryString
app.get("/user", (req, res) => {
  res.json(req.query);
});

app.listen(SERVER_PORT, () => {
  console.log(`Server is running at http://localhost:${SERVER_PORT}/`);
});
