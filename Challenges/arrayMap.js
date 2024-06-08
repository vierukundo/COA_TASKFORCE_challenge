function ArrayManipulation (arr, target) {
  let sum = 0;
  let start = 0;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];

    // decrease the sum and the subarray size by incrimenting start as long as the sum is greater than the target
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
// Input: arr = [4, 2, 7, 1, 9, 5], target = 17
// Output: true
const arr = [4, 2, 7, 1, 9, 5];
console.log(ArrayManipulation(arr, 17)); // Should return true
