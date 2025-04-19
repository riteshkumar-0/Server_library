import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,

    },
    lastname: {
        type: String,

    },
    about: {
        type: String,

    },
    country: {
        type: String,

    },
    streetaddress: {
        type: String,

    },
    city: {
        type: String,

    },
    state: {
        type: String,

    },
    postalcode: {
        type: String,

    },



});
const User = mongoose.model("User", userSchema);
export default User;