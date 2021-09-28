/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(!this.root) return 0

    let toVisitStack = [this.root]
    let total = 0

    while (toVisitStack.length) {
      let current = toVisitStack.pop()

      total += current.val

      for (let child of current.children) toVisitStack.push(child)
    }

    return total
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0

    let toVisitStack = [this.root]
    let evens = 0

    while (toVisitStack.length) {
      let current = toVisitStack.pop()

      if (current.val % 2) evens += 1

      for (let child of current.children) toVisitStack.push(child)
    }

    return evens
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0

    let toVisitStack = [this.root]
    let greaterThan = 0

    while (toVisitStack.length) {
      let current = toVisitStack.pop()

      if (lowerBound < current.val) greaterThan += 1

      for (let child of current.children) toVisitStack.push(child)
    }

    return greaterThan
  }
}

module.exports = { Tree, TreeNode };
