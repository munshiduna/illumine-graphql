import { gql } from "apollo-server-express";

const typeDefs = gql`
	extend type Query {
		users: [User!]!
		profile(userName: String!):Profile
	}

	extend type Mutation {
		createUser(
			userName: String!,
			password: String!
			firstName: String!
			lastName: String!
		):User
	}

	type User {
		id: ID!
		userName: String!
		firstName: String!
		lastName: String!
	}

	type Profile {
		fullName: String
		userName: String!
	}
`;

module.exports = { typeDefs };