const { User } = require('../models')
//const { Book } = require('../models')


const resolvers = {
  Query: {
    me: async () => {
      return User;
    }
  },

  Mutation: {
    createUser: async (parent, { name, email, password }) => {
      return User.create(
        {username : name},
        {email: email},
        {password: password}
        );
    },
    saveBook: async (parent, { bookId, title }) => {
      return Book(
        { _id: bookId },
        {title: title },
        {
            $addToSet: { savedBooks: { bookId, title } },
          },
        {
          new: true,
          runValidators: true,
        }
      );
    },
   
    
  },
};

module.exports = resolvers;