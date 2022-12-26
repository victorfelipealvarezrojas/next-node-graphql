import { usuario } from "../models/usuaurio";


export async function findOneEmail(email) {
    try {
        return await usuario.findOne({ email })
    } catch (error) {
        throw new Error(error)
    }
}

export async function save(params) {
    try {
        const usr = new usuario(params) 
        usr.save()
        return usr
    } catch (error) {
        throw new Error(error)
    }
}