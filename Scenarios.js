var counter = 1;
exports.switchPokemon = function(player, pokemon1, pokemon2) {
  player.currentPokemon = pokemon2;
  pokemon2.status = 'battling';
  if(pokemon1 !== undefined) {
    pokemon1.status = 'idle';
  }
  return player
}

exports.pokemonDied = function(player, pokemon1, pokemon2) {
  player.currentPokemon = pokemon2;
  pokemon2.status = 'battling';
  pokemon1.status = 'fainted';

  return pokemon1.status;
}

exports.playerAttack = function playerAttack(pokemon, enemy, move) {
  var atk = pokemon.atk;
  var dmg = move.damage;
  var critChance = move.criticalChance / 10;
  var reChance = move.recursionChance / 10;


  dmg /= 12;
  atk /= 30;
  var totalDamage = dmg + atk;

  if (Math.random() * 10 < reChance) {
    enemy.currentHP -= Math.round(totalDamage);
    console.log(move.name + ' did ' + Math.round(totalDamage) + ' damage!');
    console.log('Enemy ' + enemy.name + ' health is at ' + enemy.currentHP.toString().red + '!');
    counter++;
    playerAttack(pokemon,enemy,move);
    return;
  } else if(Math.random() * 10 < critChance) {
    console.log(move.name + ' crit for ' + (Math.round(totalDamage * 1.2)) + '!');
    enemy.currentHP -= Math.round(totalDamage * 1.2);
    console.log('Enemy ' + enemy.name + ' health is at ' + enemy.currentHP.toString().red + '!');
    return;
  } else {
    enemy.currentHP -= Math.round(totalDamage);
    console.log(move.name + ' did ' + Math.round(totalDamage) + ' damage!');
    console.log('Enemy ' + enemy.name + ' health is at ' + enemy.currentHP.toString().red + '!');
    if (counter > 0) {
      console.log(move.name + ' hit ' + (counter).toString().blue + ' times!');
      counter = 1;
    }
    return totalDamage;
  }
}
