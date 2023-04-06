const mongoose = require("mongoose");

const emotionalProfilingSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  status: {
    type: String,
  },
  activityType: {
    type: String,
    publicId: String,
  },
  description: {
    type: String,
  },
  questionType: {
    text: String,
  },
  totalPoints: {
    text: Number,
  },
  acheivedPoints: {
    text: Number,
  },
  questions: [{}],
});

module.exports = mongoose.model(
  "EmotionalProfiling",
  emotionalProfilingSchema,
  "emotional-profiling"
);
