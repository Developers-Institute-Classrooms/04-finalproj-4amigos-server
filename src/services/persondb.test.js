// const request = require("supertest")(test);
const data = require("../data.json");
data.reverse();

const {
  createPerson,
  getAllStudents,
  getAllInstructors,
} = require("./persondb");

describe("institute reviews", () => {
  it("should get a review by id", () => {
    const review = data[parseInt(JSON.stringify(Math.random())[2])];
    expect(getById(review.ID)).toEqual(review);
  });

  // get student reviews
  it("should get all student reviews", () => {
    const studentReviews = getAllStudents("student");
    studentReviews.map((review) => {
      expect(review.person_type).toEqual("student");
    });
  });

  // get instructor reviews
  it("should get all instructor reviews", () => {
    const instructorReviews = getAllInstructors("instructor");
    instructorReviews.map((review) => {
      expect(review.person_type).toEqual("instructor");
    });
  });

  //create student reviews
  it("should create a new student review with the correct id", () => {
    const newReviewer = {
      first_name: "Joe",
      last_name: "Bloggs",
      class_name: "Full_Stack",
      person_type: "Student",
    };
    const expected = createPerson(newReviewer);
    expect(expected).toHaveProperty("id");
    expect(expected).toEqual(newReviewer);
  });

  //create instructor reviews
  it("should create a new instructor review with the correct id", () => {
    const newReviewer = {
      first_name: "PC",
      last_name: "Principal",
      class_name: "Full_Stack",
      person_type: "Teacher",
    };
    const expected = createPerson(newReviewer);
    expect(expected).toHaveProperty("id");
    expect(expected).toEqual(newReviewer);
  });
});
