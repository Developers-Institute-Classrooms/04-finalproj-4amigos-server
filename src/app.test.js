const app = require("./app");
const request = require("supertest")(app);
// ----------------------------------------------------------------------------

// Mock data
// const data = require("./data.json");
// ----------------------------------------------------------------------------

// TODO
// const { createReview } = require("../services/reviews");
// insert other objects above inside squiggly brackets as they are created for other routes
// ----------------------------------------------------------------------------

// TODO
// const {
//   createPerson,
//   getAllStudents,
//   getAllInstructors,
// } = require("./services/persondb");
// ----------------------------------------------------------------------------

// Initially started writing tests with jest coverage but found it caused a lot of headaches with branch conflicts by having a separate branch.
// I think like the other team we struggled having tests all done and working prior to creating routes, and this caused our CI to fail along the journey.
// We've left a large amount of tests commented as realise it's very much a work in progress, as is our routes. If we do continue to develop this project
// individually than it would be quite interesting to compile a wide range of tests across different files. Certainly got a large appreciation of how big
// and important a topic writing test codes actually is.

// Hello World test using supertest
describe("GET /api", function () {
  it("responds with json", function (done) {
    request
      .get("/api")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  // Healthcheck test
  it("should return a valid healthcheck message", function (done) {
    request
      .get("/api/healthcheck")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  // Error Handling
  describe("error handling", function () {
    it("responds to a bad request", function (done) {
      request
        .get("/somethingrandomandincorrect")
        .set("Accept", "application/json")
        .expect("Content-Type", /text/)
        .expect(404, done);
    });
  });

  // TODO
  // todo/tidy up. some working some need adjusting. Planned to make a test folder and separate per file kind of like the components on front end, ran out of time.

  // describe("institute reviews", () => {
  //   it("should get a review by id", () => {
  //     const review = data[parseInt(JSON.stringify(Math.random())[2])];
  //     expect(getById(review.ID)).toEqual(review);
  //   });

  //   // get student reviews
  //   it("should get all student reviews", () => {
  //     const studentReviews = getAllStudents("student");
  //     studentReviews.map((review) => {
  //       expect(review.person_type).toEqual("student");
  //     });
  //   });

  //   // get instructor reviews
  //   it("should get all instructor reviews", () => {
  //     const instructorReviews = getAllInstructors("instructor");
  //     instructorReviews.map((review) => {
  //       expect(review.person_type).toEqual("instructor");
  //     });
  //   });

  //   //create student reviews
  //   it("should create a new student review with the correct id", () => {
  //     const newReviewer = {
  //       first_name: "Joe",
  //       last_name: "Bloggs",
  //       class_name: "Full_Stack",
  //       person_type: "Student",
  //     };
  //     const expected = createPerson(newReviewer);
  //     expect(expected).toHaveProperty("id");
  //     expect(expected).toEqual(newReviewer);
  //   });

  //   //create instructor reviews
  //   it("should create a new instructor review with the correct id", () => {
  //     const newReviewer = {
  //       first_name: "PC",
  //       last_name: "Principal",
  //       class_name: "Full_Stack",
  //       person_type: "Teacher",
  //     };
  //     const expected = createPerson(newReviewer);
  //     expect(expected).toHaveProperty("id");
  //     expect(expected).toEqual(newReviewer);
  //   });
  // });

  // ----------------------------------------------------------------------------
  //  Reviews.js below

  // describe("creating a new review", () => {
  //   it("should create a new review", () => {
  //     const result = createReview();
  //     expect(result).toBeInTheDocument();
  //     console.log(result);
  //   });
  // });

  // describe("", () => {
  //   it("should get all reviews", () => {});
  // });

  // describe("", () => {
  //   it("should update a review", () => {});
  // });

  // describe("", () => {
  //   it("should delete a review", () => {});
  // });

  // Get Student List
  // it("should return student reviews", function (done) {
  //   request
  //     .get("/api/students")
  //     .set("Accept", "application/json")
  //     .expect("Content-Type", /json/)
  //     .expect(200, done);
  // });

  // // Get Instructor List
  // it("should return instructor reviews", function (done) {
  //   request
  //     .get("/api/instructors")
  //     .set("Accept", "application/json")
  //     .expect("Content-Type", /json/)
  //     .expect(200, done);
  // });
});

// // Create a new reviews
// describe("POST /api/review", function () {
//   it("responds with json", function (done) {
//     request
//       .get("/api")
//       .set("Accept", "application/json")
//       .expect("Content-Type", /json/)
//       .expect(200, done);
//   });
// });

// // it("should return a number for id field", () => {
// //   const result = data;
// //   console.log(result);
// //   expect(typeof result.id === "number").toBe(true);
// // });
// // it("should return a string type for name field", () => {
// //   const result = data.name;
// //   expect(typeof result.name === "string").toBe(true);
// // });
// // it("", () => {});
