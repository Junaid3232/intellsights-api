const ProfileAnswers = require("../models/profile-answers");
const EmotionalAnswers = require("../models/emotional-answers");

module.exports.profileAnswers = async (req, res) => {
  const { survayId, survayName, sumbittedById, answerList } = req.body;
  try {
    const userAnswers = ProfileAnswers({
      survayId,
      survayName,
      sumbittedById,
      answerList,
    });
    await userAnswers
      .save()
      .then(() =>
        res
          .status(200)
          .json({ isSuccess: true, message: "Answers submitted successfully" })
      )
      .catch((er) =>
        res
          .status(400)
          .json({ isSuccess: false, message: "Answers not submitted" })
      );
  } catch (err) {
    res.status(500).json({ isSuccess: false, message: err?.message });
  }
};

module.exports.emotionalAnswers = async (req, res) => {
  const { survayId, survayName, sumbittedById, answerList } = req.body;
  try {
    const userAnswers = EmotionalAnswers({
      survayId,
      survayName,
      sumbittedById,
      answerList,
    });
    await userAnswers
      .save()
      .then(() =>
        res
          .status(200)
          .json({ isSuccess: true, message: "Answers submitted successfully" })
      )
      .catch((er) =>
        res
          .status(400)
          .json({ isSuccess: false, message: "Answers not submitted" })
      );
  } catch (err) {
    res.status(500).json({ isSuccess: false, message: err?.message });
  }
};
