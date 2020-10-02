let chai = require("chai");
let chaiHttp = require("chai-http");
let myExports = require("../server");
let app = myExports.app;
let should = chai.should();
let server = myExports.server;

chai.use(chaiHttp);
//Test the get route
describe("/GET sparkpost", () => {
  it("it should GET all the users", (done) => {
    chai
      .request(app)
      .get("/sparkpost")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(0);
        done();
      });
  });
});
describe("/POST sparkpost", () => {
  it("it should POST a user", (done) => {
    let user = {
      name: "Jake Rosada",
      age: 22,
    };
    chai
      .request(app)
      .post("/sparkpost")
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("message");
        res.body.should.have.property("name");
        res.body.should.have.property("age");
        done();
      });
  });
});
describe("/POST sparkpost", () => {
  it("it should reject a POST for user", (done) => {
    let user = {
      name: "Jake Rosada",
    };
    chai
      .request(app)
      .post("/sparkpost")
      .send(user)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("object");
        res.body.should.have.property("errors");
        done();
      });
  });
});
server.close();
