var readline = require('readline')
var Player = require('./Prototypes').Player
var Pokemon = require('./Pokemon')
var Scenarios = require('./Scenarios')
var theBag = require('./Bag')

/* Creating the Players */

var Player1 = new Player();
Player1.pokemon = Pokemon.Player1;
var Player2 = new Player();
Player2.name = 'Gary';
Player2.pokemon = Pokemon.Player2;
Player2.currentPokemon = Player2.pokemon[Math.round(Math.random() * 5)];

/* Opening text asking for name */
var rl = readline.createInterface(process.stdin, process.stdout);
rl.question('What is your name? ', function(answer) {
    Player1.name = answer
    console.log('Welcome to the battle, ' + Player1.name + '!' )
    rl.close()
    SwitchPokemon();
    return;
});

/* Main Menu */
function MenuPhase() {
  var rl = readline.createInterface(process.stdin, process.stdout);
  rl.question('What do you want to do? \n1.FIGHT\n2.SWITCH\n3.BAG\n4.QUIT\n', function(answer) {
      rl.close()
      if(answer === '1') {
        AttackPhase();
        return;
      } else if (answer === '2') {
        SwitchPokemon();
        return;
      } else if(answer === '3') {
        Bag();
        return;
      } else if (answer === '4') {
        return;
      } else {
        console.log('that is not an option')
        MenuPhase();
      }
  });
}

function AttackPhase() {
  for (var i = 0; i < Player1.currentPokemon.moves.length; i++) {
    console.log(i + ' ' + Player1.currentPokemon.moves[i].name);
  }
  var rl = readline.createInterface(process.stdin, process.stdout);
  rl.question('Choose an attack!', function(answer) {
      rl.close()
      if (answer === '0') {
        Scenarios.playerAttack(Player1.currentPokemon, Player2.currentPokemon, Player1.currentPokemon.moves[0]);
        if(Player2.currentPokemon.currentHP <= 0) {
          Player2.currentPokemon.status = 'fainted';
          var changePokemon = function() {
            var poke = Player2.pokemon[Math.round(Math.random() * 5)]
            if (poke.status === 'fainted') {
              return changePokemon();
            } else {
              return poke;
            }
          }
          Player2.currentPokemon = changePokemon();
          Player2.currentPokemon.status = 'battling';
          MenuPhase();
          return;
        }
        Scenarios.enemyAttack(Player2.currentPokemon, Player1.currentPokemon, Player2.currentPokemon.moves[Math.round(Math.random() * 4)]);
        if(Player1.currentPokemon.currentHP <= 0) {
          Player1.currentPokemon.status = 'fainted';
          SwitchPokemon();
          return;
        }
        MenuPhase();
        return;
      }
      if (answer === '1') {
        Scenarios.playerAttack(Player1.currentPokemon, Player2.currentPokemon, Player1.currentPokemon.moves[1]);
        if(Player2.currentPokemon.currentHP <= 0) {
          Player2.currentPokemon.status = 'fainted';
          var changePokemon = function() {
            var poke = Player2.pokemon[Math.round(Math.random() * 5)]
            if (poke.status === 'fainted') {
              return changePokemon();
            } else {
              return poke;
            }
          }
          Player2.currentPokemon = changePokemon();
          Player2.currentPokemon.status = 'battling';
          MenuPhase();
          return;
        }
        Scenarios.enemyAttack(Player2.currentPokemon, Player1.currentPokemon, Player2.currentPokemon.moves[Math.round(Math.random() * 4)]);
        if(Player1.currentPokemon.currentHP <= 0) {
          Player1.currentPokemon.status = 'fainted';
          SwitchPokemon();
          return;
        }
        MenuPhase();
        return;
      }
      if (answer === '2') {
        Scenarios.playerAttack(Player1.currentPokemon, Player2.currentPokemon, Player1.currentPokemon.moves[2]);
        if(Player2.currentPokemon.currentHP <= 0) {
          Player2.currentPokemon.status = 'fainted';
          var changePokemon = function() {
            var poke = Player2.pokemon[Math.round(Math.random() * 5)]
            if (poke.status === 'fainted') {
              return changePokemon();
            } else {
              return poke;
            }
          }
          Player2.currentPokemon = changePokemon();
          Player2.currentPokemon.status = 'battling';
        }
        Scenarios.enemyAttack(Player2.currentPokemon, Player1.currentPokemon, Player2.currentPokemon.moves[Math.round(Math.random() * 3)]);
        if(Player1.currentPokemon.currentHP <= 0) {
          Player1.currentPokemon.status = 'fainted';
          SwitchPokemon();
          return;
        }
        MenuPhase();
        return;
      }
      if (answer === '3') {
        Scenarios.playerAttack(Player1.currentPokemon, Player2.currentPokemon, Player1.currentPokemon.moves[3]);
        if(Player2.currentPokemon.currentHP <= 0) {
          Player2.currentPokemon.status = 'fainted';
          var changePokemon = function() {
            var poke = Player2.pokemon[Math.round(Math.random() * 5)]
            if (poke.status === 'fainted') {
              return changePokemon();
            } else {
              return poke;
            }
          }
          Player2.currentPokemon = changePokemon();
          Player2.currentPokemon.status = 'battling';
          MenuPhase();
          return;
        }
        Scenarios.enemyAttack(Player2.currentPokemon, Player1.currentPokemon, Player2.currentPokemon.moves[Math.round(Math.random() * 3)]);
        if(Player1.currentPokemon.currentHP <= 0) {
          Player1.currentPokemon.status = 'fainted';
          SwitchPokemon();
          return;
        }
        MenuPhase();
        return;
      }
  });
}

