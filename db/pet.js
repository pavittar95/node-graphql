const nanoid = require("nanoid");

const createPetModel = (db) => ({
  findMany: (filter = {}) => {
    console.log(db.get("pet").find({ id: "5ebb8bd465ab8516cb75dbe8" }).value());

    return db
      .get("pet")
      .filter(filter)
      .orderBy(["createdAt"], ["desc"])
      .value();
  },
});

module.exports = createPetModel;
