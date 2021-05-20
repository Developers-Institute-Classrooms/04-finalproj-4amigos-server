const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// Routes mock data
const reviews = require("./data.json");

// testing 'hello world' response on the '/' path
app.get("/api", async (req, res) => {
  res.json({ message: "Hello World" });
});

// test healthcheck route
app.get("/api/healthcheck", async (req, res) => {
  res.json({ message: "Health check working!" });
});

// get one
app.get("/api/reviews", async (req, res) => {
  return res.json(reviews[0]);
});

// get all
app.get("/api/all-reviews", async (req, res) => {
  return res.json({ reviews });
});

// get student list
app.get("/api/students", async (req, res) => {
  try {
    const studentList = await getAllStudents();
    res.json(studentList);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = app;
