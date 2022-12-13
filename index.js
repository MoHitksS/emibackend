const express = require("express");
const cors = require('cors')
const { connection } = require("./Config/db");
const { Signup } = require("./Routes/Signup.routes");
const { Login } = require("./Routes/Login.routes");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use('/signup', Signup);
app.use('/login', Login)

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("Connected To DB");
    } catch (err) {
        console.log(err);
    }
    console.log("Listening To Port", process.env.PORT);
})