import { gql } from "apollo-server-express";

const typeDefs = gql`
	extend type Query {
		directions(branchId: String!): [Direction]!
	}

	extend type Mutation {
		createDirection(
			branchId: String!
			name: String!
		):Direction
	}

	type Direction {
		id: ID!
		name: String!
	}
`;

module.exports = { typeDefs };