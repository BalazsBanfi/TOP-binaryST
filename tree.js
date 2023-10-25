import { node } from "./node.js";

// Build binary tree from unordered array of numbers
export const buildTree = (arr, start = 0, end = arr.length - 1) => {
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
export const tree = (arr) => {
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

  // Inorder traversal
  const inOrder = (root, result = []) => {
    if (root == null) return;

    // Recursive on left child
    inOrder(root.left, result);

    // Add data to array
    result.push(root.data);

    // Recursive on left child
    inOrder(root.right, result);
    return result;
  };

  // Preorder traversal
  const preOrder = (root, result = []) => {
    if (root == null) return;

    // Add data to array
    result.push(root.data);

    // Recursive on left child
    preOrder(root.left, result);

    // Recursive on right child
    preOrder(root.right, result);
    return result;
  };

  // Postorder traversal
  const postOrder = (root, result = []) => {
    if (root == null) return;

    // Recursive on left child
    postOrder(root.left, result);

    // Recursive on right child
    postOrder(root.right, result);

    // Add data to array
    result.push(root.data);
    return result;
  };

  // Number of edges in longest path from given node to a leaf node
  const height = (node, level = 0) => {
    if (node === "Not exist") {
      return "Not exist";
    }
    if (node == null) {
      return 0;
    }

    return Math.max(height(node.left), height(node.right, level)) + 1;
  };

  const depth = (root, node, level = 0) => {
    if (node === "Not exist") {
      return "Not exist";
    }
    if (root.data == node.data) {
      return 0;
    }

    return Math.max(depth(root.left), depth(root.right, level)) + 1;
  };

  return {
    root,
    insert,
    deleteNode,
    findNode,
    levelOrder,
    inOrder,
    preOrder,
    postOrder,
    height,
    depth
  };
};
