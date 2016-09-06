var colors = require('colors')
var Pokemon = require('./Prototypes')

/* Creating Pokemon [name,moves,maxHP,atk,defense,dodge] */
var Pikachu = new Pokemon.Pikachu('Pikachu',['stuff'],55,35,40,90);

var Venusaur = new Pokemon.Venusaur('Venusaur',['stuff'],80,82,83,80);

var Charizard = new Pokemon.Charizard('Charizard',['stuff'],78,84,78,100);

var Blastoise = new Pokemon.Blastoise('Blastoise',['stuff'],79,83,100,78);

var Psyduck = new Pokemon.Psyduck('Psyduck',['stuff'],50,52,48,55);

var Gastly = new Pokemon.Gastly('Gastly',['stuff'],30,35,30,80);

var Gyarados = new Pokemon.Gyarados('Gyarados',['stuff'],95,125,79,81);

var Snorlax = new Pokemon.Snorlax('Snorlax',['stuff'],160,110,65,30);

var Ninetales = new Pokemon.Ninetales('Ninetales',['stuff'],73,76,75,100);

var Jigglypuff = new Pokemon.Jigglypuff('Jigglypuff',['stuff'],115,45,20,20);

var Gloom = new Pokemon.Gloom('Gloom',['stuff'],60,65,70,40);

var Alakazam = new Pokemon.Alakazam('Alakazam',['stuff'],55,50,45,120);



exports.Player1 = [Pikachu,Venusaur,Charizard,Blastoise,Psyduck,Gastly];

exports.Player2 = [Gyarados,Snorlax,Ninetales,Jigglypuff,Gloom,Alakazam];
