const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const IllnessHistorySchema = new Schema({
  illnessHistoryId: ObjectId,
  cowId: {type: Schema.Types.ObjectId, ref: "Cow", required: true},
  illnessId: {type: Schema.Types.ObjectId, ref: 'Illness', required: true},
  startDate: {type: Schema.Types.Date, required: true},
  endDate: Date,
})

IllnessHistorySchema.statics.findById = function(id) {
  return this.find({id}).lean
}

IllnessHistorySchema.statics.createIllnessHistory = function(data) {
  return this.create(data)
}

module.exports = mongoose.model('IllnessHistory', IllnessHistorySchema, 'IllnessHistory');
