const EmotionalProfiling = require("../models/questions");
const ProfileQuestions = require("../models/profile-questions");

module.exports.questions = async (req, res) => {
  try {
    const questions = await EmotionalProfiling.find({});
    res.status(200).json({ isSuccess: true, questions });
  } catch (err) {
    res.status(500).json({ isSuccess: false, message: err?.message });
  }
};

module.exports.profileQuestionsController = async (req, res) => {
  try {
    const questions = await ProfileQuestions.find({});
    res.status(200).json({ isSuccess: true, questions });
  } catch (err) {
    res.status(500).json({ isSuccess: false, message: err?.message });
  }
};
