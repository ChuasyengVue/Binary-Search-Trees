class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {

    const newNode = new Node(val);
    
    // If root is empty, insert at root.
    if(this.root === null){
      this.root = newNode;
      return this;
    }

    let current = this.root;

    // find correct spot for new node.
    while(true){
      // Go to the left side if value is less.
      if(val < current.val){
        if(current.left === null){
          current.left = newNode;
          break;
        }
        else{
          current = current.left;
        }
      }
      // Go to the right side if value is greater.
      else if (val > current.val){
        if(current.right === null){
          current.right = newNode;
          break;
        }
        else{
          current = current.right;
        }
      }
    }

    // If val is equal to current, do nothing.
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    
    // If root is emptt, insert at root.
    if(this.root === null){
      this.root = new Node(val);
      return this;
    }

    // If the value is less than the current node, insert left subtree.
    if(val < current.val){
      if(current.left === null){
        current.left = new Node(val);
        return this
      }
      return this.insertRecursively(val, current.left);
    }
    // If the value is greater than the current node, insert right subtree.
    else if(val > current.val){
      if(current.right === null){
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }

    // If val is equal to current, do nothing.
    return this;

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

    let current = this.root;
    let found = false;

    // If the val is the root val, return root val.
    if(val === current.val){
      return current.val
    }

    while(current && !found){
      // If val is less than current val, search the left subtree.
      if(val < current.val){
        current = current.left;
      }
      // If val is greater than current val, serach the right subtree.
      else if(val > current.val){
        current = current.right;
      }
      else{
        found = true;
      }
    }

    if(!found) return undefined;
    return current;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {

    // If root is empty return undefine.
    if(this.root === null) return undefined;

    // If val is less than root val, search left subtree
    if(val < current.val){
      if(current.left === null) return undefined;
      return this.findRecursively(val, current.left);
    }
    // If val is greater than root val, search right subtree.
    else if(val > current.val){
      if(current.right === null) return undefined;
      return this.findRecursively(val, current.right);
    }

    return current;

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visited = [];
    let current = this.root;


    function traverse(node) {
      if(node === null) return;

      visited.push(node.value); //Visit the current node.

      traverse(node.left);  // Traverse the left subtree.

      traverse(node.right); // Traverse the right subtree.

    }

    traverse(current);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visited = [];
    let current = this.root;

    function traverse(node) {

      if(node === null) return;

      traverse(node.left); // Traverse the left subtree.

      visited.push(node); // Visit current node.

      traverse(node.right); // Traverse the right subtree.
    }

    traverse(current);
    return visited;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
      
      if(node === null) return;

      traverse(node.left); //Traverse the left subtree.

      traverse(node.right); // Traverse the right subtree.

      visited.push(node); // Visit current node.
    }

    traverse(current);
    return visited;


  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let visited = [];
    let queue = [];
    let base = this.root;

    if(base) {
      queue.push(base);
     }                               // Start with root

    while(queue.length) {
      const current = queue.shift(); //Get the node at the front of the queue.

      visited.push(current.val); // Visit cur node.

      if(current.left) {
        queue.push(current.left);
      }                             //Add left child to queue if exists.

      if(current.right) {
        queue.push(current.right);
       }                            //Add right child to queue if exists.
    }

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
