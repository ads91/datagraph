import {OUT} from './modules/node.js'
import {Node, ValueNode} from './modules/node.js'

class AdditionNode extends Node {

  // Add two numbers.

  constructor(a, b) {
    super();
  }

  calc(args) {
    return {OUT: args['a'] + args['b']}
  }
}

class PowerNode extends Node {

  // Raise a number to a power.

  constructor(power=1){
    super();
    this.power = power;
  }

  calc(args) {
    return {OUT: args['x'] ** this.power};
  }
}

// Assemble a dependency graph.
a, b, p = 10, 25, 3

var n = new AdditionNode;
var a = {'a': -10, 'b': 123};

console.log(n.calc(a));