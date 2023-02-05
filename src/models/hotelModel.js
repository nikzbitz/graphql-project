const mongoose = require('mongoose');

export const hotels = mongoose.model("hotels",{

    name: String,
    address: String,
    rating: String,
    phone: String,
    email: String,
    latitude: String,
    longitude: String,
    country: String,
    pincode: String,
    checkIn: String,
    checkOut: String,
    wifi: Boolean,
    roomService: Boolean,
    laundry: Boolean,
    locker: Boolean,
    swimmingPool: Boolean,
    giftShops: Boolean,
});
