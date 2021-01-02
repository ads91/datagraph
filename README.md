# Data Graph

## What is it?

A framework for implementing data and calculation nodes (or vertices) and connecting them to one another to form a data/calculation graph.

Calculation requests are then made to particular nodes in the graph, re-calculating any upstream dependencies in the graph.

## Usage

Make sure to have nodeJS installed on your machine. Navigate to the directory which you'd like to clone the repo in terminal/cmd prompt and clone the repo:

    $git clone https://github.com/ads91/datagraph.git


## Example

The script example.js outlines an example connection and execution for the following graph

![Image of Graph](https://github.com/ads91/datagraph/blob/master/images/example.png)

