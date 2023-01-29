import { responsible } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import prisma from "../database/db.js";
import { responsibleSchema } from "../models/responsible-schema.js";

type responsibleInput = Omit<responsible, "id" | "createdAt">

export const responsiblePostValidation = (req: Request, res: Response, next: NextFunction) => {
    const responsible  = req.body as responsibleInput;

    const {error} =  responsibleSchema.validate(responsible,{abortEarly: false});

    if (error) {
        return res.status(400).send(error.message);
    }
    next();
};

export const responsibleUpdateValidation = async (req: Request, res: Response, next:NextFunction) => {
    try{
        const id = Number(req.params.id);
        const responsibleExist = await prisma.responsible.findFirst({
            where: {id}
        });

        if(!responsibleExist){
            return res.status(404).send("O usuário não existe.")
        }
        next()
    } catch(err){
        res.sendStatus(500) 
    }
};

export const responsibleDeleteValidation = async (req: Request, res: Response, next:NextFunction) => {
    try{
        const id = Number(req.params.id);
        const responsibleExist = await prisma.responsible.findFirst({
            where: {id}
        });

        if(!responsibleExist){
            return res.status(404).send("O usuário não existe")
        }

        const resposibleId = id;
        const toDoExist = await prisma.to_do.findFirst({
            where:{resposibleId}
        })
        if(toDoExist){
            return res.status(400).send("Esse usuário possui tarefas atreladas a ele.")
        }

        next()
    } catch(err){
        res.sendStatus(500) 
    }
};
