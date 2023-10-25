import { buildTree, tree } from "./tree.js";
import { prettyPrint } from "./prettyPrint.js";

const driverTree = tree(
  [...Array(50)].map((x) => Math.floor(Math.random() * 100))
);
let root = driverTree.root;

console.log("isBalanced: ", driverTree.isBalanced(root));

console.log("levelOrder: ", driverTree.levelOrder(root));
console.log("inOrder: ", driverTree.inOrder(root));
console.log("preOrder: ", driverTree.preOrder(root));
console.log("postOrder: ", driverTree.postOrder(root));

for (let i = 0; i < 200; i++) {
  driverTree.insert(root, Math.floor(Math.random() * 200));
}
console.log("inOrder: ", driverTree.inOrder(root));

console.log("isBalanced: ", driverTree.isBalanced(root));
root = driverTree.reBalance();
console.log("isBalanced: ", driverTree.isBalanced(root));

console.log("levelOrder: ", driverTree.levelOrder(root));
console.log("inOrder: ", driverTree.inOrder(root));
console.log("preOrder: ", driverTree.preOrder(root));
console.log("postOrder: ", driverTree.postOrder(root));

/*

Manual tests before the driverTree

// Populate tree and functions
const myTree = tree([1, 2, 3, 4, 5, 6, 7]);
//const myTree = tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
//const myTree = tree([...Array(20)].map((x) => Math.floor(Math.random() * 200)));

//prettyPrint(myTree.root);

myTree.insert(myTree.root, 22);
myTree.insert(myTree.root, 2);
//prettyPrint(myTree.root);
//myTree.deleteNode(myTree.root, 1);
//myTree.deleteNode(myTree.root, 7);
//myTree.deleteNode(myTree.root, 4);
//myTree.insert(myTree.root, 4);
myTree.deleteNode(myTree.root, 22);
prettyPrint(myTree.root);

console.log("findNode", myTree.findNode(myTree.root, 2));
console.log("findNode", myTree.findNode(myTree.root, 34));
console.log(myTree.levelOrder(myTree.root));
console.log("inorder ", myTree.inOrder(myTree.root));
console.log("preorder ", myTree.preOrder(myTree.root));
console.log("postorder ", myTree.postOrder(myTree.root));
console.log("height: ", myTree.height(myTree.findNode(myTree.root, 6)));
console.log(
  "depth: ",
  myTree.depth(myTree.root, myTree.findNode(myTree.root, 1))
);

console.log("isBalanced", myTree.isBalanced(myTree.root));
myTree.insert(myTree.root, 8);
myTree.insert(myTree.root, 9);
prettyPrint(myTree.root);
console.log("isBalanced", myTree.isBalanced(myTree.root));
prettyPrint(myTree.reBalance());
*/
