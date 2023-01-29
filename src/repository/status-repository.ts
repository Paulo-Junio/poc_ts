import prisma from "../database/db.js";
import { status } from '@prisma/client';



type StatusInput = Omit<status, "id" | "createdAt">

const getStatus = async (): Promise<status[]> => {
    return await prisma.status.findMany();
}

async function postStatus(status: StatusInput){
    await prisma.status.create({
        data: status
    });
}

const updateStatus = async (status: StatusInput, id:number) => {
    await prisma.status.update({
      where:{ id },
      data:status
    });
}

const deleteStatus = async (id : number) => {
    await prisma.status.delete({where: {id}})
}


const statusRepository = {
    getStatus,
    deleteStatus,
    postStatus,
    updateStatus
};

export default statusRepository;