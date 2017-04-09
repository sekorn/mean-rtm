var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    emailTemplate: { type: Schema.Types.ObjectId, ref: 'EmailTemplate', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    detail: { type: Schema.Types.Object },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('EmailTemplateUser', schema);