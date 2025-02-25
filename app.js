require("dotenv/config");
const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the root page" });
});

app.get("/users/name", (req, res) => {
  res.json({ message: "Get user name.", data: [{ name: "Demo User" }] });
});

app.get("/users/name/id", (req, res) => {
  res.json({
    message: "Get user id.",
    data: [{ name: "Demo User", id: "123456" }],
  });
});

app.all("*", (req, res) => {
  res.json({ error: "api doesn't exists" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
