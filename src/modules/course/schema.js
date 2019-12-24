import { gql } from "apollo-server-express";

const typeDefs = gql`
	extend type Query {
		courses(directionId: String!): [Course!]!
	}

	extend type Mutation {
		createCourse(directionId: String!, name: String!):Course
	}

	type Course {
		id: ID!
		name: String!
	}
`;

module.exports = { typeDefs };