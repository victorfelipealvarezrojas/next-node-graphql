import { ApolloServer } from 'apollo-server'
import { typeDefs, resolvers } from './db';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ()=>{
        const contexto="valor contexto global"

        return {
            contexto
        }
    }
})

server.listen().then(({ url }) => {
    console.log(`servidor corriendo en: ${url}`)
})
