var express = require('express');
var router = express.Router();

var jsonResponse = function (res, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
};

var answerCards = [
  {id: 1, title: 'And'},
  {id: 2, title: 'Bootstrap'},
  {id: 3, title: 'Cards'},
  {id: 4, title: 'Dog'},
  {id: 5, title: 'End'},
  {id: 11, title: 'Fred'},
  {id: 12, title: 'Go'},
  {id: 13, title: 'Hugh'},
  {id: 14, title: 'Ivor'},
  {id: 15, title: 'Jerry'},
  {id: 111, title: 'Kind'},
  {id: 112, title: 'Loom'},
  {id: 113, title: 'Moon'},
  {id: 114, title: 'Noon'},
  {id: 115, title: 'Oooh'},
];

var statements = [
    {id: 1, statement: 'This is an example of a _ question'},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  var cards = [];
  for (var i = 0; i < 8; i++) {
      cards.push(answerCards[Math.floor(Math.random() * answerCards.length)]);
  }

  console.log(cards[1]);

  res.render('index', {
    title: 'Cards Against Hugh-Manatee',
    parimarycard: 'foo',
    cards: cards
  });
});

/* GET home page. */
router.get('/draw/answer/:number?', function(req, res, next) {
  var number = req.params.number || 1;

  var cards = [];

  for (var i = 0; i < number; i++) {
      cards.push(answerCards[Math.floor(Math.random() * answerCards.length)]);
  }

  jsonResponse(res, cards);
});

module.exports = router;
