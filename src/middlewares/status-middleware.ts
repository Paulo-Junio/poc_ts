import { status} from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import prisma from "../database/db.js";
import { statusSchema } from "../models/status-schema.js";

type StatusInput = Omit<status, "id" | "createdAt">

export const statusPostValidation = (req: Request, res: Response, next: NextFunction) => {
    const status  = req.body as StatusInput;

    const {error} =  statusSchema.validate(status,{abortEarly: false});

    if (error) {
        
        return res.status(400).send(error.message);
    }
    next();
};

export const statusUpdateValidation = async (req: Request, res: Response, next:NextFunction) => {
    try{
        const id = Number(req.params.id);
        const status  = req.body as StatusInput;
        const {error} =  statusSchema.validate(status,{abortEarly: false});
        if (error) {
        
            return res.status(400).send(error.message);
        }

        const statusExist = await prisma.status.findFirst({
            where: {id}
        });

        if(!statusExist){
            return res.status(404).send("O status não existe.")
        }


        
    } catch(err){
        res.sendStatus(500) 
    }
    next()
};

export const statusDeleteValidation = async (req: Request, res: Response, next:NextFunction) => {
    try{
        const id = Number(req.params.id);
        const statusExist = await prisma.status.findFirst({
            where: {id}
        });

        if(!statusExist){
            return res.status(404).send("O status não existe")
        }

        const statusId = id;
        const toDoExist = await prisma.to_do.findFirst({
            where:{statusId}
        })
       
        if(toDoExist){
            return res.status(400).send("Esse status possui tarefas atreladas a ele.")
        }

        next()
    } catch(err){
        res.sendStatus(500) 
    }
};
