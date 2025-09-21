const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ReproductionStageSchema = new Schema( {
  reproductionStageId: ObjectId,
  stage: String,
  description: String,
})

ReproductionStageSchema.statics.findById = function(id) {
  return this.find({id}).lean
}

ReproductionStageSchema.statics.createReproductionStage = function(data) {
  return this.create(data)
}

module.exports = mongoose.model('ReproductionStage', ReproductionStageSchema, 'ReproductionStage');
