import { Request, Response } from "express";
import tarefaRepository from "../repository/tarefas-respository.js";
import connection from "../database/db.js";

type Tarefa = {
    name: string,
    description: string,
    responsible: string,
    date: string | Date,
    status: string
}


export const getTarefas= async (req:Request ,res: Response)=>{
    try{
        const listaDeTarefas = await tarefaRepository.getTarefas();
        return res.status(200).send(listaDeTarefas.rows)

    } catch(err){
        res.sendStatus(500)
    }
};
export const postTarefas= async (req:Request ,res: Response)=>{
    try{
        const tarefa= req.body;
        await tarefaRepository.postTarefas(tarefa);
        return res.sendStatus(200)

    } catch(err){
        console.log(err)
        res.sendStatus(500)
    }

};
export const updateTarefas = async (req:Request ,res: Response) => {
    try{
        const tarefa = req.body;
        const id = req.params.id;
        await tarefaRepository.updateTarefas(tarefa, Number(id));
        return res.sendStatus(200)

    } catch(err){
        res.sendStatus(500)
    }
};
export const deleteTarefas = async (req:Request , res: Response) => {
    try{
        const id = req.params.id;
        await tarefaRepository.deleteTarefas(Number(id));
        return res.sendStatus(200)
    } catch(err){
        res.sendStatus(500) 
    }
};

export const getCountByUser = async (req:Request , res: Response) => {
    try{
        const usuario = req.params.usuario;
        const contarTarefas= await tarefaRepository.getContarTarefa(usuario);
        return res.status(200).send(contarTarefas.rows)

    } catch(err){
        res.sendStatus(500)
    }
};
