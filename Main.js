var readline = require('readline')
var Player = require('./Prototypes').Player
var Pokemon = require('./Pokemon')
var Scenarios = require('./Scenarios')
var theBag = require('./Bag')

/* Creating the Players */
var Player1 = new Player();
Player1.pokemon = Pokemon.Player1;
var Player2 = new Player();
Player2.pokemon = Pokemon.Player2;

/* Opening text asking for name */
var rl = readline.createInterface(process.stdin, process.stdout);
rl.question('What is your name? ', function(answer) {
    Player1.name = answer
    console.log('Welcome to the battle, ' + Player1.name + '!' )
    rl.close()
    SwitchPokemon();
});

/* Main Menu */
function MenuPhase() {
  var rl = readline.createInterface(process.stdin, process.stdout);
  rl.question('What do you want to do? \n1.FIGHT\n2.SWITCH\n3.BAG\n4.QUIT\n', function(answer) {
      rl.close()
      if(answer === '1') {

      } else if (answer === '2') {
        SwitchPokemon()
      } else if(answer === '3') {
        Bag()
      } else if (answer === '4') {
        return;
      } else {
        console.log('that is not an option')
        MenuPhase();
      }
  });
}

function AttackPhase() {

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
      Scenarios.switchPokemon(Player1, Player1.currentPokemon, Player1.pokemon[Number(answer)]);
      rl.close();
      MenuPhase();
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
          console.log(items[0].quantity)
        } else if(answer === 'speedBoost') {
          console.log('speedBoost')
        } else if(answer === 'defenceBoost') {
          console.log('defenceBoost')
        } else if(answer === 'pisonHeal') {
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
