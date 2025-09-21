const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const MilkProductionSchema = new Schema({
  cowId: {type: Schema.Types.ObjectId, ref: "Cow", required: true},
  machineProduction: {
    type: Schema.Types.ObjectId, 
    ref: "MachineProduction", 
    required: true
  },
  lactancy: Number,
  milkDays: Number,
  lastMilkWeight: Number,
  fatPercentage: Number,
  proteinPercentage: Number,
  lactosePercentage: Number,
  ureaNitrogen: Number,
  solidsNonFat: Number,
  linearScc: Number,
})

MilkProductionSchema.statics.findById = function(id) {
  return this.find({id}).lean
}

MilkProductionSchema.statics.createMilkProduction = function(data) {
  return this.create(data)
}

module.exports = mongoose.model('MilkProduction', 
  MilkProductionSchema, 'MilkProduction');
