import {OUT} from './structs.js'
import {Graph} from './graph.js'
import {Node, ValueNode} from './node.js'

// Add two numbers
class AdditionNode extends Node {

  constructor() {
    super();
  }

  logic({a, b}) {
    return {[OUT]: a + b};
  }
}

// Raise a number to a power
class PowerNode extends Node {

  constructor(power=1){
    super();
    this.power = power;
  }

  logic({x}) {
    return {[OUT]: Math.pow(x, this.power)};
  }
}

// Assemble a dependency graph
var a = 10;
var b = 25;
var p = 3;
// Declare and define our nodes
var valueNodeA = new ValueNode(a);
var valueNodeB = new ValueNode(b);
var additionNode = new AdditionNode();
var powerNode = new PowerNode(p); 
// Define the connectivity between nodes and instantiate a graph instance
var graph = new Graph(
  [
    [valueNodeA, OUT, additionNode, 'a'],
    [valueNodeB, OUT, additionNode, 'b'],
    [additionNode, OUT, powerNode, 'x'],
  ]
);
// Request the output at the end of our graph (all upstream nodes must calculate  
// then cache results - see see logs)
console.log(graph.getOutput(powerNode, OUT));
// Request output from the penultimate node of our graph (upstream nodes don't 
// calculate, they return cache results instead - see logs)
console.log(graph.getOutput(additionNode, OUT));