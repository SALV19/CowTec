const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FoodComponentSchema = new Schema({
  foodCompoentId: ObjectId,
  foodComposition: [
    {
      foodId: {type: Schema.Types.ObjectId, required: true},
      percentage: Number,
    }
  ],
  ammount: Number
})

FoodComponentSchema.statics.findById = function(id) {
  return this.find({id}).lean
}

FoodComponentSchema.statics.createFoodComponent = function(data) {
  return this.create(data)
}

module.exports = mongoose.model('FoodComponent', FoodComponentSchema, 'FoodComponent');
