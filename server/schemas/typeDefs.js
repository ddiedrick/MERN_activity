const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]!
  }

  type Book {
    bookId: String!
    title: String
    authors: [String]
    description: String!
    image: String
    link: String
  }

  type Query {
    me: User
  }

  type Mutation {
    createUser( username: String!, email: String!,  password: String!): User
    saveBook( bookId: String!, title: String ): Book
    
  }
`;

module.exports = typeDefs;