const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const IllnessSchema = new Schema({
  illnessId: ObjectId,
  illness: String,
  description: String,
})

IllnessSchema.statics.findById = function(id) {
  return this.find({id}).lean
}

IllnessSchema.statics.createIllness = function(data) {
  return this.create(data)
}

module.exports = mongoose.model('Illness', IllnessSchema, 'Illness');
