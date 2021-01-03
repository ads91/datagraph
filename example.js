import {OUT, connectNodes, getOutput} from './api.js'
import {Node, ValueNode} from './node.js'

class AdditionNode extends Node {

  // Add two numbers.

  constructor() {
    super();
  }

  logic({a, b}) {
    return {[OUT]: a + b};
  }
}

class PowerNode extends Node {

  // Raise a number to a power.

  constructor(power=1){
    super();
    this.power = power;
  }

  logic({x}) {
    return {[OUT]: Math.pow(x, this.power)};
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
connectNodes(connections)
// Request the output at the end of the data graph.
var out = getOutput(powerNode, OUT)
console.log(out);