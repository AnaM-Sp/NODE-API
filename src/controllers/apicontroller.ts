import { Request, Response } from "express";
import {Frase} from '../models/Frase'

export const ping = (req:Request, res:Response) =>{
    res.json({pong:true})
}

export const random = (req:Request, res:Response) =>{
    let nRand: number = Math.floor(Math.random() * 10)
    res.json({number: nRand})
}

export const nome = (req:Request, res:Response) =>{
    let nome: string = req.params.nome
    res.json({nome: `Você enviou o nome : ${nome}`})
}

export const criarFrase = async (req:Request, res:Response) =>{
    let{autor, txt} = req.body
    let novaFrase = await Frase.create({autor, txt})
    res.json({id: novaFrase.id, autor, txt})
}

export const pegarFrases = async(req:Request, res:Response) =>{
    let{id} = req.params

    let frase = await Frase.findByPk(id)

    if(frase){
        res.json({frase})
    } else {
        res.json({erro: 'Frase não existe'})
    }
}

export const editaFrase = async(req:Request, res:Response) =>{
    let {id} = req.params

    let {autor, texto} = req.body

    let frase = await Frase.findByPk(id)
    if(frase){
        frase.autor = autor
        frase.texto = texto

        await frase.save()
        res.json({frase})
    } else {
        res.json({error: 'Frase não existe'})
    }
}

export const deletaFrase = async (req: Request, res: Response) => {
 
    let { id } = req.params;
 
    // Deleta o produto com o ID fornecido
    await Frase.destroy({
        where: {
            id: id
        }
    });
}