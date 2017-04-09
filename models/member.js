var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    disabled: { type: Boolean, required: true },
    detail: { type: Schema.Types.Object },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('Member', schema);