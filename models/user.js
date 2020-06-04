const { nanoid } = require("nanoid");

const createUserModel = (db) => ({
  findMany: (filter = {}) => {
    const users = db
      .get("user")
      .filter(filter)
      .orderBy(["createdAt"], ["desc"])
      .value();
    return users;
  },
  create: (user) => {
    const newUser = { id: nanoid(), createdAt: Date.now(), ...user };
    db.get("user").push(newUser).write();
    return newUser;
  },
  findOne: (filter = {}) => db.get("user").value(),
});

module.exports = createUserModel;
