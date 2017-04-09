var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: { type: String, required: true },
    detail: { type: Schema.Types.Object },
    createdBy: { types: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Account', schema);