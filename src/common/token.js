import { sign } from "./jwt";

export async function createToken(usuario, secret, expiresIn) {
    try {
        const { id, email } = usuario
        return await sign({ id, email }, secret, expiresIn)
    } catch (error) {
        throw new Error(error)
    }
}