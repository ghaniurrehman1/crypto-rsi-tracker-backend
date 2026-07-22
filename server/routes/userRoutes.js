const express = require("express");

const router = express.Router();

const {

    getUsers,
    addUser

} = require("../controllers/userController");


const validateUser = require("../middleware/validation");


// GET Request

router.get("/", getUsers);


// POST Request

router.post("/", validateUser, addUser);


module.exports = router;