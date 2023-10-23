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

  console.log(arr);
  console.log(myArr);

  return { root };
};

const myTree = tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

console.log(myTree);
