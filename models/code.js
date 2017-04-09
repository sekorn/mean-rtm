var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    promotion: { type: Schema.Types.ObjectId, ref: 'Promotion', required: true },
    member: { type: Schema.Types.ObjectId, ref: 'Member', required: true },
    type: { type: String, required: true },
    code: { type: String, required: true },
    grouping: { type: String, required: true },
    dateUsed: { type: Date },
    valid: { type: Boolean },
    detail: { type: Schema.Types.Object },
    createdBy: { types: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Code', schema);