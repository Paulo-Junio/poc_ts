import { Router } from "express";
import { getTarefas, postTarefas, updateTarefas, deleteTarefas, getCountByUser} from "../controllers/tarefas-controllers.js";
import { tarefasValidation, tarefaUpdateDeleteValidation, usuarioValidation } from "../middlewares/tarefas-middleware.js";

const router = Router();

router.get("/heath", (req,res) => {res.send("OK")})
router.get('/tarefas',getTarefas);
router.post('/tarefas',tarefasValidation, postTarefas);
router.put('/tarefas/:id',tarefaUpdateDeleteValidation, updateTarefas);
router.delete('/tarefas/:id',tarefaUpdateDeleteValidation, deleteTarefas);

router.get('/tarefas/:usuario', usuarioValidation ,getCountByUser)

export default router;