var counter = 1;
exports.switchPokemon = function(player, pokemon1, pokemon2) {
  player.currentPokemon = pokemon2;
  pokemon2.status = 'battling';

 if(pokemon1 === undefined) {
    return;
  } else if(pokemon1.status === 'fainted') {
      return player;
  } else {
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

  /* If move recurses */
  if (Math.random() * 10 < reChance) {
    enemy.currentHP -= Math.round(totalDamage);
    console.log(move.name + ' did ' + Math.round(totalDamage) + ' damage!');
    if (enemy.currentHP <= 0) {
      enemy.currentHP = 0;
      if (counter > 1) {
        console.log(move.name + ' hit ' + (counter).toString().blue + ' times!');
        counter = 1;
      }
      console.log('Enemy ' + enemy.name.toString().gray + ' fainted!');
      return;
    }
    console.log('Enemy ' + enemy.name.toString().gray + ' health is at ' + enemy.currentHP.toString().red + '!');
    counter++;
    playerAttack(pokemon,enemy,move);
    return;
  }

  /* If move crits (can't crit and recurse) */
  else if(Math.random() * 10 < critChance) {
    console.log(move.name + ' crit for ' + (Math.round(totalDamage * 1.2)) + '!');
    enemy.currentHP -= Math.round(totalDamage * 1.2);
    console.log('Enemy ' + enemy.name.toString().gray + ' health is at ' + enemy.currentHP.toString().red + '!');
    return;
  }

  /* If move doesn't do either */
  else {
    enemy.currentHP -= Math.round(totalDamage);
    console.log(move.name + ' did ' + Math.round(totalDamage) + ' damage!');
    if (enemy.currentHP <= 0) {
      enemy.currentHP = 0;
      if (counter > 1) {
        console.log(move.name + ' hit ' + (counter).toString().blue + ' times!');
        counter = 1;
      }
      console.log('Enemy ' + enemy.name.toString().gray + ' fainted!');
      return;
    }
    console.log('Enemy ' + enemy.name.toString().gray + ' health is at ' + enemy.currentHP.toString().red + '!');
    if (counter > 1) {
      console.log(move.name + ' hit ' + (counter).toString().blue + ' times!');
      counter = 1;
    }
    return totalDamage;
  }
}


exports.enemyAttack = function playerAttack(pokemon, enemy, move) {
  var atk = pokemon.atk;
  var dmg = move.damage;
  var critChance = move.criticalChance / 10;
  var reChance = move.recursionChance / 10;


  dmg /= 12;
  atk /= 30;
  var totalDamage = dmg + atk;

  /* If move recurses */
  if (Math.random() * 10 < reChance) {
    enemy.currentHP -= Math.round(totalDamage);
    console.log(move.name + ' did ' + Math.round(totalDamage) + ' damage!');
    if (enemy.currentHP <= 0) {
      if (counter > 1) {
        console.log(move.name + ' hit ' + (counter).toString().blue + ' times!');
        counter = 1;
      }
      enemy.currentHP = 0;
      console.log('Pokemon ' + enemy.name.toString().gray + ' fainted!');
      return;
    }
    console.log('Pokemon ' + enemy.name.toString().gray + ' health is at ' + enemy.currentHP.toString().red + '!');
    counter++;
    playerAttack(pokemon,enemy,move);
    return;
  }

  /* If move crits (can't crit and recurse) */
  else if(Math.random() * 10 < critChance) {
    console.log(move.name + ' crit for ' + (Math.round(totalDamage * 1.5)) + '!');
    enemy.currentHP -= Math.round(totalDamage * 1.5);
    if (enemy.currentHP <= 0) {
      enemy.currentHP = 0;
      console.log('Pokemon ' + enemy.name.toString().gray + ' fainted!');
      return;
    }
    console.log('Pokemon ' + enemy.name.toString().gray + ' health is at ' + enemy.currentHP.toString().red + '!');
    return;
  }

  /* If move doesn't do either */
  else {
    enemy.currentHP -= Math.round(totalDamage);
    console.log(move.name + ' did ' + Math.round(totalDamage) + ' damage!');
    if (enemy.currentHP <= 0) {
      enemy.currentHP = 0;
      if (counter > 1) {
        console.log(move.name + ' hit ' + (counter).toString().blue + ' times!');
        counter = 1;
      }
      console.log('Pokemon ' + enemy.name.toString().gray + ' fainted!');
      return;
    }
    console.log('Pokemon ' + enemy.name.toString().gray + ' health is at ' + enemy.currentHP.toString().red + '!');
    if (counter > 1) {
      console.log(move.name + ' hit ' + (counter).toString().blue + ' times!');
      counter = 1;
    }
    return totalDamage;
  }
}
