import prisma from "../database/db.js";
import { responsible } from '@prisma/client';



type ResponsibleInput = Omit<responsible, "id" | "createdAt">

const getResponsible = async (): Promise<responsible[]> => {
    return await prisma.responsible.findMany();
}

async function postResponsible(responsible: ResponsibleInput) {
    await prisma.responsible.create({
        data: responsible
    });
}

const updateResponsible = async (responsible: ResponsibleInput, id:number) => {
    await prisma.responsible.update({
      where:{ id },
      data:responsible
    });
}

const deleteResponsible = async (id : number) => {
    await prisma.responsible.delete({where: {id}})
}


const responsibleRepository = {
    getResponsible,
    deleteResponsible,
    postResponsible,
    updateResponsible
};

export default responsibleRepository;