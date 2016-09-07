function Dictionary() {
  this.memory = [];
}

Dictionary.prototype.get = function get(key) {
  return this.memory[key];
}

Dictionary.prototype.set = function set(key, value) {
  this.memory[key] = value;
}

Dictionary.prototype.remove = function remove(key) {
  if(this.memory[key]) {
    delete this.memory[key]
  }
}

var bag = new Dictionary();

module.exports = bag
