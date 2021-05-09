const express = require("express");
const app = express();

// hello world api
app.get("/", (req, res) => {
  res.send({ message: "hello world" });
});

// export our express app
module.exports = app;
