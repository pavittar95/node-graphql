const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const path = require("path");
const data = require("./db.json");
const adapter = new FileSync(path.join(__dirname, "db.json"));
const db = low(adapter);

// console.log(data, db.getState());
if (!Object.keys(db.getState()).length) {
  db.setState(data);
}
console.log(db.getState());
// db.write();

const createPetModel = require("../models/pet");
const createUserModel = require("../models/user");

module.exports = {
  models: {
    Pet: createPetModel(db),
    User: createUserModel(db),
  },
  db,
};
