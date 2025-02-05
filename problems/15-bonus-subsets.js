/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

const subsets = (arr) => {
  // Your code here
  // empty arr;
  let length = arr.length;
  if (arr.length === 0) {
    return [[]];
  }
  // one element in arr
  if (arr.length === 1) {
    return [[], arr];
  }
  //
  let prevSubsets = subsets(arr.slice(0, length - 1));
  //
  let lastElement = arr[length - 1];
  let newArr = [...prevSubsets];
  newArr = prevSubsets.concat(prevSubsets.map((ele) => {
    let newEle = [...ele];
    newEle.push(lastElement);
    return newEle;
  }));
  //
  return newArr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}