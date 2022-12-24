import { gql } from 'apollo-server'


//schema
export const typeDefs = gql`
   type Curso{
      titulo: String
   }
   type Tecnologia{
      tecnologia: String
   }
   input CursoInput{
      tecnologia: String
   }
   type Query {
      obtenerCurso(input: CursoInput!) : [Curso] 
      obtenerTecnologia: [Tecnologia]
   }
`;