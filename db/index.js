const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const data = require("./db.json");
const adapter = new FileSync("db.json");
const db = low(adapter);

if (!Object.keys(db.getState()).length) {
  db.setState(data);
}

const createPetModel = require("./pet");
const createUserModel = require("./user");

module.exports = {
  models: {
    Pet: createPetModel(db),
    User: createUserModel(db),
  },
  db,
};
