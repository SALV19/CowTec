const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const MachineProductionSchema = new Schema({
  machineId: {type: Schema.Types.ObjectId, ref: "Machine", required: true},
  date: Date,
  production: Number,
})

MachineProductionSchema.statics.findById = function(id) {
  return this.find({id}).lean
}

MachineProductionSchema.statics.MachineProduction = function(data) {
  return this.create(data)
}

module.exports = mongoose.model('MachineProduction', 
  MachineProductionSchema, 'MachineProduction');
