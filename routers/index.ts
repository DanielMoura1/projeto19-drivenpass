import {Router} from "express";
import authRouter from "./authRouter.js";
import credenciaisRouter from "./credenciaisRouter.js";
import notaRouter from "./notasRouter.js";
import cartaoRouter from "./cartaoRouter.js";
import wifiRouter from "./wifiRouter.js";
const router = Router();

router.use(authRouter);
router.use(credenciaisRouter);
router.use(notaRouter);
router.use(cartaoRouter);
router.use(wifiRouter);
export default router;