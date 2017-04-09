var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    share: { type: Schema.Types.ObjectId, ref: 'Share', required: true },
    clickDate: { type: Date },
    detail: { type: Schema.Types.Object },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('ShareTracking', schema);