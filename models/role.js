var mongoose = require('mongoose');
var Schema = mongoose.Schema();

var schema = new Schema({
    name: { type: String, require: true },
    detail: { type: Schema.Types.Object },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Role', schema);