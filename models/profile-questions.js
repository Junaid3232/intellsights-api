const mongoose = require("mongoose");

const ProfileQuestionsSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  Name: {
    type: String,
  },
  QuestionType: [{}],
});

module.exports = mongoose.model(
  "ProfileQuestions",
  ProfileQuestionsSchema,
  "profile-questions"
);
