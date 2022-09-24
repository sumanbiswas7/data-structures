class Node {
  constructor(val, left, right) {
    this.val = val || null;
    this.left = left || null;
    this.right = right || null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(val) {
    const newNode = new Node(val);
    if (!this.root) return (this.root = newNode);

    let curr = this.root;
    while (true) {
      if (val < curr.val) {
        // Left side
        if (!curr.left) return (curr.left = newNode);
        else curr = curr.left;
      } else {
        // Right side
        if (!curr.right) return (curr.right = newNode);
        else curr = curr.right;
      }
    }
  }

  has(val) {
    if (!this.root) return false;

    let curr = this.root;
    while (curr) {
      if (val < curr.val) curr = curr.left;
      else if (val > curr.val) curr = curr.right;
      else return curr;
    }

    return false;
  }
}

// const tree = new BST();
// tree.add(1);
// tree.add(2);
// tree.add(3);
// tree.add(2.5);
// console.log(tree.has(4));
// console.log(JSON.stringify(tree));
