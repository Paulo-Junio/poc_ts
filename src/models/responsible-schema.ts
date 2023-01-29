import joi from "joi";

export const responsibleSchema = joi.object({
    name: joi.string().min(3).required(),
    surname: joi.string().min(1).required(),
    contact: joi.string().min(11).max(13).required()
});