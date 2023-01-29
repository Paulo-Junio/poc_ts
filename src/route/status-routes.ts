import { Router } from "express";
import { getStatus, postStatus, updateStatus, deleteStatus } from "../controllers/status-controlles.js";
import { statusPostValidation, statusUpdateValidation, statusDeleteValidation } from "../middlewares/status-middleware.js";


const router = Router();

router.get('/status', getStatus);
router.post('/status',statusPostValidation,postStatus);
router.put('/status/:id',statusUpdateValidation,updateStatus);
router.delete('/status/:id',statusDeleteValidation,deleteStatus);


export default router;