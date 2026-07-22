const validateUser = (req, res, next) => {

    const { name, email } = req.body;


    // Check if fields are empty

    if (!name || !email) {

        return res.status(400).json({

            message: "Name and Email are required."

        });

    }


    // Check email format

    if (!email.includes("@")) {

        return res.status(400).json({

            message: "Please enter a valid email."

        });

    }


    next();

};


module.exports = validateUser;