import { gql } from "apollo-server-express";

const typeDefs = gql`
	extend type Query {
		users: [User!]!
	}

	extend type Mutation {
		createUser(userName: String!, password: String!):User
	}

	type User {
		id: ID!
		userName: String!
		password: String!
	}
`;

module.exports = { typeDefs };