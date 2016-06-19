var should = require("chai").should(),
expect = require("chai").expect,
assert = require("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080");

describe("Testing the getAllArticles route", function(err){
  it("should handle the request", function(done){
url.get("/api/getAllArticles")
          .expect('Content-Type', /json/)//application/json; charset=utf-8
          .expect(200)
          .end(function(err,res){
          if (err) {
				        throw err;
			    }
          done();
        });
  });
});

describe("Testing the saveArticle route", function(err){
  it("should handle the request", function(done){
      url.post("/api/saveArticle")
          .type('form')
          .send({title: "TajMahal"})
          .expect(200)
          .end(function(err,res){
          if (err) {
				        throw err;
			    }
          done();
        });
  });
});

describe("Testing the register route", function(err){
  it("should handle the request", function(done){
      url.post("/api/user/register")
          .type('form')
          .send({name: "ram"})
          .send({email: "ram@wipro.com"})
          .send({password: "wipro@123"})
          .expect(200)
          .end(function(err,res){
          if (err) {
				        throw err;
			    }
          done();
        });
  });
});


describe("Testing the login route", function(err){
  it("should handle the request", function(done){
      url.post("/api/user/login")
          .type('form')
          .send({email: "ram@wipro.com"})
          .send({password: "wipro@123"})
          .expect(200)
          .end(function(err,res){
          if (err) {
				        throw err;
			    }
          done();
        });
  });
});
