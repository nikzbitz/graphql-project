import server from "./server";
import mongoose from 'mongoose';



const startServer = async () => {
    //await mongoose.connect('mongodb://localhost:27017/hotels_db');

    await mongoose.connect('mongodb+srv://nikzbitz:bit2sharma@cluster0.copuxzy.mongodb.net/hotels?retryWrites=true', {

        useNewUrlParser: true

    }).then(res => {

        console.log("DB Connected!")

    }).catch(err => {

        console.log(Error, err);

    })

    server.start(() => { console.log('Server Running'); })
}

startServer();


