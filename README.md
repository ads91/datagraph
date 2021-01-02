# Data Graph

## What is it?

A framework for implementing data and calculation nodes (vertices) and connecting them to one another to form a data/calculation graph.

Calculation requests are then made to particular nodes in the graph, re-calculating any upstream dependencies in the graph or utilising caching of prior calculation results, if enabled.

## Usage

Make sure to have nodeJS installed on your machine. Navigate to the directory which you'd like to clone the repo in terminal/cmd prompt and clone the repo:

    $git clone https://github.com/ads91/datagraph.git


## Example

The script example.js outlines an example connection and execution for the following graph.

![Image of Graph](https://github.com/ads91/datagraph/blob/master/images/example.png)

In example.js we construct a graph consisting of four nodes, these are

- **V<sub>1</sub>**: a value node, which simply takes an input value on construction of the node and returns that value when we request the node's output (in thise case, an initial value of 10),
- **V<sub>2</sub>**: another value node, with a different integer value for this example (25),
- **A**: an addition node, a custom node implemented for the purposes of this example, it accepts two inputs and returns the sum of those inputs when we request the output from this node and
- **P**: a power node, also a custom node for the purposes of this example. On construction of a power node, we provide a numerical value to later be used when the node's calculated. When the node is calculated, it takes one input and raises that input to the power as provided on construction of this node.

If we run example.js as follows

    $node example.js

In the terminal/cmd prompt from which we ran the script, we should have a logging trace that prints the value 42,875.

This value is obtained by requesting the value associated with the "out" key in out power node's return dictionary.

When we call getOutput(...) on the most downstream node of the graph (i.e. the instance of a power node), internally, we recurse backwards through the graph, until we hit a start node. Once the start node is located, we retrieve its output and pass this into its downstream nodes, calculating each node along the way (unless a node has previously been calculated and cached, in which case it will return the cached state).

In this example, we then would expect the following order of execution;

- Value node **V<sub>1</sub>** returns 10 and feeds it in to addition node, **A**.
- Value node **V<sub>2</sub>** returns 25 and feeds it in to addition node **A**. 
- Addition node **A** adds its two inputs and returns 35 which is then fed in to the power node **P**. 
- Power node **P** takes its input and raises it to the value of 3, returning the value 42,875 (=35<sup>3</sup>) to the caller.