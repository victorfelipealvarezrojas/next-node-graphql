import { gql } from 'apollo-server'

//schema
export const typeDefs = gql`
     type Usuario {
        id: ID,
        nombre: String,
        apellido: String,
        email: String,
        creado: String,
     }

     input UsuarioInput {
        nombre: String!,
        apellido: String!,
        email: String!,
        password: String!,
     } 

     type Query {
        obtenetCurso: String
     } 

     type Mutation {
        nuevoUsuario(input: UsuarioInput): Usuario
     }
`;