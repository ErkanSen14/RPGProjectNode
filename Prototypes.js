exports.Pokemon = function(name,moves,atk,maxHP,def,dodge) {
  this.name = name;
  this.moves = moves;
  this.atk = atk;
  this.maxHP = maxHP;
  this.currentHP = maxHP;
  this.def = def;
  this.dodge = dodge;
}

exports.Move = function(name, damage, recursionChance, criticalChance) {
  this.name = name;
  this.damage = damage;
  this.recursionChance = recursionChance;
  this.criticalChance = criticalChance;
}

exports.Player = function() {
  this.name;
  this.pokemon;
  this.items;
}
