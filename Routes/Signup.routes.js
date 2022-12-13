const { Router } = require('express');
const { UserModel } = require('../Models/Users.Models');
const Signup = Router();

Signup.post('/', async (req, res) => {
    const { email, password, name } = req.body;
    const user = await UserModel.findOne({ email: email })
    if (user) {
        res.send({ msg: "Email Already exist", status: true })
    } else {
        const newUser = new UserModel({
            email,
            name,
            password
        })
        await newUser.save();
        res.send({ msg: "Signup Successfull", status: true })
    }
})




module.exports = {
    Signup
}

