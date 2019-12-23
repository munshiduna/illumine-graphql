import { User } from "./user.model";
import { typeDefs } from "./schema";

const resolvers = {
	Query: {
		users: async () => await User.find(),
		profile: async (_, { userName }) => await User.findOne({ userName }),
	},
	Profile: {
		fullName: (user) => user.firstName + ' ' + user.lastName,
	},
	Mutation: {
		createUser: async (_, { userName, password, firstName, lastName }) => {
			const user = new User({ userName, password, firstName, lastName });
			await user.save();
			return user;
		}
	}
};

module.exports = { typeDefs, resolvers, };