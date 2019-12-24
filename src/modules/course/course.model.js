import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
	directionId: {
		type: Schema.Types.String,
		required: true,
	},
	name: {
		type: Schema.Types.String,
		required: true,
	},
});

export const Course = mongoose.model("Course", CourseSchema);