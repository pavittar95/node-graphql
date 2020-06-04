module.exports = {
  Query: {
    pets(_, { input }, { models }, info) {
      return models.Pet.findMany(input);
    },
    pet(_, args, { models }, info) {
      return models.Pet.findOne({ id: args.id });
    },
    user(_, { input }, { models }, info) {
      return models.User.findOne();
    },
  },
  Mutation: {
    addPet(_, { input }, { models }, info) {
      return models.Pet.create(input);
    },
  },
  Pet: {},
  User: {
    pets(user, _, { models }) {
      console.log("models");

      return models.Pet.findMany({ owner: user.id });
    },
  },
};
