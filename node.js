import {OUT} from './structs.js'

class Node {

  instantiated = false;

  constructor(args) {
    if (this.instantiated) {
      // Make an instance's constructor behave like a non-static/member method
      return this.calc(args);;
    }
    this.instantiated = true;
    this.stale = true;
    this.cache = null;
    this.dependents = [];  
  }
  
  logic(args) {
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

  logic(args) {
    return {[OUT]: this.val};
  }
}

export {Node, ValueNode};