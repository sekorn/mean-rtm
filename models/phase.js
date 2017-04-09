var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    promotion: { type: Schema.Types.ObjectId, ref: 'Promotion', required: true },
    title: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    detail: { type: Schema.Types.Object },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Phase', schema);