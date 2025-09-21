const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const GrowthStageHistorySchema = new Schema({
  cowId: {type: Schema.Types.ObjectId, ref: "Cow", required: true},
  growthStageId: {
      type: Schema.Types.ObjectId,
      ref: 'GrowthStage', 
      required: true
    },
  startDate: {type: Schema.Types.Date, required: true},
  endDate: Date,
})

GrowthStageHistorySchema.statics.findById = function(id) {
  return this.find({id}).lean
}

GrowthStageHistorySchema.statics.createGrowthStageHistory = function(data) {
  return this.create(data)
}

module.exports = mongoose.model('GrowthStageHistory', 
  GrowthStageHistorySchema, 'GrowthStageHistory');
