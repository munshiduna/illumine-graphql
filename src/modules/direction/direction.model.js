import mongoose from "mongoose";
const Schema = mongoose.Schema;

const DirectionSchema = new Schema({
	branchId: {
		type: Schema.Types.String,
		required: true,
	},
	name: {
		type: Schema.Types.String,
		required: true,
	},
});

export const Direction = mongoose.model("Direction", DirectionSchema);