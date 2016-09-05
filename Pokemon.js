var colors = require('colors')
var Pokemon = require('./Prototypes').Pokemon

var Pikachu = new Pokemon('Pikachu',['stuff'],55,35,40,90)
var hpString = ''

for (var i = 0; i < 20 * Pikachu.currentHP / Pikachu.maxHP ; i++) {
  hpString += ' '
}
console.log(hpString.bgGreen + '  ' + Pikachu.currentHP)
