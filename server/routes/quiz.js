var express = require('express');
var router = express.Router();
var quizModel = require('../model/quizModel');
var questionModel = require('../model/questionModel');

/* GET quiz listing. */
router.get('/', (req, res, next) => {
  quizModel.find((err, data) => {
    res.json(data);
  });
});

/* Post quiz listing. */
router.post('/', (req, res, next) => {
  let data = {name: "quiz1", title: "Kedvenc ételeid",
    description: "válaszd ki a kedvenc ételed"};
  let quiz = new quizModel(data);
  quiz.save((err, data) => {
    res.json(data);
  });
});

/* Get for generate questions. */
router.get('/generate', (req, res, next) => {
  const questions = [];
  for (let i = 0; i < 5; i++) {
    let question = new questionModel({
      name: 'q1',
      title: 'Mogyoró',
      content: 'Szereted a mogyorót?',
      description: 'jól fontold meg a választ',
      answers: [
        {correct: true, content: 'igen'},
        {correct: false, content: 'nem'},
        {correct: false, content: 'én csak a banánt szeretem'}
      ]
    });
    questions.push( question );
  }
  questionModel.insertMany(questions, (err, questions) => {
    // Get quizes.
    const ids = [];
    for (let question of questions) {
      ids.push(question._id);
    }
    quizModel.find((err, res) => {
      for (let quiz of res) {
        quiz.questions = ids;
        quiz.save();
      }
    });
    res.send("Kész");
  });
});

/* Get one quiz. */
router.get("/:id", (req, res, next) => {
  quizModel.findOne({_id: req.params.id}, (err, quiz) => {
    if (err || !quiz) {
      return res.sendStatus(404);
    }
    res.json(quiz);
  });
});

module.exports = router;
