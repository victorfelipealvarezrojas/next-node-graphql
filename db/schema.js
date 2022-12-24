import { gql } from 'apollo-server'


//schema
export const typeDefs = gql`
     type Query {
        obtenetCurso: String
     }
`;