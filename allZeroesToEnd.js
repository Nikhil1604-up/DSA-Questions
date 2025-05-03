// Move all zeros to end of array

// Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
// Output: arr[] = [1, 2, 4, 3, 5, 0, 0, 0]
// Explanation: There are three 0s that are moved to the end.

// Input: arr[] = [10, 20, 30]
// Output: arr[] = [10, 20, 30]
// Explanation: No change in array as there are no 0s.

// Input: arr[] = [0, 0]
// Output: arr[] = [0, 0]
// Explanation: No change in array as there are all 0s.

const arr = [1, 2, 0, 4, 3, 0, 5, 0];

const moveZeroesToEnd = () => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }

  while (count < arr.length) {
    arr[count] = 0;
    count++;
  }
  return arr;
};

const result = moveZeroesToEnd();
