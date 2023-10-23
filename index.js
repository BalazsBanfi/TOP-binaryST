const node = (data, left = null, right = null) => {
    return {
      data,
      left,
      right,
    };
  };
  


const tree = (arr, start = 0, end = arr.length - 1) => {
    if (start > end) {
        return null;
    }

    const mid = parseInt((start + end) / 2);
    const root = node(arr[mid]);

    root.left = tree(arr, start, mid - 1);
    root.right = tree(arr, mid + 1, end);

    return root;
  };
  



const myTree = tree();

console.log(myTree);

