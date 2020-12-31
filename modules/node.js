import {OUT} from './api.js'

class Node {
  constructor() {
      this._stale = true;
      this._cached = false;
      this._cache = null;
      this.map = [];  
    }
  
  calc(args) {
    return {OUT: null};
  }

  // setters and getters
  get cached() {
    return this._cached;
  }

  set cached(val) {
    this._cached = val;
  }

  get stale() {
    return this._stale;
  }

  set stale(val=true) {
    this._stale = val;
  }
}

class ValueNode extends Node {
  constructor(val) {
    super();
    self.cached = true;
    self._cache = {OUT: val};
  }

  calc(args) {
    return self._cache;
  }

  set cache(val) {
    self._cache[OUT] = val;
  }
}

export {Node, ValueNode};