const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Products {
    _id: ID
    productName: String
    productImg: String
    productPrice: String
    #  inStock: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    user(_id: ID!): User
    products: [Products]
    product(productName: String!): Products
    #tutors: [Tutor]
    # tutor(_id: String!): Tutor
    #chatrooms: [Chatroom]
    # chatroom(chatroomName: String!): Chatroom
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    addProduct(
    productName: String,
    productPrice: String,
    productImg: String
  ): Products
  
    updateProduct( productId: ID!, productName: [String!], productPrice: [String!], productImg: String): Products

    removeProduct( productId: ID!): Products
    # This allows user to update their profile
    # updateUser(userId: ID! ,skills: [String]!, img: String): User
    # This is creating anew skill for database
    # addNewSkill(skillName: String!): Skill
    # This allows us to assign a skill from database to user
    # addSkillToUser(userId: ID!, skillId: [ID]!): User
    # This will add an image to a user
    #addImageToUser(userId: ID!, image: String!): User
    # This will remove a skill from a user
    # removeSkillFromUser(userId: ID!, skillId: ID!): User
    # This will permanently delete a skill from database (ONLY USE IN TESTING)
    # removeSkill(skillId: ID!): Skill
    # This will allow a user to login
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
