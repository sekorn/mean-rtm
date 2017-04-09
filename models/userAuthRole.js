var mongoose = require('mongoose');
var Schema = mongoose.Schema();

var schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    role: { type: Schema.Types.ObjectId, ref: 'Role', required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('UserAuthRole', schema);