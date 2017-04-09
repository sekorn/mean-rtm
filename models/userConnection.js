var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    provider: { type: String, required: true },
    providerUserId: { type: String, required: true },
    rank: { type: String, required: true },
    displayName: { type: String, required: true },
    profileUrl: { type: String, required: true },
    imageUrl: { type: String, required: true },
    accessToken: { type: String, required: true },
    secret: { type: String, required: true },
    refreshToken: { type: String, required: true },
    expireTime: { type: Date, required: true }
});

schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('UserConnection', schema);