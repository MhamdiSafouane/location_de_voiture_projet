const expressAsyncHandler = require('express-async-handler');
const User = require('./../model/UserSchema');
const Admin = require("./../model/AdminSchema")
const validateMongodbID = require('./../ValidateID');
const generateToken = require('./../GernerateToken')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
require("dotenv").config();
const SECRATE_KEY= process.env.SECRATE_KEY
const AdminRegisterCtrl = async (req, res) => {
    try {
        let { password, email } = req.body;
        let hashedPassword = await bcrypt.hash(password, 10);
let user = await Admin.findOne({ email });
        if (user) return res.status(400).json({ status: "Failed", field: "email", message: "Email already exist!!" })
        let newUser = await new Admin({
            ...req.body,
            password: hashedPassword
        });
        newUser = await newUser.save();
        res.status(201).json({ status: "Success", user: newUser });
    } catch (err) {
        res.status(400).json({ status: "Failed", message: err.message });
    }
}