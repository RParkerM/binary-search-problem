const testCase = [1, 3, 16, 22, 31, 33, 34];

// Returns index of the value if found, and null if it is not found
function binarySearchRecursive(array, searchValue, index = 0) {
  //check for invalid parameters
  if (!array || searchValue === undefined || isNaN(searchValue)) return null;

  // if the array length is 0, it means that we have considered numbers both higher and lower than the search value
  // and the number was not found
  if (array.length < 1) return null;

  const midpoint = Math.floor(array.length / 2);
  if (searchValue === array[midpoint]) return index + midpoint;
  if (searchValue > array[midpoint]) {
    return binarySearchRecursive(
      array.slice(midpoint + 1, array.length),
      searchValue,
      midpoint + 1 + index
    );
  } else {
    return binarySearchRecursive(array.slice(0, midpoint), searchValue, index);
  }
}

function binarySearchIterative(array, searchValue) {
  //check for invalid parameters
  if (!array || searchValue === undefined || isNaN(searchValue)) return null;

  //copy of array so we don't mutate the parameter
  let tempArr = [...array];
  let index = 0;
  let midpoint = Math.floor(array.length / 2);

  while (tempArr[midpoint] !== searchValue) {
    if (tempArr.length < 1) return null;

    if (tempArr[midpoint] > searchValue) {
      tempArr = tempArr.slice(0, midpoint);
      midpoint = Math.floor(tempArr.length / 2);
    } else if (tempArr[midpoint] < searchValue) {
      tempArr = tempArr.slice(midpoint + 1, tempArr.length);
      index += midpoint + 1;
      midpoint = Math.floor(tempArr.length / 2);
    }
  }
  return index + midpoint;
}

module.exports = { binarySearchRecursive, binarySearchIterative };
