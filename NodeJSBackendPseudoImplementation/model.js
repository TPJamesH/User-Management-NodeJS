const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    id: { type: String},
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique:true},
    balance: { type: Number}
});

module.exports = mongoose.model('Customer', CustomerSchema);
