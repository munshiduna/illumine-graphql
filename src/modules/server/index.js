import { gql } from "apollo-server-express";

const typeDefs = gql`
	extend type Query {
		serverVersion: Float!
	}
`;

const resolvers = {
	Query: {
		serverVersion: () => 1.0,
	},
};

module.exports = { typeDefs, resolvers, };