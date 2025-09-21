const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const TreatmentSchema = new Schema({
  illnessHistoryId: {type: Schema.Types.ObjectId, ref: "IllnessHistory", required: true},
  startDate: {type: Schema.Types.Date, required: true},
  treatmentName: {type: Schema.Types.String, required: true},
  endDate: Date,
})

TreatmentSchema.statics.findById = function(id) {
  return this.find({id}).lean
}

TreatmentSchema.statics.createTreatment = function(data) {
  return this.create(data)
}

module.exports = mongoose.model('Treatment', TreatmentSchema, 'Treatment');
