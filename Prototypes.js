function Pokemon(name,moves,atk,maxHP,def,dodge) {
  this.name = name;
  this.moves = moves;
  this.atk = atk;
  this.maxHP = maxHP;
  this.currentHP = maxHP;
  this.def = def;
  this.dodge = dodge;
  this.status = 'idle';
}

exports.Pikachu = function() {
  Pokemon.apply(this,arguments);
  this.type = 'Electric';
}
exports.Venusaur = function() {
  Pokemon.apply(this,arguments);
  this.type = 'Grass';
}
exports.Charizard = function() {
  Pokemon.apply(this,arguments);
  this.type = 'Fire';
}
exports.Blastoise = function() {
  Pokemon.apply(this,arguments);
  this.type = 'Water';
}
exports.Psyduck = function() {
  Pokemon.apply(this,arguments);
  this.type = 'Psychic';
}
exports.Gastly = function() {
  Pokemon.apply(this,arguments);
  this.type = 'Ghost';
}
exports.Gyarados = function() {
  Pokemon.apply(this,arguments);
  this.type = 'Water';
}
exports.Snorlax = function() {
  Pokemon.apply(this,arguments);
  this.type = 'Normal';
}
exports.Ninetales = function() {
  Pokemon.apply(this,arguments);
  this.type = 'Fire';
}
exports.Jigglypuff = function() {
  Pokemon.apply(this,arguments);
  this.type = 'Normal';
}
exports.Gloom = function() {
  Pokemon.apply(this,arguments);
  this.type = 'Poison';
}
exports.Alakazam = function() {
  Pokemon.apply(this,arguments);
  this.type = 'Psychic';
}
exports.Move = function() {
  this.name;
  this.damage;
  this.recursionChance;
  this.criticalChance;
}

exports.Player = function() {
  this.name;
  this.pokemon;
  this.currentPokemon;
  this.items;
}
