import {OUT} from './structs.js'

class Node {

  constructor(args) {
    this.instantiated = true;
    this.stale = true;
    this.cache = null;
    this.dependents = [];
  }
  
  logic(args) {
    throw 'logic method not implemented for this node';
  }

  calc(args) {
    var x = null;
    if (this.cache != null && !this.stale) {
      // Get from cache
      console.log('retrieving cache for', this);
      x = this.cache;
    } else {
      // Calculate as no cache storage/node's stale
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

  logic(args) {
    return {[OUT]: this.val};
  }
}

export {Node, ValueNode};