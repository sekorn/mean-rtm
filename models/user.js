var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    emailAddress: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    detail: { type: Schema.Types.Object },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
});

schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('User', schema);