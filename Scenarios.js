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
