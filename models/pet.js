const { nanoid } = require("nanoid");

const createPetModel = (db) => ({
  findMany: (filter = {}) => {
    const pets = db
      .get("pet")
      .filter(filter)
      .orderBy(["createdAt"], ["desc"])
      .value();
    return pets;
  },
  create: (pet) => {
    const newPet = { id: nanoid(), createdAt: Date.now(), ...pet };
    db.get("pet").push(newPet).write();
    return newPet;
  },
  findOne: (filter = {}) => db.get("pet").find(filter).value(),
});

module.exports = createPetModel;
