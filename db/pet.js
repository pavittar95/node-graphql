const nanoid = require("nanoid");

const createPetModel = (db) => ({
  findMany: (filter = {}) => {
    return db
      .get("pet")
      .filter(filter)
      .orderBy(["createdAt"], ["desc"])
      .value();
  },
});

module.exports = createPetModel;
