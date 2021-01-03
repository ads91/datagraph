import {OUT} from './api.js'

class Node {
  constructor() {
    this.stale = true;
    this.cache = null;
    this.map = [];  
  }
  
  logic(...{}) {
    throw 'logic method not implemented for this node.';
  }

  calc(args) {
    var x;
    if (this.cache != null && !this.stale) {
      // no need to re-calculate if results are cached and node isn't stale
      x = this.cache;
    } else {
      // otherwise, calculate the node, cache it & validate the node
      x = this.logic(args);
    }
    this.stale = false;
    this.cache = x;
    return x;
  }
}

class ValueNode extends Node {
  constructor(val) {
    super();
    this.val = val;
  }

  logic(...{}) {
    return {[OUT]: this.val};
  }
}

export {Node, ValueNode};