import e from "express";
import productControllers from "../controllers/product.controller.js";

const router = e.Router();

router.post("/", productControllers.store);
router.get("/", productControllers.showAll);

export default router;