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
  {id: 1, title: "An 'extremely credible source' has called my office and told me that Barack Obama's birth certificate is a fraud"},
  {id: 2, title: "Robert Pattinson should not take back Kristen Stewart. She cheated on him like a dog & will do it again - just watch. He can do much better!"},
  {id: 3, title: "Ariana Huffington is unattractive, both inside and out. I fully understand why her former husband left her for a man - he made a good decision."},
  {id: 4, title: "You know, it really doesn't matter what the media write as long as you've got a young, and beautiful, piece of ass."},
  {id: 5, title: "I will build a great wall - and nobody builds walls better than me, believe me - and I'll build them very inexpensively. I will build a great, great wall on our southern border, and I will make Mexico pay for that wall. Mark my words."},
  {id: 6, title: "When Mexico sends its people, they're not sending the best. They're not sending you, they're sending people that have lots of problems and they're bringing those problems with us. They're bringing drugs. They're bring crime. They're rapists… And some, I assume, are good people."},
  {id: 7, title: "Our great African-American President hasn't exactly had a positive impact on the thugs who are so happily and openly destroying Baltimore."},
  {id: 8, title: "If I were running 'The View', I'd fire Rosie O'Donnell. I mean, I'd look at her right in that fat, ugly face of hers, I'd say 'Rosie, you're fired.'"},
  {id: 9, title: "All of the women on The Apprentice flirted with me - consciously or unconsciously. That's to be expected."},
  {id: 10, title: "One of they key problems today is that politics is such a disgrace. Good people don't go into government."},
  {id: 11, title: "The beauty of me is that I'm very rich."},
  {id: 12, title: "It's freezing and snowing in New York - we need global warming!"},
  {id: 13, title: "I've said if Ivanka weren't my daughter, perhaps I'd be dating her."},
  {id: 15, title: "My fingers are long and beautiful, as, it has been well documented, are various other parts of my body."},
  {id: 16, title: "I have never seen a thin person drinking Diet Coke."},
  {id: 17, title: "I think the only difference between me and the other candidates is that I'm more honest and my women are more beautiful."},
  {id: 18, title: "You're disgusting."},
  {id: 19, title: "The point is, you can never be too greedy."},
  {id: 20, title: "Sorry, there is no STAR on the stage tonight!"},
  {id: 21, title: "My Twitter has become so powerful that I can actually make my enemies tell the truth."},
  {id: 22, title: "My IQ is one of the highest - and you all know it! Please don't feel so stupid or insecure; it's not your fault."},
  {id: 23, title: "I have so many fabulous friends who happen to be gay, but I am a traditionalist."},
  {id: 24, title: "The other candidates - they went in, they didn't know the air conditioning didn't work. They sweated like dogs...How are they gonna beat ISIS? I don't think it's gonna happen. "},
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

router.post('/play', function(req, res) {
  var card = req.params.card;
  var userId = req.params.userId;

  // trigger event to add card to answer pool with user id

  jsonResponse(res, []);
});

router.get('/draw/phpazar', function (req, res, next) {
    jsonResponse(res, random(statements));
});

router.get('/register/:uuid', function (req, res, next) {
    jsonResponse(res, {uuid: req.params.uuid});
});

module.exports = router;
