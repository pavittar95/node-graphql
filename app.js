const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const { models, db } = require("./db/index");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    // const user = db.get("user").value();
    // return { models, db, user };
    return { models, db };
  },
});

server.listen().then(({ url }) => {
  console.log(`server is running url: ${url}`);
});
