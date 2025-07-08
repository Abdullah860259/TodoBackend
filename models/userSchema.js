const mongoose = require("mongoose")
const { Schema } = mongoose;
const mongourl = process.env.MONGO_URL;
console.log(mongourl);


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
    },
    password: String,
    dob: {
        type: Date,
    },
    picture: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("User", userSchema);