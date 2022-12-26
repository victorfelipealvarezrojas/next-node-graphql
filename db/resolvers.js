import { findOneEmail, save } from "../services"
import { hash } from "../common"

const ROUNDS = 10

export const resolvers = {
    Query: {
        obtenetCurso: () => 'no implementada'
    },
    Mutation: {
        nuevoUsuario: async (_, { input }) => {
            const { email, password } = input
            const existeUsuario = await findOneEmail(email)

            if (existeUsuario)
                throw new Error('El usuario ya esta registrado')

            input.password = await hash(ROUNDS, password)

            return await save(input)
        }
    }
}