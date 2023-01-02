import { ApolloServer } from 'apollo-server'
import {
    typeDefsUsers,
    typeDefsProducts,
    resolversUsers,
    resolverProducts
} from './src/db';
import { DBConnection } from './src/config';

const connection = new DBConnection();
connection.connect()
    .then(() => console.log('Conexión a la base de datos establecida'))
    .catch(err => console.error(err));



const server = new ApolloServer({
    typeDefs: [
        typeDefsUsers,
        typeDefsProducts
    ],
    resolvers: [
        resolversUsers,
        resolverProducts
    ]
})

server.listen().then(({ url }) => {
    console.log(`servidor corriendo en: ${url}`)
})
