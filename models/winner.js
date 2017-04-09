var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    entry: { type: Schema.Types.ObjectId, ref: 'Entry', required: true },
    member: { type: Schema.Types.ObjectId, ref: 'Member', required: true },
    promotion: { type: Schema.Types.ObjectId, ref: 'Promotion', required: true },
    prize: { type: Schema.Types.ObjectId, ref: 'Prize', required: true },
    winTime: { type: Date, required: true },
    playedTime: { type: Date, required: true },
    ipAddress: { type: String, required: true },
    dateRedeemed: { type: Date },
    detail: { type: Schema.Types.Object },
    createdBy: { types: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Winner', schema);