var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    promotion: { type: Schema.Types.ObjectId, ref: 'Promotion', required: true },
    phase: { type: Schema.Types.ObjectId, ref: 'Phase', required: true },
    name: { type: String, required: true },
    detail: { type: Schema.Types.Object },
    createdBy: { types: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Prize', schema);