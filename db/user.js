const nanoid = require("nanoid");

const createUserModel = (db) => ({
  findMany: (filter) =>
    db.get("user").filter(filter).orderBy(["createdAt"], ["desc"]).value(),
});

module.exports = createUserModel;
