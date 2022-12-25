import { gql } from 'apollo-server'

//schema
export const typeDefs = gql`
     type Usuario :{
        id: ID,
        nombre: String,
        apellido: String,
        email: String,
        creado: String,
     }
     type Query {
        obtenetCurso: String
     }
`;

