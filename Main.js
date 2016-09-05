var readline = require('readline')
var Player = require('./Prototypes').Player


var Player1 = new Player();
var Player2 = Player

var rl = readline.createInterface(process.stdin, process.stdout);
rl.question("What is your name? ", function(answer) {
    Player1.name = answer
    console.log('Welcome to the battle, ' + Player1.name + '!' )
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
