class Node {
    constuctor() {
      this._stale = true;
      this._cached = false;
      this._cache = null;
      this.map = [];  
    }
  
    calc(args){
      return {OUT: null}
    }
}

export {Node};