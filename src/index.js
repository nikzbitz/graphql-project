import { GraphQLServer, PubSub } from "graphql-yoga";
import db from './db'
import Query from './resolvers/query'
import Mutation from './resolvers/mutation'
import Subscription from './resolvers/Subscription' 
import mongoose from 'mongoose';


const pubsub = new PubSub()


const server = new GraphQLServer({
    typeDefs : './src/schema.graphql',
    resolvers : {
        Query,
        Mutation,
        Subscription
    },
    context (request) {
        return {
        db,
        pubsub,
        request
    }
}
})




const startServer = async () => {
    //await mongoose.connect('mongodb://localhost:27017/hotels_db');

    await mongoose.connect('mongodb://localhost:27017/hotels_db', {

        useNewUrlParser: true

    }).then(res => {

        console.log("DB Connected!")

    }).catch(err => {

        console.log(Error, err);

    })

    server.start(() => { console.log('Server Running'); })
}

startServer();


