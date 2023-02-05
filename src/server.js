import { GraphQLServer, PubSub } from "graphql-yoga";
import db from './db'
import Query from './resolvers/query'
import Mutation from './resolvers/mutation'
import Subscription from './resolvers/Subscription'



const pubsub = new PubSub()


const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Mutation,
        Subscription
    },
    context(request) {
        return {
            db,
            pubsub,
            request
        }
    }
})

export {server as default}