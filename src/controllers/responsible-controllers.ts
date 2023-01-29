import { Request, Response } from "express";
import responsibleRepository from "../repository/responsible-repository.js";


export const getResponsible= async (req:Request ,res: Response)=>{
    try{
        const responsibleList = await responsibleRepository.getResponsible();
        return res.status(200).send(responsibleList)

    } catch(err){
        res.sendStatus(500)
    }
};
export const postResponsible= async (req:Request ,res: Response)=>{
    try{
        const responsible = req.body;
        await responsibleRepository.postResponsible(responsible);
        return res.sendStatus(200)

    } catch(err){
        console.log(err)
        res.sendStatus(500)
    }

};
export const updateResponsible = async (req:Request ,res: Response) => {
    try{
        const responsible = req.body;
        const id = req.params.id;
        await responsibleRepository.updateResponsible(responsible, Number(id));
        return res.sendStatus(200)

    } catch(err){
        res.sendStatus(500)
    }
};
export const deleteResponsible = async (req:Request , res: Response) => {
    try{
        const id = req.params.id;
        await responsibleRepository.deleteResponsible(Number(id));
        return res.sendStatus(200)
    } catch(err){
        res.sendStatus(500) 
    }
};

