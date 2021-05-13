const express = require("express");
const cors = require("cors");

const app = express();

// middleware

app.use(express.json());
app.use(cors());

// Routes

// testing 'hello world' response on the '/' path
app.get("/api", async (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/api/healthcheck", async (req, res) => {
  res.json({ message: "Health check working!" });
});

module.exports = app;
