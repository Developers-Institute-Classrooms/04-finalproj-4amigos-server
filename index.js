const express = require("express");
const cors = require("cors");

const app = express();

// middleware

app.use(express.json());
app.use(cors());

// Routes

app.get("/", (req, res) => {
  res.json("Hello World");
});

module.exports = app;
