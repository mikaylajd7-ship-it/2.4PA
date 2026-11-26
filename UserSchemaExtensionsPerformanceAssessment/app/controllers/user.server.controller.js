// Name: Mikayla Dickerson
// Date: November 26, 2026
// Controller for creating a user document through the REST API.

const User = require('mongoose').model('User');

exports.create = async function (req, res) {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();

        // Do not print the password in the server console.
        console.log('User saved:', {
            id: savedUser._id,
            firstName: savedUser.firstName,
            lastName: savedUser.lastName,
            email: savedUser.email,
            username: savedUser.username,
            role: savedUser.role,
            isActive: savedUser.isActive,
            createdAt: savedUser.createdAt
        });

        return res.status(200).send('User Added');
    } catch (error) {
        console.error(`Could not save user: ${error.message}`);
        return res.status(400).json({
            message: 'Could not add user.',
            error: error.message
        });
    }
};
