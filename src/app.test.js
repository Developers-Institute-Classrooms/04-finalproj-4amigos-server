const app = require("./app");
const request = require("supertest")(app);
const data = require("./data.json");

describe("GET /api", function () {
  it("responds with json", function (done) {
    request
      .get("/api")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("responds to a bad request", function (done) {
    request
      .get("/somethingrandomandincorrect")
      .set("Accept", "application/json")
      .expect("Content-Type", /text/)
      .expect(404, done);
  });
});

describe("GET /api/all-reviews", () => {
  it("should return all reviews", () => {
    expect(data).toBe(true);
  });

  it("should return a number for id field", () => {
    const result = data;
    console.log(result);
    expect(typeof result.id === "number").toBe(true);
  });
  it("should return a string type for name field", () => {
    const result = data.name;
    expect(typeof result.name === "string").toBe(true);
  });
  it("", () => {});
});
