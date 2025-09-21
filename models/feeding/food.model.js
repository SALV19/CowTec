const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const FoodSchema = new Schema({
  foodId: ObjectId,
  name: String,
  price: Number
})

FoodSchema.statics.findById = function(id) {
  return this.find({id}).lean
}

FoodSchema.statics.createFood = function(data) {
  return this.create(data)
}

module.exports = mongoose.model('Food', FoodSchema, 'Food');
