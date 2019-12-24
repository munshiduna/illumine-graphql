import { Direction } from "./direction.model";
import { typeDefs } from "./schema";

const resolvers = {
	Query: {
		directions: async (_, { branchId }) => await Direction.find({ branchId }),
	},
	Mutation: {
		createDirection: async (_, { branchId, name }) => {
			const course = new Direction({ branchId, name, });
			await course.save();
			return course;
		}
	}
};

module.exports = { typeDefs, resolvers, };