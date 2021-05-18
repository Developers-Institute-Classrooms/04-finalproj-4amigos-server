const app = require("./app");
const request = require("supertest")(app);

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
