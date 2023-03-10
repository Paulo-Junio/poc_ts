import { Router } from "express";
import { getTarefas, postTarefas, updateTarefas, deleteTarefas } from "../controllers/tarefas-controllers.js";
import { tarefasValidation, tarefaUpdateDeleteValidation } from "../middlewares/tarefas-middleware.js";
var router = Router();
router.get('/tarefas', getTarefas);
router.post('/tarefas', tarefasValidation, postTarefas);
router.put('/tarefas/:id', tarefaUpdateDeleteValidation, updateTarefas);
router["delete"]('/tarefas/:id', tarefaUpdateDeleteValidation, deleteTarefas);
router.get('/tarefas/usuario');
export default router;
