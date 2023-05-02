const { AuthenticationError } = require('apollo-server-express');
const { Products  } = require('../models/Products');
const { User  } = require('../models/User');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    //Resolver for finding chatrooms
    // chatrooms: async () => {
    //   return Chatroom.find();
    // },
    // //Resolver for finding single chatroom by name
    // chatroom: async (parent, { chatroomName }, context) => {
    //   return Chatroom.findOne({ chatroomName: chatroomName });
    // },
    users: async () => {
      return User.find();
    },
    user: async (parent, { _id }) => {
      return User.findById({ _id });
    },
    products: async () => {
      return Products.find();
    },
    products: async () => {
      return Products.findOne();
    },
    // tutor: async (parent, { _id }) => {
    //   return Tutor.findOne( {_id });
    // },
  },

  Mutation: {
    // addProduct: async (parent, { productName, productPrice, productImg }) => {
    //   const product = await Products.create({ productName, productPrice, productImg });
    //   return product;
    // },
    addProduct: async (parent, { productName, productPrice, productImg }) => {
        const product = await Products.create({ productName, productPrice, productImg });
        return product;
      },
    //Adds a message to a chatroom
    // addMessage: async (
    //   parent,
    //   { chatroomName, messageText, userId },
    //   context
    // ) => {
    //   const user = await User.findById(userId);
    //   const chatroomInstance = await Chatroom.findOne({
    //     chatroomName: chatroomName,
    //   });
      //Creates a new message document from the messages subschema
    //   const newMessage = chatroomInstance.messages.create({
    //     messageText: messageText,
    //     messageAuthor: user.username,
    //   });
    //   chatroomInstance.messages.push(newMessage);
    //   //save updated chatroom instance
    //   chatroomInstance.save();
    //   return chatroomInstance.toJSON();
    // },
    removeProduct: async (parent, { productId }) => {
      return Products.findOneAndDelete({ _id: productId });
    },
    updateProduct: async (parent, { productId, productName, productPrice }) => {
      return Products.findOneAndUpdate({
        _id: productId,
        productName,
        productPrice,
        productImg,
      });
    },
    // updateUser: async (parent, { userId, username, img, skills }) => {
    //   return User.findByIdAndUpdate(userId, {
    //     img,
    //     username,
    //     skills,
    // });
    // },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // This creates a new skill in database DOESN'T ASSIGN TO USER
    // addNewSkill: async (parent, { skillName }) => {
    //   return Skill.create({ skillName: skillName });
    // },
    // Allows you to add a skill from database to a user
    // addSkillToUser: async (parent, { userId, skillId, skillNames }) => {
    //   const skills = await Skill.find({ name: { $in: skillNames } });
    //   const user = await User.findOneAndUpdate(
    //     { _id: userId },
    //     {
    //       $addToSet: {
    //         skills: skills.map((skill) => {
    //           skill._id;
    //           skill.skillName;
    //         }),
    //       },
    //     },
    //     {
    //       new: true,
    //     }
    //   );
    //   return { ...user };
    // },
    // This will allow you to add an image to a user
    // addImageToUser: async (parent, { userId, image }) => {
    //   return User.findByIdAndUpdate(userId, { image: image }, { new: true });
    // },
    // This will remove skills from a user
    // removeSkillFromUser: async (parent, { skillId, userId }) => {
    //   return User.findOneAndUpdate(
    //     { _id: userId },
    //     { $pull: { skills: { _id: skillId } } },
    //     { new: true }
    //   );
    // },
    // This will remove a skill from the database
    removeProduct: async (parent, { productId }) => {
      return Products.findByIdAndDelete(productId).lean();
    },
    // This allows users to login
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      // If the username isn't found throw following error
      if (!user) {
        throw new AuthenticationError('No user found with this username');
      }
      const correctPw = await user.isCorrectPassword(password);
      // If the password doesn't match the one in the db throw error
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;