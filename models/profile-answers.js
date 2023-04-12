const mongoose = require("mongoose");

const ProfileAnswersSchema = new mongoose.Schema({
  survayName: {
    type: String,
  },
  survayId: {
    type: String,
  },
  sumbittedById: {
    type: String,
  },

  answerList: [
    {
      AnswerId: Number,
      IsChecked: Boolean,
      Answer: String,
      QuestionId: String,
      Question: String,
    },
  ],
});

module.exports = mongoose.model(
  "ProfileAnswers",
  ProfileAnswersSchema,
  "profile-questions-results"
);
