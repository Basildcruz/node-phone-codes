var codes = require("../index"),
    should = require("should");

describe("Codes", function() {
  it("get all entries", function() {
    var db = codes.getAll();
    db.should.type("object");
    for(var cc in db) {
      cc.should.type("string");
      var rec = db[cc];
      rec.should.type("object");
      rec.code.should.type("number");
      rec.name.should.type("string");
      rec.code.should.greaterThan(0);
      rec.code.should.not.equal("");
    }
  });

  it("check one country", function() {
    var code = codes.get("US");
    code.should.equal(1);
  });
});