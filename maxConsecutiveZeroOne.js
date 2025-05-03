// Maximum consecutive one’s (or zeros) in a binary array

// Input: arr[] = {1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1}
// Output: 4
// Explanation: The maximum number of consecutive 1’s in the array is 4 from index 8-11.

// Input: arr[] = {0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1}
// Output: 2
// Explanation: The maximum number of consecutive 0’s in the array is 2 from index 0-1.

// Input: arr[] = {0, 0, 0, 0}
// Output: 4
// Explanation: The maximum number of consecutive 0’s in the array is 4.

const arr = [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1];

const getMaxConsecutiveCount = () => {
  let maxCount = 0;
  let currentCount = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentCount++;
    } else {
      maxCount = Math.max(maxCount, currentCount);
      currentCount = 1;
    }
  }

  maxCount = Math.max(maxCount, currentCount);
  return maxCount;
};

const result = getMaxConsecutiveCount();
console.log(result);
