import joi, { boolean } from "joi";

export const tarefaSchema = joi.object({
    name: joi.string().min(3).required(),
    description: joi.string().min(3).required(),
    responsible: joi.string().min(3).required(),
    date: joi.date().required(),
    status: joi.string().valid("complet", "incomplete").required()
});