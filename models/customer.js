var mongoose = require('mongoose');
var ppLocMong = require('passport-local-mongoose');

var customerSchema = new mongoose.Schema({
    name: {
        firstName: String,
        middleName: String,
        lastName: String
    },
    mobile: String,
    email: String,
    visit: {
        treatment: String,
        allergies: String,
        time: Number,
        date: Date,
        howManyTimes: Number
    }
});


CustomerSchema.plugin(ppLocMong); //takes the ppLocMong package and adds the methods in this to the UserSchema

module.exports = mongoose.model('Customer', customerSchema);