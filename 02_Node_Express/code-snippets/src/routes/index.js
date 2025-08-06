import { Router } from "express";
import userRoutes from "./user.routes.js";

const router = Router();

router.use("/v1/user", userRoutes);
// router.use("/api/v1/product", productRoutes);

export default router;
