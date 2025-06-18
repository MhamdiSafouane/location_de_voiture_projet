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
