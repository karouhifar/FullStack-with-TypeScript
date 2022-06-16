import { Router } from "express";
import { get ,post } from "../controller";

const router = Router();

router.get('/', get );

router.post('/', post );

export default router;
