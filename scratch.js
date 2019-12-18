const BinarySearchTree = require("./src/BinarySearchTree");

let blah = [
  (98, 98),
  (111, 111),
  (121, 121),
  (117, 117),
  (98, 98),
  (115, 115),
  (105, 105)
];
let BST = new BinarySearchTree();
blah.forEach(item => BST.insert(item));

function maxProfit(tree, values = [Infinity, -Infinity]) {
  // 128 => [128,0] => tree.left => 97 => [97,0] =>
  // [97,0] 121 => [97,121] tree.left/tree.right
  // 123 => [97,123]
  if (tree) {
    if (values[0] >= tree.key) {
      values[0] = tree.key;
    } else if (values[1] <= tree.key) values[1] = tree.key;
    if (tree.left) {
      maxProfit(tree.left, values);
    }
    if (tree.right) {
      maxProfit(tree.right, values);
    }
  }
  return values[1] - values[0];
}
console.log(maxProfit(BST));
// console.log(new Array(Infinity));
// function maxProfitW2Loops(arr) {  <-- doesnt work but scratch version of this pro
//     let possibleProfits = [];
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         let current = [i, 0]; // day bought / profit
//         if (
//           arr[j] - arr[i] > 0 &&
//           current[0] === i &&
//           current[1] < arr[j] - arr[i]
//         )
//           current.push(i, j);
//         if (current[0] === i + 1) {
//           possibleProfits.push(current);
//           current = [i, 0];
//         }
//       }
//     }
//     return possibleProfits;
//   }

//   console.log(maxProfitW2Loops([128, 97, 121, 123, 98, 97, 105]));
