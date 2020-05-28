const nanoid = require("nanoid");

const createPetModel = (db) => ({
  findMany: (filter = {}) =>
    db.get("pet").filter(filter).orderBy(["desc"]).value(),
});

module.exports = createPetModel;
