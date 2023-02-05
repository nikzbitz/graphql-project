
import mongoose from 'mongoose';

export const users = mongoose.model("users", {
    email: String,
    password: String
});