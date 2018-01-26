var express = require('express');
var router = express.Router();
var quizModel = require('../model/quizModel');

/* GET quiz listing. */
router.get('/', function(req, res, next) {
  quizModel.find((err, data) => {
    res.json(data);
  });
});

/* Post quiz listing. */
router.post('/', function(req, res, next) {
  let data = {name: "quiz1", title: "Kedvenc ételeid",
    description: "válaszd ki a kedvenc ételed"};
  let quiz = new quizModel(data);
  quiz.save((err, data) => {
    res.json(data);
  });
});
module.exports = router;
