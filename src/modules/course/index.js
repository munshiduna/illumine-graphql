import { Course } from "./course.model";
import { typeDefs } from "./schema";

const resolvers = {
	Query: {
		courses: async (_, { directionId }) => await Course.find( { directionId }),
	},
	Mutation: {
		createCourse: async (_, { directionId, name }) => {
			const course = new Course({ directionId, name, });
			await course.save();
			return course;
		}
	}
};

module.exports = { typeDefs, resolvers, };