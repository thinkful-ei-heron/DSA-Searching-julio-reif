const BinarySearchTree = require("./BinarySearchTree");

const binarySearch = (array, value, start, end, counter = 0) => {
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length : end;
  if (start > end) {
    return -1;
  }
  const index = Math.floor((start + end) / 2);
  const item = array[index];

  // console.log(index);
  if (item === value) {
    return [counter, "yes"];
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end, (counter = counter + 1));
  } else if (item > value) {
    return binarySearch(
      array,
      value,
      start,
      index - 1,
      (counter = counter + 1)
    );
  }
  return [counter, "no"];
};

const linearSearch = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};
//  uncomment this line for React portion to function
// export { binarySearch, linearSearch };

//#1 Linear Search
// list = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
// sortedList = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

// binarySearch(array = list, value = 16)
// 1.1
// 12 > 6 < 8
// middle, less than, found it
// 1.2
// 12 < 17// middle, less than, found it
// 1.2
// 12 < 17 > 14 < 15
// it aint here cheif
// it aint here cheif

// #3
// Given that we have the library's list of books, in Dewey format
// use a BST to find the index of the book
// yes, a BST
// see above(line 1: binarySearch)

// #4
// 4.1 postorder = 14=>19=>15=>27=>25=>79=>90=>91=>89=>35
// 4.2 preorder : 8 6 5 7 10 9 11
// (lots of 'work' shown below)

// #5
// newArr = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
// const BST = new BinarySearchTree();
// newArr.forEach(i => BST.insert(i));
// console.log(BST);
// BST.dsfPreOrder();
// BST.dsfInOrder();
// BST.dsfPostOrder();

// #6
//  node => left => right => step down
// Breadth first search
// bfs = vals => {
//   vals = vals || [];
//   const queue = [this];
//   while (queue.length) {
//     let node = queue.shift();
//     vals.push(node.value);
//     if (node.left) {
//       queue.push(node.left);
//     }
//     if (node.right) {
//       queue.push(node.right);
//     }
//   }
//   return vals;
// };

// #7
// [128, 97, 121, 123, 98, 97, 105]
//    -31  24
// highest y(day2) - x(day1) value
// loop arr[i+1] - arr[i]
// if higher than prev highest set highest to this

//          1
//     2       3
//   4   5       6
// 7           8
// ['Captain Picard','Commander Data','Commander Riker',]

// #7
// let blah = [
//   (98, 98),
//   (111, 111),
//   (121, 121),
//   (117, 117),
//   (98, 98),
//   (115, 115),
//   (105, 105)
// ];
// let BST = new BinarySearchTree();
// blah.forEach(item => BST.insert(item));

// function maxProfit(tree, values = [Infinity, -Infinity]) {
//   // 128 => [128,0] => tree.left => 97 => [97,0] =>
//   // [97,0] 121 => [97,121] tree.left/tree.right
//   // 123 => [97,123]
//   if (tree) {
//     if (values[0] >= tree.key) {
//       values[0] = tree.key;
//     } else if (values[1] <= tree.key) values[1] = tree.key;
//     if (tree.left) {
//       maxProfit(tree.left, values);
//     }
//     if (tree.right) {
//       maxProfit(tree.right, values);
//     }
//   }
//   return values[1] - values[0];
// }
// console.log(maxProfit(BST));

//
// WORK SHOWN BELOW
//
// [128, 97, 121, 123, 98, 97, 105]
// 128
//  => 97 - 128 => puhs[]
//  => 121 - 128 => puhs[]
//  => 123 - 128 => puhs[]
// arr.slice()
// recurse(arr)
// Math.max(arrOfProfits)

// function maxProfit(arr) {
//   if(arr.length === 1) return;
//   for
// }

// function maxProfitW2Loops(arr) {
//   let possibleProfits = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (j === i) j++;
//       if (arr[j] - arr[i] > 0) arr.push([i, j]);
//     }
//   }
//   return arr;
// }
// console.log(maxProfitW2Loops([128, 97, 121, 123, 98, 97, 105]), "whats up");

// cba
// Depth First Traversals:
// (a) Inorder (Left, Node, Right) : 4 2 5 1 3
// (b) Preorder (Node, Left, Right) : 1 2 4 5 3       // <--- median
// (c) Postorder (Left, Right, Node) : 4 5 2 3 1
// Breadth First or Level Order Traversal : 1 2 3 4 5
//     1
//  2     3
// 4 5
// 4=>2=>5=>1=>3
// 1=>2=>4=>5=>3
// 4=>5=>2=>3=>1

//                 35
//         25              89
//   15      27        79      91
// 14  19                    90
// in-order = 14=>15=>19=>25=>27=>35=>79=>89=>90=>91
// postorder = 14=>19=>15=>27=>25=>79=>90=>91=>89=>35
// pre-order = 35=>25=>15=>14=>19=>27=>89=>79=>91=>90

// Postorder (Left, Right, Node)
// postorder : 5 7 6 9 11 10 8
//              8
//          6      10
//        5   7    9  11
// Preorder (Node, Left, Right)
// preorder : 8 6 5 7 10 9 11
