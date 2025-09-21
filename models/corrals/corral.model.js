const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CorralSchema = new Schema({
  corralId: ObjectId,
  corralName: String,
  capacity: Number,
})

CorralSchema.statics.findById = function(id) {
  return this.find({id}).lean
}

CorralSchema.statics.createCorral = function(data) {
  return this.create(data)
}

module.exports = mongoose.model('Corral', CorralSchema, 'Corral');