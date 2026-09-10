// Two pointer technique is a common algorithmic approach used to solve problems that 
// involve searching or sorting in arrays or lists. It involves using two pointers that traverse 
// the data structure from different ends or positions, allowing for efficient processing of elements.

// Example: Finding a pair of numbers in a sorted array that sum up to a target value.
function findPairWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const currentSum = arr[left] + arr[right];
        if (currentSum === target) {
            return [arr[left], arr[right]];
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    return null; // No pair found
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 6];
const targetSum = 10;
const result = findPairWithSum(sortedArray, targetSum);
console.log(result); // Output: [4, 6]