import { User } from "./user.model";
import { typeDefs } from "./schema";

const resolvers = {
	Query: {
		users: async () => await User.find(),
	},
	Mutation: {
		createUser: async (_, { userName, password }) => {
			const user = new User({ userName, password });
			await user.save();
			return user;
		}
	}
};

module.exports = { typeDefs, resolvers, };