import jwt from 'jsonwebtoken'

export async function sign(props = {}, secret, expiresIn) {
    try {
        return await jwt.sign(props, secret, { expiresIn })
    } catch (error) {
        throw new Error(error)
    }
}

export async function verify(token, secret) {
    try {
        return await jwt.verify(token, secret)
    } catch (error) {
        throw new Error(error)
    }
}