// document.getElementById('BUTTON_greekFacts').onclick = function() {
// alert('hi');

var greek = document.getElementById('BUTTON_greekFacts');

 greek.onclick = function() {

  var greekFacts = [
    'Posideon is the God of water',
    'Zeus is the king of Olympus, and the God of the sky',
    'Hades is the Lord of the Underworld',
    'Hera is the Goddess of Marrige and Birth',
    'Demeter is the Goddess of Agricultre',
    'Hestia is the Goddess of the Hearth',
    'Athena is the Goddess of Warfare and Wisdom',
    'Aphrodite is the Goddess of Love ',
    'Ares is the God of War ',
    'Apollo is the God of Archery',
    'Artemis is the Goddess of The Hunt',
    'Hephaestus is the God of The Forge ',
    'Hermes is the God of Messenger ',
    'Dionysus is the God of Wine(Do not drink wine until you are 35. Okay kids)'
  ];

  var beginningOfPhrase = 'Your Random Greek Fact is ';
  var fact;

  var randomIndex = Math.floor( Math.random() * greekFacts.length)
  fact = greekFacts[randomIndex]

 alert(beginningOfPhrase + fact);
};


var roman = document.getElementById('BUTTON_romanFacts');

 roman.onclick = function() {

  var romanFacts = [
    'Neptune is the God of water',
    'Jupiter is the king of Olympus, and the God of the sky',
    'Pluto is the Lord of the Underworld',
    'Juno is the Goddess of Marrige and Birth',
    'Ceres is the Goddess of Agricultre',
    'Vesta is the Goddess of the Hearth',
    'Minerva is the Goddess of Warfare and Wisdom',
    'Venus is the Goddess of Love',
    'Mars is the God of War ',
    'Apollo is the God of Archery (His name is the same Greek and Roman)',
    'Diana is the Goddess of The Hunt',
    'Vulcan is the God of The Forge ',
    'Mercury is the God of Messenger ',
    'Bacchus is the God of Wine(Do not drink wine until you are 35. Okay kids) '
  ];

  var beginningOfPhrase = 'Your Random Roman Fact is ';
  var fact;

  var randomIndex = Math.floor( Math.random() * romanFacts.length)
  fact = romanFacts[randomIndex]

 alert(beginningOfPhrase + fact);
};
