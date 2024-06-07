function ArrayManipulation(arr, target) {
    let sum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];
        console.log(sum)

        // Shrink the window as long as the sum is greater than the target
        while (sum > target && start <= end) {
            sum -= arr[start];
            console.log("In if block:", sum);
            start++;
        }

        // Check if the current window sum is equal to the target
        if (sum === target) {
            return true;
        }
    }

    return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
console.log(ArrayManipulation(arr, 10)); // Should return true
