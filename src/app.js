const express = require("express");
const cors = require("cors");
const { createReview } = require("./services/reviews.js");
const {
  createPerson,
  getAllStudents,
  getAllInstructors,
} = require("./services/persondb.js");

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
  console.log("Health check message hit");
  res.json({ message: "Health check working!" });
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

app.get("/api/instructors", async (req, res) => {
  try {
    const instructorList = await getAllInstructors();
    res.json(instructorList);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// post a new review
app.post("/api/review", async (req, res) => {
  try {
    const review = await createReview(req.body);
    return res.json(review);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = app;
