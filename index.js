const node = (data, left = null, right = null) => {
  return {
    data,
    left,
    right,
  };
};

const buildTree = (arr, start = 0, end = arr.length - 1) => {
  if (start > end) {
    return null;
  }

  const mid = parseInt((start + end) / 2);
  const root = node(arr[mid]);

  root.left = buildTree(arr, start, mid - 1);
  root.right = buildTree(arr, mid + 1, end);

  return root;
};

const tree = (arr) => {
  if (!Array.isArray(arr)) {
    return arr;
  }
  const myArr = [...new Set(arr.sort((a, b) => a - b))];
  const root = buildTree(myArr);

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

  return { root, insert, deleteNode };
};

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

//const myTree = tree([1, 2, 3, 4, 5, 6, 7])
const myTree = tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

prettyPrint(myTree.root);

myTree.insert(myTree.root, 22);
myTree.insert(myTree.root, 2);
prettyPrint(myTree.root);
myTree.deleteNode(myTree.root, 1);
myTree.deleteNode(myTree.root, 7);
myTree.deleteNode(myTree.root, 3);

myTree.deleteNode(myTree.root, 8);
prettyPrint(myTree.root);
