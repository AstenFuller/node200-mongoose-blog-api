const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { type: 'string', required: true },
    lastName: { type: 'string', required: true },
    email: { type: 'string', required: true },
    phone: { type: 'string', required: false },
    address: { type: 'string', required: false },

    social: {
        facebook: { type: 'string', required: false },
        twitter: { type: 'string', required: false },
        linkedin: { type: 'string', required: false }
    }
});

module.exports = mongoose.model('User', UserSchema);