const mongoose = require("mongoose");

const ProfileAnswersSchema = new mongoose.Schema({
  Survay: {
    type: String,
  },
  Id: {
    type: String,
  },

  Questions: [
    {
      Id: Number,
      Name: String,
      Answers: {
        Id: Number,
        Name: String,
        Score: Number,
      },
    },
  ],
});

module.exports = mongoose.model(
  "ProfileAnswers",
  ProfileAnswersSchema,
  "questions-results"
);
