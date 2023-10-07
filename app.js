const express = require("express");

const app = express();

const PORT = 5000;

app.use(express.static(__dirname + "/public"));
app.get("/homepage", (req, res) => {
  res.sendFile(__dirname + "/views/homepage.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.listen(PORT, () => {
  console.log("Connected", PORT);
});
