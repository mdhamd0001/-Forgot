const bcrypt = require('bcrypt');
const mongoose = require('mongoose'); 
const User = require('../Schema/User.jsx');
const express = require('express');
const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(req.body);

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            name: name,
            email: email,
            password: hashedPassword
        });

        await user.save();
        console.log('User account created successfully');
        res.json({ success: true });
       
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email });
        if (!user) {
            console.log("User not found");
            return res.status(404).json({ error: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Wrong Password');
            return res.status(401).json({ error: 'Wrong Password' });
        }

        console.log("Login successful");
        res.json({ success: "User logged in" });
    } catch (error) {
        console.error("Error finding user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
