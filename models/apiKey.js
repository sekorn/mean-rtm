var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    account: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    key: { type: String, required: true },
    status: { type: String, required: true },
    note: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('apiKey', schema);