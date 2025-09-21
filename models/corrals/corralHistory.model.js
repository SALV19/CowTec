const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const CorralHistorySchema = new Schema({
  cowId: {type: Schema.Types.ObjectId, ref: "Cow", required: true},
  corralId: {type: Schema.Types.ObjectId, ref: 'Corral', required: true},
  entryDate: {type: Schema.Types.Date, required: true},
  exitDate: Date,
})

CorralHistorySchema.statics.findById = function(id) {
  return this.find({id}).lean
}

CorralHistorySchema.statics.createCorralHistory = function(data) {
  return this.create(data)
}

module.exports = mongoose.model('CorralHistory', CorralHistorySchema, 'CorralHistory');
