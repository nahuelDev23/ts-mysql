import { Request,Response} from 'express'
import Usuario from '../models/usuario'

export const getUsuarios = async (req:Request,res:Response) => {
    const usuarios = await Usuario.findAll()
    res.json({
        usuarios
    })
}

export const getUsuario = async (req:Request,res:Response) => {
    const { id } = req.params
    const usuario = await Usuario.findByPk(id)
    if(!usuario){
        res.status(404).json({
            msg:'no existe ese usuario'
        })
    }
    res.json({
        usuario
    })
}

export const postUsuario = async (req:Request,res:Response) => {
    const { body } = req
    const existeEmail = await Usuario.findOne({
        where:{
            email:body.email
        }
    })
    if(existeEmail){
        return res.status(400).json({
            msg:"ya existe un usuario con ese email"
        })
    }
    try {
        const usuario = Usuario.build(body)
        await usuario.save()
        res.json({
            usuario
        })
    } catch (error) {
        return res.status(500).json({
            msg:'no anda'
        })
    }
    
}

export const putUsuario = async (req:Request,res:Response) => {
    const { id } = req.params
    const { body } = req

    try {
        const usuario = await Usuario.findByPk(id)
        if(!usuario){
            return res.status(404).json({
                msg:"no existe un usuario con ese id"
            })
        }

        await usuario.update(body)
        res.json({
            usuario
        })
    } catch (error) {
        return res.status(500).json({
            msg:'no anda'
        })
    }
   
}
export const deleteUsuario = async(req:Request,res:Response) => {
    const { id } = req.params

    try {
        const usuario = await Usuario.findByPk(id)
        if(!usuario){
            return res.status(404).json({
                msg:"no existe un usuario con ese id"
            })
        }

        await usuario.update({estado:0})
        res.json({
            usuario
        })
    } catch (error) {
        return res.status(500).json({
            msg:'no anda'
        })
    }
    
}