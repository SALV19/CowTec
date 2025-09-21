const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const MachineSchema = new Schema({
  machineId: ObjectId,
  maintenanceCost: Number,
  state: {type: String, enum: ["Working", "Broken", "Reparing"]},
  capacity: Number,
})

MachineSchema.statics.findById = function(id) {
  return this.find({id}).lean
}

MachineSchema.statics.createMachine = function(data) {
  return this.create(data)
}

module.exports = mongoose.model('Machine', MachineSchema, 'Machine');