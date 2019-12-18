binarySearch = (array, value, start, end) => {
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }
  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(item);
  if (item == value) {
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
};


linearSearch(array,item) {
    for(let i=0;i<array.length+1;i++) {
        if(array[i] === item)
    }
}

list = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
sortedList = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];


//#1

// binarySearch(array = list, value = 16)
// 1.1
// 12 > 6 < 8
// middle, less than, found it
// 1.2
// 12 < 17 > 14 < 15
// it aint here cheif

module.export = binarySearch;
