import { ApolloServer } from 'apollo-server'
import { typeDefs, resolvers } from './db';
import { DBConnection } from './config';

const connection = new DBConnection();
connection.connect()
    .then(() => console.log('Conexión a la base de datos establecida'))
    .catch(err => console.error(err));

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen().then(({ url }) => {
    console.log(`servidor corriendo en: ${url}`)
})
