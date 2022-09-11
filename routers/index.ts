import {Router} from "express";
import authRouter from "./authRouter.js";
import credenciaisRouter from "./credenciaisRouter.js";
import notaRouter from "./notasRouter.js";
const router = Router();

router.use(authRouter);
router.use(credenciaisRouter);
router.use(notaRouter);
export default router;