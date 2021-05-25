const express = require("express");
const cors = require("cors");
const personDb = require("./services/persondb.js");
const reviewDb = require("./services/reviews.js");

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
    const studentList = await personDb.getAllStudents();
    res.json(studentList);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get("/api/instructors", async (req, res) => {
  try {
    const instructorList = await personDb.getAllInstructors();
    res.json(instructorList);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// post a new review
app.post("/api/review", async (req, res) => {
  try {
    const reviewer_name = req.body.reviewer_name;
    const email = req.body.email;
    const review_person = req.body.review_person;
    const term = req.body.term;
    const class_name = req.body.class_name;
    const q1 = req.body.q1;
    const q2 = req.body.q2;
    const q3 = req.body.q3;
    const q4 = req.body.q4;
    const q5 = req.body.q5;
    const additional_feedback = req.body.additional_feedback;

    const review = await reviewDb.createReview(
      reviewer_name,
      email,
      review_person,
      term,
      class_name,
      q1,
      q2,
      q3,
      q4,
      q5,
      additional_feedback
    );
    console.log(res.json(review));
    return res.json(review);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = app;
