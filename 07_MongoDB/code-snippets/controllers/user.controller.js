import { Person } from "../models/person.model.js";

const createUser = async (req, res) => {
	const { firstName, lastName, email, jobTitle, gender } = req.body;
	if (
		[firstName, lastName, email, jobTitle, gender].some((value) => value == "")
	) {
		return res.status(400).json({
			success: false,
			message: "All field required",
		});
	}

	const user = await Person.create({
		firstName: firstName,
		lastName: lastName,
		email: email,
		jobTitle: jobTitle,
		gender: gender,
	});
	return res.status(201).json({
		success: true,
		message: "User created successfully",
	});
};

const getAllUser = async (req, res) => {
	const users = await Person.find({});

	return res.status(200).json({
		success: true,
		data: users,
		message: "Users fetched successfully",
	});
};

const getUserById = async (req, res) => {
	const user = await Person.findById(req.params.id);

	return res.status(200).json({
		success: true,
		data: user,
		message: "User fetched successfully",
	});
};

const updateUserById = async (req, res) => {
	const { firstName, lastName, email, jobTitle, gender } = req.body;
	if (
		[firstName, lastName, email, jobTitle, gender].some((value) => value == "")
	) {
		return res.status(400).json({
			success: false,
			message: "All field required",
		});
	}

	const user = await Person.findByIdAndUpdate(req.params.id, {
		firstName: firstName,
		lastName: lastName,
		email: email,
		jobTitle: jobTitle,
		gender: gender,
	});

	return res.status(200).json({
		success: true,
		data: user,
		message: "User updated successfully",
	});
};
export { createUser, getAllUser, getUserById, updateUserById };
