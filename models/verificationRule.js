var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({
    entryVerificationId: { type: NUMBER, required: true },
    promotion: { type: Schema.Types.Object, ref: 'Promotion', required: true },
    status: { type: String, required: true },
    type: { type: String, required: true },
    name: { type: String, required: true },
    expression: { type: String, required: true },
    detail: { type: Schema.Types.Object },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('VerificationRule', schema);

