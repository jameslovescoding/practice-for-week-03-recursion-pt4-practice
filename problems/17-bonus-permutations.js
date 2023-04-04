/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:
permutations([1]) // [[1]]
permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

const permutations = (array) => {
  // Your code here
  // base case []
  if (array.length === 0) {
    return [];
  }
  // base case [1]
  if (array.length === 1) {
    return [array];
  }
  // base case [1,2]
  // if (array.length === 2) {
  //   let newArray = [...array];
  //   newArray.reverse();
  //   return [array, newArray];
  // }
  // recurrsion step
  let prevArray = array.slice(0, array.length - 1);
  let lastElement = array[array.length - 1];
  let prevPerm = permutations(prevArray); // [[1,2],[2,1]]
  //console.log(prevPerm);
  let newArray = [];
  for (let currPerm of prevPerm) {
    for (let i = 0; i < currPerm.length + 1; i++) {
      let newPerm = [...currPerm];
      newPerm.splice(i, 0, lastElement);
      //console.log(newPerm);
      newArray.push(newPerm);
    }
  }
  return newArray;
};

//console.log(permutations([1, 2, 3]));

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}