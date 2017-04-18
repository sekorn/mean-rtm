var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    promotion: { type: Schema.Types.Object, ref: 'Promotion', required: true },
    type: { type: String, required: true },
    title: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    showInReport: { type: Boolean, required: true },
    detail: { type: Schema.Types.Object },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('PromotionNote', schema);