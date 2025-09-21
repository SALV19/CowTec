const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ReproductionHistorySchema = new Schema({
  reproductionHistoryId: ObjectId,
  cowId: {type: Schema.Types.ObjectId, ref: "Cow", required: true},
  reproductionStageId: {
      type: Schema.Types.ObjectId, 
      ref: 'ReproductionStage', 
      required: true
    },
  startDate: {type: Schema.Types.Date, required: true},
  endDate: Date,
})

ReproductionHistorySchema.statics.findById = function(id) {
  return this.find({id}).lean
}

ReproductionHistorySchema.statics.createReproductionHistory = function(data) {
  return this.create(data)
}

module.exports = mongoose.model('ReproductionHistory', 
  ReproductionHistorySchema, 'ReproductionHistory');
