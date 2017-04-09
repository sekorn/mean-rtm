var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    account: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    status: { type: String, required: true },
    key: { type: String },
    type: { type: String },
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    disabled: { type: Boolean, required: true },
    detail: { type: Schema.Types.Object },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Promotion', schema);