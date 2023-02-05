const jwt = require('jsonwebtoken');
import { users } from '../models/userModel';
import { amenities } from '../models/amenitiesModel';
import getUserID  from '../utils/getUserID'
import bcrypt from 'bcryptjs'

const Query = {
    hotels(parent, args, { db, request }, info) {
        const userId = getUserID(request);
        console.log('userId', userId);
        if (Object.keys(args).length === 0) {
            return db.hotels
        }
        else if (args.id) {
            return db.hotels.filter((hotels) => {
                return hotels.id === args.id
            })
        }
        else if (args.lat) {
            return db.hotels.filter((hotels) => {
                return hotels.latitude === args.lat && hotels.longitude === args.long
            })
        }
    },
    tariff(parent, args, { db }, info) {
        if (args.id) {
            return db.tariffDetails.filter((tariffDetails) => {
                return tariffDetails.hotelId === args.id
            })
        }
    },
    reviews(parent, args, { db }, info) {
        if (args.id) {
            return db.reviewDetails.filter((reviewDetails) => {
                return reviewDetails.hotelId === args.id
            })
        }
    },
    amenities: async (parent, args, { db }, info) => {
        // if (args.id) {
        //     return db.amentiesDetails.filter((amentiesDetails) => {
        //         return amentiesDetails.hotelId === args.id
        //     })
        // }
        // else {
        //     return db.amentiesDetails;
        // }
        const amenitiesData = await amenities.find();
        return amenitiesData; 
    },
    login: async (parent, args, ctx, info) => {
        const user = await users.findOne({email:args.email}); 
        console.log('user', user);
        if (!user) {
            throw new Error ('Email does not exist')
        } 
        const isMatch = await bcrypt.compare(args.password, user.password);
        if ( !isMatch ){
            throw new Error('Incorrect Password')
        }
        const token = jwt.sign({userId:user._id}, 'secretKey', {expiresIn: '1h'});
        return {userId: user._id, token: token, tokenExpiration: 1}
    }
};

export { Query as default }