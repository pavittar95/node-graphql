const { gql } = require("apollo-server");

const typeDefs = gql`
  enum Animal {
    CAT
    DOG
  }

  type User {
    id: ID!
    username: String
    pets: [Pet]!
  }

  type Pet {
    id: ID!
    createdAt: String
    name: String
    type: Animal
  }

  input PetInput {
    name: String
    type: Animal
  }

  type Query {
    user: User!
    pets(input: PetInput): [Pet]!
    pet(id: ID!): Pet!
  }

  type Mutation {
    addPet(input: PetInput!): Pet!
  }
`;

module.exports = typeDefs;
