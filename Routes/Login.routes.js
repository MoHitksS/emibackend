const { Router } = require('express');
const { UserModel } = require('../Models/Users.Models');
const Login = Router();

Login.post('/', async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email, password: password });
    if (user) {
        res.send({ msg: 'Login Successfull', user: user })
    }else{
        res.send({ msg: 'Invalid Credentials', user: {}})
    }
})




module.exports = {
    Login
}

