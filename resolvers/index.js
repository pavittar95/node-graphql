module.exports = {
  Query: {
    pets(_, args, ctx, info) {
      return ctx.models.Pet.findMany();
    },
  },
  Pet: {},
  User: {},
};
