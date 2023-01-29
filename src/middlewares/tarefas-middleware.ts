import { NextFunction, Request, Response } from "express";
import prisma from "../database/db.js";
import { tarefaSchema } from "../models/tarefas-schema.js";

type Tarefa = {
    name: string,
    description: string,
    responsible: string,
    date: string | Date,
    status: string
}

export const tarefasValidation = (req: Request, res: Response, next: NextFunction) => {
    const tarefa  = req.body as Tarefa;

    const {error} = tarefaSchema.validate(tarefa,{abortEarly: false});

    if (error) {
        return res.status(400).send(error.message);
    }
    res.locals.tarefa = tarefa;
    next();
};

export const tarefaUpdateDeleteValidation = async (req: Request, res: Response, next:NextFunction) => {
    try{
        const id = Number(req.params.id);
        const tarefaExist = await prisma.to_do.findFirst({
            where: {id}
        });

        if(!tarefaExist){
            return res.status(404).send("A tarefa não existe.")
        }
        
    } catch(err){
        console.log(err)
        return res.status(404).send("A tarefa selecionada não existe")
    }
    next()
};

export const usuarioValidation = async (req: Request, res: Response, next:NextFunction) => {
    try{
        const id = Number(req.params.id);
        const usuarioExist = await prisma.responsible.findUnique({
            where: {id}
        });
        if(!usuarioExist){
            return res.status(400).send("O usuário não existe")
        }
        next()
    } catch(err){
        res.sendStatus(500) 
    }
};
