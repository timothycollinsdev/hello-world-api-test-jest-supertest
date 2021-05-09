const request = require("supertest");
const app = require("../app");

describe("test hello-world", () => {
  it("should return hello world", (done) => {
    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe("hello world");
        done();
      })
      .catch((e) => done(e));
  });
});
