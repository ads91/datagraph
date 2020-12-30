import {Node} from './modules/node.js'

class AdditionNode extends Node {
  constructor(a, b) {
    super();
  }

  calc(args) {
    return {OUT: args['a'] + args['b']}
  }
}

var n = new AdditionNode;
var a = {'a': -10, 'b': 123};

console.log(n.calc(a));