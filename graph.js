class Graph {

    constructor(connections) {
      // connect the graph
      this.connectNodes(connections);
    }

    connectNodes(connections) {
        // Connect nodes together - each node has a reference to
        // its parent node(s).
        for (var i=0; i<connections.length; i++) {
            var c = connections[i];
            console.log('adding output', c[1], 'from', c[0], 'as input', c[3], 'to', c[2])
            c[2].map.push([c[0], c[1], c[3]]);
        }
    }
    
    getOutput(node, name) {
        // Get output[name] from a node; use recursion to locate
        // the given name (backward propagation).
        console.log('getting output', name, 'from', node)
        while (true) {
            if ((node.map.length > 0) && (node.stale || !node.cached)) {
                var d = {};
                for (const c of node.map) {
                    d[c[2]] = this.getOutput(c[0], c[1]);
                }
                return node.calc(d)[name];
            }
            return node.calc()[name];
        }
    }
    
    invalidateNode(node) {
        // Invalidate a node so the dependency tree recalulates it
        // next time.
        return null;
    }
  }

export {Graph};