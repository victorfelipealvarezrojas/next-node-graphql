import bcryptjs from "bcryptjs";

export async function hash(hash, password) {
    try {
        const salt = await bcryptjs.genSaltSync(hash)
        return await bcryptjs.hash(password, salt)
    } catch (error) {
        throw new Error(error)
    }
}