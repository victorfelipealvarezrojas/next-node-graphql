import { gql } from 'apollo-server'

//schema
export const typeDefsProducts = gql`
     type Producto {
        id: ID
        nombre: String
        existencia: Int
        precio: Float
        creado: String
     }

     input ProductoInput {
        nombre: String!
        existencia: Int!
        precio: Float!
     } 

     type Mutation {
        nuevoProducto(input: ProductoInput): Producto
     }
`;