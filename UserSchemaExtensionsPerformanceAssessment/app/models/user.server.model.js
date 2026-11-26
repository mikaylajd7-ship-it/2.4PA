// Name: Mikayla Dickerson
// Date: November 26, 2026
// Assignment: User Schema Extensions Performance Assessment
// Mongoose User schema with defaults and string schema modifiers.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        default: 'New'
    },
    lastName: {
        type: String,
        uppercase: true,
        trim: true,
        default: 'USER'
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        default: 'unknown@example.com'
    },
    username: {
        type: String,
        lowercase: true,
        trim: true,
        default: 'newuser'
    },
    password: {
        type: String,
        trim: true
    },
    role: {
        type: String,
        default: 'user'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('User', UserSchema);
