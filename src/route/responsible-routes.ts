import { Router } from "express";
import { getResponsible, postResponsible, updateResponsible, deleteResponsible } from "../controllers/responsible-controllers.js";
import { responsiblePostValidation, responsibleUpdateValidation, responsibleDeleteValidation } from "../middlewares/responsible-middleware.js";

const router = Router();

router.get('/responsible',getResponsible);
router.post('/responsible',responsiblePostValidation,postResponsible);
router.put('/responsible/:id',responsibleUpdateValidation,updateResponsible);
router.delete('/responsible/:id',responsibleDeleteValidation, deleteResponsible);


export default router;