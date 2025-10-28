import mongoose from "mongoose";

const personSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		jobTitle: {
			type: String,
		},
		gender: {
			type: String,
		},
	},
	{ timestamps: true }
);

export const Person = mongoose.model("person", personSchema);
