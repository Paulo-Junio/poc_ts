import joi from "joi";

export const statusSchema = joi.object({
    statusName: joi.string().min(3).required()
});