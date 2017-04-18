var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    loyalty: { type: Schema.Types.Object, ref: 'Loyalty', required: true },
    member: { type: Schema.Types.Object, ref: 'Member', required: true },
    detail: { type: Schema.Types.Object },
    createdBy: { types: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('LoyaltyMember', schema);