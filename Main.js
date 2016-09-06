var readline = require('readline')
var Player = require('./Prototypes').Player
var Pokemon = require('./Pokemon')
var Scenarios = require('./Scenarios')

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
    MenuPhase();
});

/* Main Menu */
function MenuPhase() {
  var rl = readline.createInterface(process.stdin, process.stdout);
  rl.question('What do you want to do? \n1.FIGHT\n2.SWITCH\n3.ITEM\n4.QUIT\n', function(answer) {
      rl.close()
      if (answer === '2') {
        SwitchPokemon()
      }
      if (answer === '4') {
        return;
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

function Items() {

}
