const EmotionalProfiling = require("../models/questions");
const ProfileQuestions = require("../models/profile-questions");
const ProfileAnswers = require("../models/answers");

module.exports.profileAnswers = async (req, res) => {
  const { survayId, Answers, SurvayName } = req.body;
  try {
    const AnseweringSurvay = await ProfileAnswers.find({ Id: survayId });

    const Survay = AnseweringSurvay[0].Questions;

    for (const AnsweredQuestion of AnseweringSurvay) {
      for (const [index, answer] of Answers.entries()) {
        if (answer.Id == AnsweredQuestion.Id) {
          const profileAnswer = new ProfileAnswers({
            Survay: SurvayName,
            Id: survayId,
            Questions: [
              {
                Id: answer.Id,
                Name: answer.Name,
                Answers: {
                  Name: answer.CheckListSection[index].Name,
                  Id: answer.CheckListSection[index].Id,
                  Score: 2,
                },
              },
            ],
          });

          await profileAnswer.save();
        }
      }
    }
    // const QuestionType = AnseweringSurvay;
    // console.log("AnseweringSurvay---", AnseweringSurvay[0]);
    // const profileAnswer = new ProfileAnswers({
    //   Survay: "Media",
    //   Id: 1,
    //   Questions: [
    //     {
    //       Id: 1,
    //       Name: "What is your current family status?",
    //       Answers: {
    //         Name: "Single",
    //         Id: 0,
    //         Score: 2,
    //       },
    //     },
    //   ],
    // });
    // console.log("-----profileAnswer", profileAnswer);
    // await profileAnswer.save();
    // let questionAnswerd = undefined;
    // for (const question of QuestionType) {
    //   for (const answer of Answers)
    //     if (question.Id == answer.Id) {
    //       questionAnswerd = question;

    //       const profileAnswer = new ProfileAnswers({
    //         Survay: AnseweringSurvay[0].Name,
    //         Id: AnseweringSurvay[0].Id,
    //         Answers: [
    //           {
    //             Id: 1,
    //             Name: "What is your current family status?",
    //             Answers: {
    //               Name: "Single",
    //               Id: 0,
    //               Score: 2,
    //             },
    //           },
    //         ],
    //       });
    //       console.log("-----profileAnswer", profileAnswer);
    //       await profileAnswer.save();
    //     }
    // }

    res
      .status(200)
      .json({ isSuccess: true, message: "Answers submitted successfully" });
  } catch (err) {
    res.status(500).json({ isSuccess: false, message: err?.message });
  }
};
