var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    account: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    title: { type: String, required: true },
    startDate: { type: Date, required: true},
    endDate: { type: Date, required: true },
    detail: { type: Schema.Types.Object },
    createdBy: { types: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Loyalty', schema);