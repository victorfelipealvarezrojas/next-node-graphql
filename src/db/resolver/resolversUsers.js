import { findOneEmail, save } from '../../services'
import { hash, compare, createToken, verify } from '../../common'

const ROUNDS = 10
const TIME = '24h'

export const resolversUsers = {
    Query: {
        obtenerUsuario: async (_, { token }) => {
            const JwtUser = await verify(token, process.env.SECRET_KEY)
            return JwtUser
        }
    },
    Mutation: {
        nuevoUsuario: async (_, { input }) => {
            const { email, password } = input
            const existeUsuario = await findOneEmail(email)

            if (existeUsuario)
                throw new Error('El usuario ya esta registrado')

            input.password = await hash(ROUNDS, password)
            return await save(input)
        },
        autenticarUsuario: async (_, { input }) => {
            const { email, password } = input
            const usuario = await findOneEmail(email)

            if (!usuario)
                throw new Error('El usuario no se encuentra registrado')

            const isCorrect = await compare(password, usuario.password)

            if (!isCorrect)
                throw new Error('Password incorrecta')

            return {
                token: createToken(usuario, process.env.SECRET_KEY, TIME)
            }
        },

    }
}