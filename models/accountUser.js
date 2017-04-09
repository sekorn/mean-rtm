var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    account: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    detail: { type: Schema.Types.Object },
    createdBy: { types: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('AccountUser', schema);