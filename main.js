import {OUT, connectNodes, getOutput} from './modules/api.js'
import {Node, ValueNode} from './modules/node.js'

class AdditionNode extends Node {

  // Add two numbers.

  constructor() {
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
    return {OUT: Math.pow(args['x'], this.power)};
  }
}

// Assemble a dependency graph.
var a = 10;
var b = 25;
var p = 3;
// Declare and define our nodes.
var valueNodeA = new ValueNode(a);
var valueNodeB = new ValueNode(b);
var additionNode = new AdditionNode();
var powerNode = new PowerNode(p); 
// Define the connectivity between nodes.
var connections = [
  [valueNodeA, OUT, additionNode, 'a'],
  [valueNodeB, OUT, additionNode, 'b'],
  [additionNode, OUT, powerNode, 'x'],
];
// Connect the nodes.
//console.log(typeof connections[0][0])
connectNodes(connections)
// Request the output at the end of the data graph.
var out = getOutput(powerNode, OUT)
console.log(out);