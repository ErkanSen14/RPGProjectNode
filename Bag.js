function Dictionary() {
  this.memory = [];
}

Dictionary.prototype.get = function get(key) {
  return this.memory[key];
}

Dictionary.prototype.set = function set(key, value) {
  this.memory[key] = value;
}

Dictionary.prototype.remove = function remove(key) {
  if(this.memory[key]) {
    delete this.memory[key]
  }
}

var Bag = new Dictionary();

var medicine = {
  hpBoost: 3,
  speedBoost: 3,
  defenceBoost: 1,
  poisonHeal: 1,
  paralysisHeal: 3,
  poisonHeal: 2
}

var items = {
  fishingPole: 1,
  bike: 1,
  map: 1
}

var pokeballs = {
  PokeBalls: 34,
  GreatBall: 20,
  UltraBall: 10,
  MasterBall: 1
}

var berries = {
  attackBerry: 3,
  defenseBerry: 2,
  attack_defense_berry: 1,
  speedBerry: 2
}

Bag.set('medicine', medicine );
Bag.set('items', items);
Bag.set('pokeballs', pokeballs);
Bag.set('berries', berries);

//console.log(Bag)

module.exports = Bag;
