var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    entry: { type: Schema.Types.ObjectId, ref: 'Entry', required: true },
    member: { type: Schema.Types.ObjectId, ref: 'Member', required: true },
    promotion: { type: Schema.Types.ObjectId, ref: 'Promotion', required: true },
    dateEntered: { type: Date, required: true },
    ipAddress: { type: Date, required: true },
    detail: { type: Schema.Types.Object },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Vote', schema);