import mongoose from "mongoose";
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	userName: {
		type: Schema.Types.String,
		required: true,
		unique: true,
		index: true,
		lowercase: true,
		trim: true,
	},
	password: {
		type: Schema.Types.String,
		required: true,
	},
});

UserSchema.pre("save", async function save(next) {

	if (!this.isModified("password")) return next();
	try {
		const salt = await bcrypt.genSalt(10);
		this.password = await bcrypt.hash(this.password, salt);
		return next();
	} catch (err) {
		return next(err);
	}
});

UserSchema.methods.validatePassword = async function validatePassword(data) {

	return bcrypt.compare(data, this.password);
};

export const User = mongoose.model("User", UserSchema);