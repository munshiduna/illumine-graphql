import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BranchSchema = new Schema({
	name: {
		type: Schema.Types.String,
		required: true,
		trim: true,
	},
	code: {
		type: Schema.Types.Number,
		unique: true,
		index: true,
	},
	isHead: {
		type: Schema.Types.Boolean,
	},
});

export const Branch = mongoose.model("Branch", BranchSchema);