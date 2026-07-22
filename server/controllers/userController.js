const users = require("../data/users");


// GET all users

const getUsers = (req, res) => {

    res.json(users);

};


// POST a new user

const addUser = (req, res) => {

    const { name, email } = req.body;

    const newUser = {

        name,
        email

    };

    users.push(newUser);

    res.status(201).json({

        message: "User added successfully!",
        user: newUser

    });

};


module.exports = {

    getUsers,
    addUser

};