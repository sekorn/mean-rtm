var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    loyalty: { type: Schema.Types.Object, ref: 'Loyalty', required: true },
    member: { type: Schema.Types.Object, ref: 'Member', required: true },
    programId: { type: String },
    programMemberId: { type: String },
    promotion: { type: Schema.Types.Object, ref: 'Promotion', required: true },
    promotionVerification: { type: Schema.Types.Object, ref: 'PromotionVerification', required: true },
    entry: { type: Schema.Types.Object, ref: 'Entry', required: true },
    rewardPoints: { type: String },
    expirationDate: { type: Date },
    detail: { type: Schema.Types.Object },
    createdBy: { types: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports  = mongoose.model('LoyaltyMember', schema);