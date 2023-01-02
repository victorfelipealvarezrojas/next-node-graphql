import { Producto } from "../models/producto";
 
export async function save(params) {
    try {
        const producto = new Producto(params)
        return await producto.save()
    } catch (error) {
        throw new Error(error)
    }
}