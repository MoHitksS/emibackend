const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    email: { type: String },
    name: { type: String },
    password: { type: String }
}, { timestamps: true })

const UserModel = mongoose.model('users', userSchema);

module.exports = {
    UserModel
}