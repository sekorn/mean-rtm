var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    promotion: { type: Schema.Types.ObjectId, ref: 'Promotion', required: true },
    member: { type: Schema.Types.ObjectId, ref: 'Member', required: true },
    share: { type: Schema.Types.ObjectId, ref: 'Share' },
    hasOptIn: { type: Boolean, required: true },
    detail: { type: Schema.Types.Object },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('PromotionMember', schema);