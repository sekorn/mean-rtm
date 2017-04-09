var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    promotion: { type: Schema.Types.ObjectId, ref: 'Promotion', required: true },
    name: { type: String, required: true },
    externalId: { type: String, required: true },
    fromName: { type: String, required: true },
    fromEmail: { type: String, required: true },
    replyTo: { type: String, required: true },
    type: { type: String },
    subject: { type: String },
    grouping: { type: String },
    detail: { type: Schema.Types.Object },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('EmailTemplate', schema);