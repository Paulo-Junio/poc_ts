import joi, { boolean } from "joi";

export const tarefaSchema = joi.object({
    name: joi.string().min(3).required(),
    description: joi.string().min(3).required(),
    responsibleId: joi.number().required(),
    statusId: joi.number().required()
});