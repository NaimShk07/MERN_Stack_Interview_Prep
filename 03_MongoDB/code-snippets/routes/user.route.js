import express from "express";
import {
	createUser,
	getAllUser,
	getUserById,
	updateUserById,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").get(getAllUser).post(createUser);
router.route("/:id").get(getUserById).patch(updateUserById);

export default router;
