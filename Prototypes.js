exports.Pokemon = function(name,moves,atk,hp,def,dodge) {
  this.name = name;
  this.moves = moves;
  this.atk = atk;
  this.hp = hp;
  this.def = def;
  this.dodge = dodge;
}

exports.Move = function() {
  this.damage;
  this.recursionChance;
  this.criticalChance;
  this.name;
}

exports.Player = function() {
  this.name;
  this.pokemon;
  this.items;
}
