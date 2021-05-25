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
    res.status(404).json({ error: e.message });
  }
});

// post a new review
app.post("/api/review", async (req, res) => {
  try {
    const { id } = req.body.id;
    const { review_person } = req.body.review_person;
    const { reviewer_name } = req.body.reviewer_name;
    const { email } = req.body.email;
    const { q1 } = req.body.q1;
    const { q2 } = req.body.q2;
    const { q3 } = req.body.q3;
    const { q4 } = req.body.q4;
    const { q5 } = req.body.q5;
    const { additional_feedback } = req.body.additional_feedback;

    const review = await createReview(
      id,
      review_person,
      reviewer_name,
      email,
      q1,
      q2,
      q3,
      q4,
      q5,
      additional_feedback
    );

    return res.json(review);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
});

module.exports = app;
