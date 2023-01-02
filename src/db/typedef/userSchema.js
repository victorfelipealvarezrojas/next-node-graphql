import { gql } from 'apollo-server'

//schema
export const typeDefsUsers = gql`
     type Usuario {
        id: ID
        nombre: String
        apellido: String
        email: String
        creado: String
     }

     type Token {
        token: String
     }

     type TokenResponse {
        id: String,
        email: String,
        iat: String,
        exp: String
     }

     input UsuarioInput {
        nombre: String!
        apellido: String!
        email: String!
        password: String!
     } 

     input AutenticarInput {
        email: String!
        password: String!
     } 

     type Query {
        obtenerUsuario(token: String!): TokenResponse
     } 

     type Mutation {
        nuevoUsuario(input: UsuarioInput): Usuario
        autenticarUsuario(input: AutenticarInput): Token
     }
`;