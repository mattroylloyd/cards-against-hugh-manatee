var express = require('express');
var router = express.Router();

var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '181087',
  key: '84e4a1b554378879fa22',
  secret: '6d4df5589c7301055b97',
  encrypted: true
});

pusher.port = 443;

var names = ['Remain','Seemly','Preach','Count','Chickens','Present','Chase','Fact','Bathe','Shivering','Edge','Twist','Steady','Approval','Bore','Pail','Loving','Gaping','Succinct','Sour','Fancy','Temper','Hour','Bite-sized','Fancy','Trucks','Marry','Tangible','Average','Chief','Interesting','Soft','Able','Arm','Mysterious','Nosy','Concern','Normal','Stove','Like','Bow','Nice','Sparkling','Love','Domineering','Night','Test','Uptight','Giddy','Impress','Future','Guide','Credit','Discover','List','Basin','Upbeat','Car','Air','Sable','Gaze','Embarrassed','Relax','Fish','Repair','Children','Ticket','Turn','Order','Ratty','Correct','Glow','Ignore','Weight','Zip','Search','Necessary','Reduce','Wrestle','Crash','Ethereal','Face','Button','Cherries','Burly','Crime','Cake','Same','Graceful','Ugliest','Rhyme','Unsuitable','Drag','Living','Control','Mixed','Tightfisted','Stay','Screeching','Ring','Blue','Parsimonious','Pointless','Waste','Appreciate','Save','Changeable','Burst','Uninterested','Attach','Explain','Sweet','Undress','Fork','Gate','Mammoth','Baby','Force','Parcel','Elfin','Observant','Level','Stare','Repeat','Jelly','Church','Influence','Found','Oafish','Romantic','Mouth','Soup','Cent','Tap','Design','Action','Overjoyed','Full','Lamentable','Wilderness','Grape','Mellow','Valuable','Plant','Moan','Dress','Challenge','Laugh','Trade','Pleasant','Clean','Vessel','Own','Silk','Sweltering','Fine','Sleet','Brick','Wandering','Interfere','Lunch','Friction','Funny','Wish','Sofa','Misty','Delightful','Sneaky','Old','Lock','Month','Sneeze','Productive','Jumbled','Friend','Use','Extend','Judge','Knock','Fuel','Identify','Used','Shop','Silver','Scattered','Two','Delay','Smooth','Juice','Race','Horses','Cry','Rainy','Visit','Long-term','Accidental','Farm','Tendency','Mere','Shake','Trap','Time','Hate','Noxious','Pull','Authority','Secret','Monkey','Punch','Smoke','Obscene','Announce','Dependent','Wine','Awake','Eggnog','Form','Ambitious','Unique','Shaky','Trick','Hospitable','Naive','Increase','Muddle','Exist','Pack','Well-groomed','Book','Overrated','Choke','Quirky','Real','Whistle','Mint','Ad Hoc','Party','Bounce','Kick','Vigorous','Animated','Trot','Grab','Attractive','Arrive','Lamp','Clip','Icicle','Pies','Slip','Appear','Muddled','Erratic','Uncovered','Spark','Linen','Outgoing','Jail','Square','Ruddy','Chalk','Name','Texture','Tremendous','Hand','Wretched','Resonant','Calculator','Fasten','Title','Complex','Better','Receptive','Part','Guide','Scrape','Camp','Accept','Crazy','Fruit','Education','Afford','Hair','Shiver','Nod','Seat','Thought','Tail','Abaft','Space','Disappear','Sand','Foregoing','Noiseless','Lavish','Jeans','Well-off','Exciting','Acrid','Limit','School','Rule','Guess','Sticky','Handy','Food','Alluring','Weary','Stream','Ocean','Milk','Rightful','Deadpan','Vacuous','Beg','Jam','Error','Quartz','Garrulous','Neighborly','Military','Useless','Kill','Cemetery','Unused','Roomy','Laughable','Different','Creator','Drink','Flight','Front','Sponge','Daily','Nerve','Icky','Needy','Cagey','Obtain','Wood','Glorious','Lighten','Evasive','Berry','Shut','Prefer','Classy','Shaggy','Brake','Imaginary','Wiry','Cynical','Smash','Nest','Juicy','Happy','Scarecrow','Unnatural','Eminent','Intelligent','Man','Torpid','Tame','Transport','Ashamed','Tense','Muscle','Program','Copy','Grotesque','Watery','Sisters','Rhythm','Listen','Rejoice','Letter','Chess','Foolish','Boundless','Wooden','Horn','Pie','Thaw','Unknown','Play','Quilt','Try','Spell','Hole','Acceptable','Gaudy','Basket','Dirty','Fanatical','Relation','Dizzy','Cakes','Abusive','Clear'];

var jsonResponse = function (res, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
};

var random = function (data) {
    return data[Math.floor(Math.random() * data.length)];
};

var answerCards = [
  {id: 1, title: 'The Great Barrier Reef'},
  {id: 2, title: 'Something something something'},
];

var statements = [
    {id: 1, statement: 'This is an example of a _ question'},
    {id: 2, statement: '_ likes to do the thing'},
    {id: 3, statement: 'Conferences bring out the _ in everyone'},
    {id: 4, statement: 'I eat _ with a spoon'},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Cards Against Hugh-Manatee',
  });

  // register user
  // draw them a hand
});

/* GET home page. */
router.get('/draw/answer/:number?', function(req, res, next) {
  var number = req.params.number || 1;

  var cards = [];

  for (var i = 0; i < number; i++) {
      cards.push(random(answerCards));
  }

  jsonResponse(res, cards);
});

router.get('/draw/phpazar', function (req, res, next) {
    jsonResponse(res, random(statements));
});

router.get('/register/:uuid', function (req, res, next) {
    jsonResponse(res, {uuid: req.params.uuid});
});

module.exports = router;
