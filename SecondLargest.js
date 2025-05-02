// Second Largest Element in an Array

// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.

// Input: arr[] = [10, 5, 10]
// Output: 5
// Explanation: The largest element of the array is 10 and the second largest element is 5.

// Input: arr[] = [10, 10, 10]
// Output: -1
// Explanation: The largest element of the array is 10 there is no second largest element.

// Double pass technique

const arr = [12, 35, 1, 10, 34, 1];

const getSecondLargest = () => {
  let largest = -1;
  let secondLargetst = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargetst && arr[i] !== largest) secondLargetst = arr[i];
  }
  return secondLargetst;
};

const result = getSecondLargest();

// Single pass technique

const getSecondLargestSinglePass = () => {
  let largest = -1;
  let secondLargest = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

const singlePassResult = getSecondLargestSinglePass();

console.log("result", singlePassResult);
