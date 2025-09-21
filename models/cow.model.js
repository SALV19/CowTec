const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CowSchema = new Schema({
  cowId: ObjectId,
  cowName: String,
  age: Number,
  rummination: Number,
  weight: Number,
  height: Number,
  numberOfBirths: Number,
  currentCorral: {
    corralId: {type: Schema.Types.ObjectId, ref: "Corral"},
    entryDate: {type: Date}
  },
  growthStage: {
    growthId: {type: Schema.Types.ObjectId, ref: "GrowthStage"}
  }
})

CowSchema.statics.findById = function(id) {
  return this.find({id}).lean
}

CowSchema.statics.createCow = function(data) {
  return this.create(data)
}

module.exports = mongoose.model('Cow', CowSchema, 'Cow');