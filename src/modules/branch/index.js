import { Branch } from "./branch.model";
import { typeDefs } from "./schema";

const resolvers = {
	Query: {
		branches: async () => await Branch.find(),
	},
	Branch: {
		code: (branch) => String(branch.code).padStart(5, 0),
	},
	Mutation: {
		createBranch: async (_, { name, code, isHead }) => {
			const branch = new Branch({
				name,
				code: code || null,
				isHead: isHead !== undefined ? isHead : false,
			});
			await branch.save();
			return branch;
		}
	}
};

module.exports = { typeDefs, resolvers, };