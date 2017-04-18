var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    promotion: { type: Schema.Types.Object, ref: 'Promotion', required: true },
    status: { type: String, required: true },
    type: { type: String, required: true },
    name: { type: String, required: true },
    rewardAmount: { type: String, required: true },
    detail: { type: Schema.Types.Object },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('PromotionVerification', schema);