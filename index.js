var fs = require("fs"),
    sys = require("sys");

var db = null;
try {
  db = JSON.parse(fs.readFileSync("./db.json"));
}
catch(ex) {
  sys.puts("Fail to load phone codes database, it seems DB corrupted or not exists");
}

/**
 * returns whole codes databse database
 * @return {Object} database
 */
exports.getAll = function() {
  return JSON.parse(JSON.stringify(db));
};

/**
 * get phone code for country
 * @param  {String} cc
 * @return {Number} code
 */
exports.get = function(cc) {
  if(db[cc]) {
    return db[cc].code;
  }
  return null;
};