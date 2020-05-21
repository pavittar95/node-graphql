const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    username: String
  }
  type Pet {
    id: ID!
    createdAt: String
    name: String
    type: String
  }

  type Query {
    pets: [Pet]!
  }
`;

module.exports = typeDefs;
