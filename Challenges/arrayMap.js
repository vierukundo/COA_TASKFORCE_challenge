/**
 * Checks if there is a subarray within the given array whose sum equals the target value.
 * 
 * @param {number[]} arr - The input array of numbers.
 * @param {number} target - The target sum to find within a subarray.
 * @returns {boolean} Returns true if a subarray with the sum equal to the target is found, otherwise false.
 *
 * @example
 * // Returns true
 * const arr = [4, 2, 7, 1, 9, 5];
 * console.log(ArrayManipulation(arr, 17));
 * 
 * @example
 * // Returns false
 * const arr = [4, 2, 7, 1, 9, 5];
 * console.log(ArrayManipulation(arr, 20));
 */
function ArrayManipulation(arr, target) {
  let sum = 0;
  let start = 0;

  for (let end = 0; end < arr.length; end++) {
      sum += arr[end];

      // Decrease the sum and the subarray size by incrementing start as long as the sum is greater than the target
      while (sum > target && start <= end) {
          sum -= arr[start];
          start++;
      }

      // Check if the current subarray sum is equal to the target
      if (sum === target) {
          return true;
      }
  }

  return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
console.log(ArrayManipulation(arr, 17)); // Should return true
