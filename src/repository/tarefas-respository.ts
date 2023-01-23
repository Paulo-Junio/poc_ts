import {QueryResult } from 'pg';
import { Request, Response } from 'express';
import connection from "../database/db.js";

type ListaTarefa = {
    id: number,
    name: string,
    description: string,
    responsible: string,
    date: string | Date,
    status: string
}

type Tarefa = Omit<ListaTarefa, "id">

const getTarefas = async (): Promise < QueryResult <ListaTarefa>> => {
    const ListaDeTarefas = await connection.query(`SELECT * FROM to_do;`);
    return ListaDeTarefas;
}

const postTarefas = async (tarefa:Tarefa): Promise < QueryResult<Response>> => {
    return await connection.query(`INSERT INTO to_do(name, description, responsible, date, status) VALUES($1, $2, $3,$4,$5);`,[tarefa.name, tarefa.description, tarefa.responsible, tarefa.date, tarefa.status])
}

const updateTarefas = async (tarefa: Tarefa, id:number): Promise < QueryResult<Response>> => {
    return  await connection.query('UPDATE to_do SET status=$1 WHERE id=$2;',[tarefa.status, id]);
}

const deleteTarefas = async (id : number): Promise < QueryResult<Response>> => {
    return await connection.query(`DELETE FROM to_do WHERE id=$1;`, [id])
}

const getContarTarefa= async(responsible:string): Promise < QueryResult<Response>> => {
    const contarPorUser = await connection.query(`SELECT * FROM to_do WHERE responsible = $1;`, [responsible]);
    return contarPorUser;
};

const tarefaRepository = {
    getTarefas,
    deleteTarefas,
    postTarefas,
    updateTarefas,
    getContarTarefa
};

export default tarefaRepository;