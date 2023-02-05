import { hotels } from '../models/hotelModel';
import { users } from '../models/userModel';
import { amenities } from '../models/amenitiesModel';
import getUserID from '../utils/getUserID'
import bcrypt from 'bcryptjs'

const Mutation = {
    createHotel: async (parent, args, { db, pubsub, request }, info) => {
        const userId = getUserID(request);
        console.log('userId', userId);
        const hotel = new hotels({ ...args.data });
        const hotelId = await hotel.save();
        console.log(typeof(hotelId._id));
     

        const amenity = new amenities({ hotelId: hotelId._id,...args.data });
        await amenity.save();
        console.log(amenity);
        return hotel;
    },
    createUser: async (parent, args, { db, pubsub, request }, info) => {
        console.log('inside resolver');
       const password = await bcrypt.hash(args.data.password,10);
        const user = new users ({
           ...args.data,
           password : password
       })
       const userId = await user.save();
       console.log(user);
       return user;
    }
}

export { Mutation as default }