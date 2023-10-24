// Give back one Node
const node = (data, left = null, right = null) => {
  return {
    data,
    left,
    right,
  };
};

// Build binary tree from unordered array of numbers
const buildTree = (arr, start = 0, end = arr.length - 1) => {
  // Base case
  if (start > end) {
    return null;
  }

  // Recursive build of branches
  const mid = parseInt((start + end) / 2);
  const root = node(arr[mid]);

  root.left = buildTree(arr, start, mid - 1);
  root.right = buildTree(arr, mid + 1, end);

  return root;
};

// BST functions
const tree = (arr) => {
  if (!Array.isArray(arr)) {
    return arr;
  }

  //Sort array and remove duplicates
  const myArr = [...new Set(arr.sort((a, b) => a - b))];
  const root = buildTree(myArr);

  // Insert one Node to his place
  const insert = (root, value) => {
    if (root == null) {
      root = node(value);
      return root;
    }

    if (value < root.data) {
      root.left = insert(root.left, value);
    }
    if (value > root.data) {
      root.right = insert(root.right, value);
    }
    return root;
  };

  // Delete Node (3 cases, no subtree, one or two subtree)
  const deleteNode = (root, value) => {
    if (root == null) {
      return root;
    }

    if (value < root.data) {
      root.left = deleteNode(root.left, value);
      return root;
    } else if (value > root.data) {
      root.right = deleteNode(root.right, value);
      return root;
    }
    if (root.left === null) {
      let temp = root.right;
      return temp;
    } else if (root.right === null) {
      let temp = root.left;
      return temp;
    } else {
      let successParent = root;
      let success = root.right;

      while (success.left !== null) {
        successParent = success;
        success = success.left;
      }
      if (successParent !== root) {
        successParent.left = success.right;
      } else {
        successParent.right = success.right;
      }
      root.data = success.data;
      return root;
    }
  };

  // Find Node on tree
  const findNode = (root, value) => {
    if (root === null) {
      return "Not exist";
    }
    if (root.data === value) {
      return root;
    }
    if (value < root.data) {
      let temp = findNode(root.left, value);
      return temp;
    }
    if (value > root.data) {
      let temp = findNode(root.right, value);
      return temp;
    }
  };

  // levelOrder
  const levelOrder = (root) => {
    const orderArr = [root];
    const result = [];
    while (orderArr.length > 0) {
      if (orderArr[0].left) orderArr.push(orderArr[0].left);
      if (orderArr[0].right) orderArr.push(orderArr[0].right);
      result.push(orderArr.shift().data);
    }
    return result;
  };

  return { root, insert, deleteNode, findNode, levelOrder };
};

// Shows the tree on cli nicely
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

// Populate tree and functions
//const myTree = tree([1, 2, 3, 4, 5, 6, 7]);
//const myTree = tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
const myTree = tree([...Array(20)].map(x => Math.floor(Math.random()*200)));

prettyPrint(myTree.root);

myTree.insert(myTree.root, 22);
myTree.insert(myTree.root, 2);
//prettyPrint(myTree.root);
//myTree.deleteNode(myTree.root, 1);
//myTree.deleteNode(myTree.root, 7);
myTree.deleteNode(myTree.root, 4);

myTree.deleteNode(myTree.root, 22);
prettyPrint(myTree.root);

console.log(myTree.findNode(myTree.root, 2));
console.log(myTree.findNode(myTree.root, 34));
console.table(myTree.levelOrder(myTree.root));