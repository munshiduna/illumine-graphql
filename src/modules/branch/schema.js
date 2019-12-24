import { gql } from "apollo-server-express";

const typeDefs = gql`
	extend type Query {
		branches: [Branch!]!
	}

	extend type Mutation {
		createBranch(
			name: String!,
			code: Int
			isHead: Boolean
		):Branch
	}

	type Branch {
		id: ID!
		name: String!
		code: String!
		isHead: Boolean!
	}
`;

module.exports = { typeDefs };