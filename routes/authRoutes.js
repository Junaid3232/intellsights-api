const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const questionController = require("../controllers/questionsController");
const upload = require("../helpers/FileUpload");
const beverageController = require("../controllers/beverageController");
const profileAnswers = require("../controllers/answerController");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/", authController.test);
router.get("/get-emotional-questions", questionController.questions);
router.get(
  "/get-profile-questions",
  questionController.profileQuestionsController
);
router.post("/add-beverage", upload, beverageController.addBeverage);
router.post("/save-profile-answers", profileAnswers.profileAnswers);
router.post("/save-emotional-answers", profileAnswers.profileAnswers);
module.exports = router;
