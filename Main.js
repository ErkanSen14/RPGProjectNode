var readline = require('readline')
var Prototypes = require('./Prototypes')

var Player = Prototypes.Player
var Player2 = Prototypes.Player


var rl = readline.createInterface(process.stdin, process.stdout);
rl.question("What is your name? ", function(answer) {
    Player.name = answer
    console.log('Welcome to the battle, ' + Player.name + '!' )
    rl.close()
    MenuPhase();
});


function MenuPhase() {
  var rl = readline.createInterface(process.stdin, process.stdout);
  rl.question('What do you want to do? \n1.FIGHT\n2.SWITCH\n3.ITEM\n4.QUIT\n', function(answer) {
      if (answer === 4) {
        return;
      }
      rl.close()
  });
}

function AttackPhase() {

}

function SwitchPokemon() {

}

function Items() {
  
}