/* Menu to switch Pokemon, shows hp bars and status ailments */
function SwitchPokemon() {
  var hpString = '';
  for (var x = 0; x < Player1.pokemon.length; x++) {
    for (var i = 0; i < 15 * Player1.pokemon[x].currentHP / Player1.pokemon[x].maxHP ; i++) {
      hpString += ' ';
    }
    if(Player1.pokemon[x].status === 'idle'){
    console.log(x + '. ' + Player1.pokemon[x].name + '  ' + hpString.bgGreen + '  ' + Player1.pokemon[x].currentHP + '\n'); //print normally
  } else if (Player1.pokemon[x].status === 'battling') {
    console.log(x + '. ' + Player1.pokemon[x].name.green + '  ' + hpString.bgGreen + '  ' + Player1.pokemon[x].currentHP + '\n'); //print green
  } else {
    console.log(x + '. ' + Player1.pokemon[x].name.red + '  ' + hpString.bgGreen + '  ' + Player1.pokemon[x].currentHP + '\n'); //print red
  }
    hpString = '';
  }

  /* Switch Pokemon */
  var rl = readline.createInterface(process.stdin, process.stdout);
  rl.question('Choose a Pokemon: ', function(answer) {
      if (answer !== '0' && answer!== '1' && answer !== '2' && answer !== '3' && answer !== '4' && answer !== '5') {
        console.log('You did not choose a valid Pokemon');
        rl.close();
        SwitchPokemon();
      } else if (Player1.pokemon[Number(answer)].status === 'fainted') {
        console.log('That pokemon has fainted!');
        rl.close();
        SwitchPokemon();
      } else {
      Scenarios.switchPokemon(Player1, Player1.currentPokemon, Player1.pokemon[Number(answer)]);
      rl.close();
      MenuPhase();
    }
  });

}
/* Opening bag function */
function Bag() {
  var rl = readline.createInterface(process.stdin, process.stdout);
  rl.question('What type of item would you like to use? \n1.Medicine\n2.Items\n3.Pokeballs\n4.Berries\n', function(answer) {
    rl.close();
    if(answer === '1') {
      item(1);
    } else if(answer === '2') {
      item(2)
    } else if(answer === '3') {
      item(3)
    } else if(answer === '4') {
      item(4)
    } else {
      console.log('That is not an option')
      Bag();
    }
  });
}

/* after bag is opened, the items are called here */
function item(section) {
  var rl = readline.createInterface(process.stdin, process.stdout);
  if(section === 1) {
    var items = theBag.get('medicine');
    console.log(items)
      rl.question('What item would you like to use? ', function(answer) {
        rl.close()
        if(answer === 'hpBoost') {
          if(items[0].hpBoost.quantity <= 0) {
            console.log('Out of HP Boosts!');
            return;
          }
          Player1.currentPokemon.currentHP += 30;
          console.log('Pokemon ' + Player1.currentPokemon.name + ' health increased by ' + '30 '.green + '!')
          items[0].hpBoost.quantity -= 1;
        } else if(answer === 'speedBoost') {
          console.log('speedBoost')
        } else if(answer === 'defenceBoost') {
          console.log('defenceBoost')
        } else if(answer === 'poisonHeal') {
          console.log('poisonHeal')
        } else if(answer === 'paralysisHeal') {
          console.log('paralysisHeal')
        }
        MenuPhase();
      });
  } else if(section === 2){
    var items = theBag.get('items')
    for(var x = 0; x < items.length; x++) {
      console.log(items[x])
    }
      rl.question('What item would you like to use? ', function(answer) {
        rl.close()
        if(answer === 'fishingPole') {
          console.log('fishingPole')
        } else if(answer === 'bike') {
          console.log('bike')
        } else if(answer === 'map') {
          console.log('map')
        } else {
          console.log('not a valid item!')
        }
        MenuPhase();
      });
  } else if (section === 3){
    var items = theBag.get('pokeballs')
    for(var x = 0; x < items.length; x++) {
      console.log(items[x])
    }
      rl.question('What item would you like to use? ', function(answer) {
        rl.close()
        if(answer === 'pokeball') {
          console.log('pokeball')
        } else if(answer === 'greatball') {
          console.log('greatball')
        } else if(answer === 'ultraball') {
          console.log('ultraball')
        } else if(answer === 'masterball') {
          console.log('masterball')
        } else {
          console.log('not a valid item!')
        }
        MenuPhase();
      });
  } else if (section === 4){
    var items = theBag.get('berries')
    for(var x = 0; x < items.length; x++) {
      console.log(items[x])
    }
      rl.question('What item would you like to use? ', function(answer) {
        rl.close()
        if(answer === 'attackBerry') {
          console.log('attackBerry')
        } else if(answer === 'defenseBerry') {
          console.log('defenseBerry')
        } else if(answer === 'attack_defense_berry') {
          console.log('attack_defense_berry')
        } else if(answer === 'speedBerry') {
          console.log('speedBerry')
        } else {
          console.log('not a valid item!')
        }
        MenuPhase();
      });
  } else {
    console.log('not a valid item!')
  }

}
