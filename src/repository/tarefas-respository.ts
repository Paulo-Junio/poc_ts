import {QueryResult } from 'pg';
import prisma from "../database/db.js";
import { to_do } from '@prisma/client';

type ListaTarefa= {
    id: number,
    name: string,
    description: string,
    responsibleId: number,
    date: string,
    statusId:number
};

type TarefaInput = Omit<to_do, "id" | "createAt">

const getTarefas = async () => {
    const listaDeTarefas = await prisma.to_do.findMany({
        select: {
            id: true,
            name: true,
            description:true,
        responsible_to_do_resposibleIdToresponsible :{
                select:{
                    name:true
                }
            },
        responsible_to_do_statusIdToresponsible: {
            select: {
                statusName:true
            }
        }
        }
    });

    return listaDeTarefas;
}

async function postTarefas(tarefa: TarefaInput):Promise<void> {
    await prisma.to_do.create({
        data: tarefa
    });
}

const updateTarefas = async (tarefa: TarefaInput, id:number):Promise<void>  => {
    await prisma.to_do.update({
      where:{ id },
      data:tarefa
    });
}

const deleteTarefas = async (id : number):Promise<void>  => {
    await prisma.to_do.delete({where: {id}});
}

const getContarTarefa= async(resposibleId:number) => {
    const responsibleList = prisma.to_do.findMany({
        where:{resposibleId},
        select: {
            id: true,
            name: true,
            description:true,
        responsible_to_do_resposibleIdToresponsible :{
                select:{
                    name:true
                }
            },
        responsible_to_do_statusIdToresponsible: {
            select: {
                statusName:true
            }
        }
        }
    })
    return responsibleList;
};

const tarefaRepository = {
    getTarefas,
    deleteTarefas,
    postTarefas,
    updateTarefas,
    getContarTarefa
};

export default tarefaRepository;