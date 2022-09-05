class Tree {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  getrootNode() {
    return this.root;
  }
  insert(val) {
    var newNode = new Tree(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (node.val > newNode.val) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  inorder(node) {
    if (node === null) {
      return;
    }
    this.inorder(node.left);
    console.log(node.val);
    this.inorder(node.right);
  }
  search(node, data) {
    if (node === null) {
      return null;
    } else if (node.val > data) {
      return this.search(node.left, data);
    } else if (node.val < data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }
}
bst = new BST();
bst.insert(2);
bst.insert(3);
bst.insert(1);
var root = bst.getrootNode();
console.log(root);
bst.inorder(root);
console.log(bst.search(root, 1));
