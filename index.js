import { buildTree, tree } from "./tree.js";
import { prettyPrint } from "./prettyPrint.js";

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

console.log(myTree.findNode(myTree.root, 2));
console.log(myTree.findNode(myTree.root, 34));
console.log(myTree.levelOrder(myTree.root));
console.log("inorder ", myTree.inOrder(myTree.root));
console.log("preorder ", myTree.preOrder(myTree.root));
console.log("postorder ", myTree.postOrder(myTree.root));