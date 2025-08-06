import db from "../config/db.sql.js";

const getAllUser = async (req, res) => {
	try {
		const [users] = await db.query("Select * from person limit 100");
		res.status(500).json({
			success: true,
			data: users,
		});
	} catch (error) {
		console.error("Error fetching user", error.message);
		res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
};
const addUser = (req, res) => {};
const deleteUser = (req, res) => {};

export { getAllUser, addUser, deleteUser };
