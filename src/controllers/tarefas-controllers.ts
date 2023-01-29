import { Request, Response } from "express";
import tarefaRepository from "../repository/tarefas-respository.js";


export const getTarefas= async (req:Request ,res: Response)=>{
    try{
        const listaDeTarefas = await tarefaRepository.getTarefas();
        return res.status(200).send(listaDeTarefas)

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
        const contarTarefas= await tarefaRepository.getContarTarefa(Number(usuario));
        return res.status(200).send(contarTarefas)

    } catch(err){
        console.log(err)
        res.sendStatus(500)
    }
};
