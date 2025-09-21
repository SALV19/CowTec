const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const FeedingHistorySchema = new Schema({
  cowId: {type: Schema.Types.ObjectId, ref: "Cow", required: true},
  feedingId: {type: Schema.Types.ObjectId, ref: 'Feeding', required: true},
  startDate: {type: Schema.Types.Date, required: true},
  endDate: Date,
})

FeedingHistorySchema.statics.findById = function(id) {
  return this.find({id}).lean
}

FeedingHistorySchema.statics.createFeedingHistory = function(data) {
  return this.create(data)
}

module.exports = mongoose.model('FeedingHistory', FeedingHistorySchema, 'FeedingHistory');
