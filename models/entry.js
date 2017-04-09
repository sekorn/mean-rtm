var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    promotionMember: { type: Schema.Types.ObjectId, ref: 'PromotionMember', required: true },
    member: { type: Schema.Types.ObjectId, ref: 'Member', required: true },
    promotion: { type: Schema.Types.ObjectId, ref: 'Promotion', required: true },
    status: { type: String, required: true },
    entryType: { type: String, required: true },
    subEntryType: { type: String, required: true },
    datePlayed: { type: Date },
    ipAddress: { type: String, required: true },
    source: { type: String, required: true },
    emailAddress: { type: String, required: true },
    detail: { type: Schema.Types.Object },
    createdBy: { types: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Entry', schema);