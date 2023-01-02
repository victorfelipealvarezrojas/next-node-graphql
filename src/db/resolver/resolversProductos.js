import { saveProduct } from '../../services'

export const resolverProducts = {
    Mutation: {
        nuevoProducto: async (_, { input }) => {
            return await saveProduct(input)
        },

    }
}