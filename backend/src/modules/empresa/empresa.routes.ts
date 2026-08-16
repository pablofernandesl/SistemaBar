import { Router } from "express";
import { EmpresaController } from "./empresa.controller";

const router = Router();

const controller = new EmpresaController();

router.get("/", controller.listar);

export default router;