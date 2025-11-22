import { Router } from "express";
import {
	addUser,
	deleteUser,
	getAllUser,
} from "../controller/user.controller.js";

const router = Router();

router.get("/", getAllUser);
router.get("/add", addUser);
router.get("/delete", deleteUser);

export default router;
