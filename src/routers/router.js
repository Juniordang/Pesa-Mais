import { Router } from "express";
import * as balanceController from "../controllers/balanceController.js"
const router = Router();

router.post("/addAll", balanceController.addAll);

// rotas get
router.get("/getAll", balanceController.getAll);
router.get("/balance/:id", balanceController.getById);
router.get("/balance", balanceController.getFilter);

export default router;