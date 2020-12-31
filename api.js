var IN = 'in';
var OUT = 'out';

function connectNodes(connections) {
    // Connect nodes together - each node has a reference to
    // its parent node(s).
    for (var i=0; i<connections.length; i++) {
        var c = connections[i];
        c[2].map.push([c[0], c[1], c[3]]);
    }
    return true;
}

function getOutput(node, name) {
    // Get output[name] from a node; use recursion to locate
    // the given name (forward propagation).
    while (true) {
        if ((node.map.length > 0) && (node.stale || !node.cached)) {
            var d = {};
            for (const c of node.map) {
                d[c[2]] = getOutput(c[0], c[1]);
            }
            //console.log(d)
            return node.calc(d)[name];
        }
        return node.calc({})[name];
    }
}

function invalidateNode(node) {
    // Invalidate a node so the dependency tree recalulates it
    // next time.
    return nill;
}

export {IN, OUT, connectNodes, getOutput, invalidateNode};
