var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    promotion: { type: Schema.Types.ObjectId, ref: 'Promotion', required: true },
    email: { type: String, required: true },
    detail: { type: Schema.Types.Object },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Optout', schema);