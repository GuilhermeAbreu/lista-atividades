import { Request, Response } from "express";
import { AtividadeModel } from "../models/AtividadeModel";
import { AtividadeCreateInterface, AtividadeUpdateInterface } from "../services/implementations/AtividadeImplementations";
import { AtividadeSchema } from "../services/schemas/AtividadeSchema";

class AtividadeController{
    static async create(req: Request, res: Response){

        console.log(`solicitando a criação da atividade ${req.body}`)

        try {
            
            const valueAtividadeBody : AtividadeCreateInterface = req.body

            await AtividadeSchema.validationBodyCreate(valueAtividadeBody)

            if(valueAtividadeBody.concluido) valueAtividadeBody.data_conclusao = new Date()

            const valuesAtividadeSaveInBank = await AtividadeModel.create(valueAtividadeBody)

            return res.status(201).send(valuesAtividadeSaveInBank)

        } catch (error : any) {
            return res.status(400).send({
                error: new Error(error).message
            })
        }
    }

    static async list(req: Request, res: Response){

        console.log(`Consultando todas as atividades`)

        try {
            const valuesAtividade = await AtividadeModel.findAll()
            return res.status(200).send(valuesAtividade)
        } catch (error : any) {
            return res.status(400).send({
                error: new Error(error).message
            })
        }
    }

    static async update(req: Request, res: Response){
        try {
            const valueAtividadeBody : AtividadeUpdateInterface = req.body
            const idAtividade = Number(req.params.id)

            const valuesAtividadeSchema = await AtividadeSchema.validationBodyUpdate(valueAtividadeBody)           

            if(valuesAtividadeSchema.concluido) valuesAtividadeSchema.data_conclusao = new Date()

            const valuesAtividadeUpdate = await AtividadeModel.update(valuesAtividadeSchema, idAtividade)
            return res.status(200).send(valuesAtividadeUpdate)
        }   catch (error : any) {
                return res.status(400).send({
            error: new Error(error).message
        })
        }
    }

    static async delete(req: Request, res: Response){
        try {
            const idAtividade = Number(req.params.id)
            await AtividadeModel.delete(idAtividade)
            return res.status(200).send({sucess: "Atividade deleted successfully"})
        } catch (error : any) {
            return res.status(400).send({
                error: new Error(error).message
            })
        }
    }

    static async findById(req: Request, res: Response){
        try {
            const idAtividade = Number(req.params.id)
            const valuesAtividade = await AtividadeModel.findById(idAtividade)
            return res.status(200).send(valuesAtividade)
        } catch (error : any) {
            return res.status(400).send({
                error: new Error(error).message
            })
        }
    }

}


export { AtividadeController };

