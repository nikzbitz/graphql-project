require('babel-register')
require("babel-polyfill");
const server = require('../../src/server').default
import mongoose from 'mongoose';


module.exports = async () => {

    await mongoose.connect('mongodb://localhost:27017/hotels_db', {

        useNewUrlParser: true

    }).then(res => {

        console.log("DB Connected!")

    }).catch(err => {

        console.log(Error, err);

    })
    global.httpServer = await server.start({port : 4000 })
}