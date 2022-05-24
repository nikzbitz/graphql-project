const mongoose = require('mongoose');

export const amenities = mongoose.model("amenities", {
    hotelId: String,
    wifi: Boolean,
    roomService: Boolean,
    laundry: Boolean,
    locker: Boolean,
    swimmingPool: Boolean,
    giftShops: Boolean
});
