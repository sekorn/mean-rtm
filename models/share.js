var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    promotionMember: { type: Schema.Types.ObjectId, ref: 'PromotionMember', required: true },
    promotion: { type: Schema.Types.ObjectId, ref: 'Promotion', required: true },
    type: { type: String, required: true },
    target: { type: String, required: true },
    source: { type: String, required: true },
    emailAddress: { type: String },
    completed: { type: Boolean },
    detail: { type: Schema.Types.Object },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('Share', schema);