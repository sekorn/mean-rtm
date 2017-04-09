var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    apiKey: { type: Schema.Types.ObjectId, ref: 'apiKey', required: true },
    role: {type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('apiKeyAuthRole', schema);