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
  // console.log(value);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};

export { binarySearch, linearSearch };

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
// postorder = 14=>19=>15=>27=>25=>79=>90=>91=>89=>35
// (lots of 'work' shown below)

// cba
//

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
