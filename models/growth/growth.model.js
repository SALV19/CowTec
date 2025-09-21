const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const GrowthStageSchema = new Schema({
  GrowthStageId: ObjectId,
  stage: String,
})

GrowthStageSchema.statics.findById = function(id) {
  return this.find({id}).lean
}

GrowthStageSchema.statics.createGrowthStage = function(data) {
  return this.create(data)
}

module.exports = mongoose.model('GrowthStage', 
  GrowthStageSchema, 'GrowthStage');
