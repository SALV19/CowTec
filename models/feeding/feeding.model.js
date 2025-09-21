const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const FeedingSchema = new Schema({
  feedingId: ObjectId,
  foodComponentId: {
    type: Schema.Types.ObjectId, 
    red: 'FoodComponent', 
    required: true
  },
  shcedule: [
    {hour: Number}
  ],
  ammount: Number
})

FeedingSchema.statics.findById = function(id) {
  return this.find({id}).lean
}

FeedingSchema.statics.createFeeding = function(data) {
  return this.create(data)
}

module.exports = mongoose.model('Feeding', FeedingSchema, 'Feeding');
