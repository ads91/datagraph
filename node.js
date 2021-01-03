import {OUT} from './structs.js'

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
      console.log('retrieving cache for', this);
      x = this.cache;
    } else {
      console.log('calculating logic for', this);
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