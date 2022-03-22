/**
 * Merge two arrays of objects together with a given key
 *
 * Parameters:
 * arr1 - first array
 * arr2 - second array
 * key - key to compare
 *
 * Returns:
 * merged array
 *
 * Example:
 * mergeArrays([{id: 1, name: 'a'}, {id: 2, name: 'b'}], [{id: 1, name: 'c'}], 'id');
 * Returns: [{id: 1, name: 'c'}, {id: 2, name: 'b'}]
 */

module.exports = function mergeArrays(arr1, arr2, key) {
  const mergedArray = arr1.map((arrItem1) => {
    let itemToReturn;
    arr2.forEach((arrItem2) => {
      if (arrItem2[key] === arrItem1[key]) {
        itemToReturn = arrItem2;
      } else {
        itemToReturn = arrItem1;
      }
    });
    return itemToReturn;
  });
  return mergedArray;
};
