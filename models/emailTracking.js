var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    email: { type: String, required: true },
    event: { type: String, required: true },
    eventTs: { type: Timestamp, required: true },
    externalTrackingId: { type: String, required: true },
    detail: { type: Schema.Types.Object },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('EmailTracking', schema);