import { Request, Response } from "express";
import statusRepository from "../repository/status-repository.js";


export const getStatus= async (req:Request ,res: Response)=>{
    try{
        const statusList = await statusRepository.getStatus();
        return res.status(200).send(statusList)

    } catch(err){
        res.sendStatus(500)
    }
};
export const postStatus= async (req:Request ,res: Response)=>{
    try{
        const status = req.body;
        await statusRepository.postStatus(status);
        return res.sendStatus(200)

    } catch(err){
        console.log(err)
        res.sendStatus(500)
    }

};
export const updateStatus = async (req:Request ,res: Response) => {
    try{
        const status = req.body;
        const id = req.params.id;
        await statusRepository.updateStatus(status, Number(id));
        return res.sendStatus(200)

    } catch(err){
        res.sendStatus(500)
    }
};
export const deleteStatus = async (req:Request , res: Response) => {
    try{
        const id = req.params.id;
        await statusRepository.deleteStatus(Number(id));
        return res.sendStatus(200)
    } catch(err){
        res.sendStatus(500) 
    }
};