function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.get = function get(position) {
  // Start with the head of the list.
  var current = this.head;

  // Loop using node.next until we reach the
  // specified position.
  for (var index = 0; index < position; index++) {
    current = current.next;
  }

  return current;
};

LinkedList.prototype.add = function add(value, position) {
  // First create a node to hold our value.
  var node = {
    value: value,
    next: null
  };

  // Inserting node at head
  // Set the "next" field to the current head and then replace it with our new node.
  if (position === 0) {
    node.next = this.head;
    this.head = node;

    // If we're adding a node in any other position we need to splice it between the current and previous node.
  } else {
    // First, find the previous node and the current node.
    var prev = this.get(position - 1);
    var current = prev.next;
    // Insert the new node by setting its "next" field to the current node and updating the previous node's "next" field to the new one.
    node.next = current;
    prev.next = node;
  }

  this.length++;
  return node;
};

LinkedList.prototype.addToBottom = function addToBottom(value) {
  return this.add(value, this.length);
}

LinkedList.prototype.remove = function remove(position) {
  var cached;
  // Remove the first item
  if (position === 0) {
    cached = this.head;
    this.head = this.head.next;
  } else {
    // Look up the previous node and set it to the node after the current position.
    var prev = this.get(position - 1);
    cached = prev.next;
    prev.next = prev.next.next;
  }

  this.length--;
  return cached;
};

var list = new LinkedList();
module.exports = list;
