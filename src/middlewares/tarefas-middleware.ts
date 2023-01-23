import { NextFunction, Request, Response } from "express";
import connection from "../database/db.js";
import { tarefaSchema } from "../models/tarefasSchema.js";

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
        console.log(error)
        return res.sendStatus(400);
    }
    res.locals.tarefa = tarefa;
    next();
};

export const tarefaUpdateDeleteValidation = async (req: Request, res: Response, next:NextFunction) => {
    try{
        const id = req.params.id;
        const tarefaExist = await connection.query(`SELECT * FROM to_do WHERE id=$1;`, [Number(id)]);
        if(tarefaExist.rows){
            return res.sendStatus(400)
        }
        next()
    } catch(err){
        res.sendStatus(500) 
    }
};

export const usuarioValidation = async (req: Request, res: Response, next:NextFunction) => {
    try{
        const usuario = req.params.usuario;
        const usuarioExist = await connection.query(`SELECT * FROM to_do WHERE responsible=$1;`, [usuario]);
        if(!usuarioExist.rows[0]){
            return res.sendStatus(400)
        }
        next()
    } catch(err){
        res.sendStatus(500) 
    }
};
