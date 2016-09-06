var Move = require('./Prototypes.js').Move

var Flame_Thrower = new Move('Flame Thrower', 50, 0, 20)
var Ember = new Move('Ember', 20, 0, 40)
var Fly = new Move('Fly', 40, 0, 50)
var Dragon_Claw = new Move('Dragon Claw', 60, 40, 10)
var Water_Gun = new Move('Water Gun', 50, 0, 30)
var Hydro_Pump = new Move('Hydro Pump', 60, 0, 30)
var Water_pulse = new Move('Water Pulse', 40, 0, 0)
var Bubble = new Move('Bubble', 20, 0, 0)
var Razor_Leaf = new Move('Razor Leaf', 40, 0, 40)
var Vine_Whip = new Move('Vine Whip', 50, 0, 40)
var Leech_Seed = new Move('Leech Seed', 10, 60, 10)
var Solar_Beam = new Move('Solar Beam', 60, 0, 0)
var Scratch = new Move('Scratch', 30, 70, 0)
var Tail_Whip = new Move('Tail Whip', 20, 50, 0)
var Confusion = new Move('Confusion', 60, 0, 40)
var Hypnosis = new Move('Hypnosis', 30, 0 , 40)
var Mean_Look = new Move('Mean Look', 20, 0, 30)
var Payback = new Move('Payback', 40, 50)
var Shadow_Ball = new Move('Shadow Ball', 60, 0, 0)
var Aqua_Tail = new Move('Aqua Tail', 30, 40, 0)
var Crunch = new Move('Crunch', 50, 40, 0)
var Hyper_Beam = new Move('Hyper Beam', 60, 0 , 0)
var Pound = new Move('Pound', 40, 0, 30)
var Takedown = new Move('Takedown', 60, 30, 0)
var Tail_Whip = new Move('Tail Whip', 30, 30, 0)
var Quick_Attack = new Move('Quick Attack', 50, 0, 40)
var Thunder = new Move('Thunder', 40, 0, 0)
var Thunder_Bolt = new Move('Thunder_Bolt', 60, 0, 0)
var Confusion_Array = new Move('Confusion Array', 40, 0, 60)
var Sing = new Move('Sing', 50, 0, 0)
var Gyro_Ball = new Move('Gyro Ball', 40, 0, 20)
var Hyper_Voice = new Move('Hyper Voice', 60, 0, 0)
var Acid = new Move('Acid', 30, 0, 60)
var Absorb = new Move('Absorb', 50, 50, 0)
var Toxic = new Move('Toxic', 40, 0, 50)
var Giga_Drain = new Move('Giga Drain', 60, 0, 40)
var Telekinesis = new Move('Telekinesis', 50, 0, 40)
var Psychic = new Move('Psychic', 40, 0 , 40)
var Psybeam = new Move('Psybeam', 60, 0, 30)


exports.Charizard = [Flame_Thrower, Ember, Fly, Dragon_Claw]
exports.Venusaur = [Razor_Leaf, Vine_Whip, Leech_Seed, Solar_Beam]
exports.Blastoise = [Water_Gun, Hydro_Pump, Water_pulse, Bubble]
exports.Psyduck = [Scratch, Tail_Whip, Water_Gun, Confusion]
exports.Gastly = [Hypnosis, Mean_Look, Payback, Shadow_Ball]
exports.Gyarados = [Aqua_Tail, Crunch, Hydro_Pump, Hyper_Beam]
exports.Snorlax = [Razor_Leaf, Vine_Whip, Pound, Takedown]
exports.Pikachu = [Tail_Whip, Quick_Attack, Thunder, Thunder_Bolt]
exports.Ninetales = [Flame_Thrower, Quick_Attack, Confusion_Array, Ember]
exports.Jigglypuff = [Pound, Sing, Gyro_Ball, Hyper_Voice]
exports.Gloom = [Acid, Absorb, Toxic, Giga_Drain]
exports.Alakazam = [Confusion, Telekinesis, Psychic, Psybeam]
