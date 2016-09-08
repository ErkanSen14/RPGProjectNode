var Bag = require('./Datastructures/dictionary.js')

var medicine = [
  {hpBoost:{quantity:3}},
  {speedBoost:{quantity: 2}},
  {defenceBoost:{quantity: 1}},
  {poisonHeal:{quantity: 3}},
  {paralysisHeal:{quantity: 2}},
]

var items = [
  {fishingPole: {quantity: 1}},
  {bike:{quantity: 3}},
  {map: {quantity: 2}}
]

var pokeballs = [
  {PokeBalls: {quantity: 34}},
  {GreatBall: {quantity: 20}},
  {UltraBall: {quantity: 10}},
  {MasterBall: {quantity: 1}}
]

var berries = [
  {attackBerry: {quantity: 3}},
  {defenseBerry: {quantity: 2}},
  {attack_defense_berry: {quantity:1}},
  {speedBerry: {quantity:2}}
]

Bag.set('medicine', medicine );
Bag.set('items', items);
Bag.set('pokeballs', pokeballs);
Bag.set('berries', berries);

//console.log(Bag.get('medicine'))

module.exports = Bag;
