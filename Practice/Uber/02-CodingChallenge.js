/**
 * This problem was asked by Uber.

Given an array of integers, 
return a new array such that each element at index i of the new array 
is the product of all the numbers in the original array except the one at i.

For example, 
if our input was [1, 2, 3, 4, 5], 
the expected output would be [120, 60, 40, 30, 24]. 
If our input was [3, 2, 1], the expected output would be [2, 3, 6].
Follow-up: what if you can't use division?
 */

const inputArray = [1, 2, 3, 4, 5];

//Note: This is my first attempt to resolve the problem.
//As it stands right now, it is not the most optimized.
function calculateArraySum(inputArray) {
  const outPut = [];
  const inputLength = inputArray.length;
  //we can likely do the math for 0 without the loop since we would already have the length of hte array
  for (let i = 0; i < inputLength; i++) {
    //nested loop to get all of the other values in the array.
    let newValue = 1;
    for (let k = 0; k < inputLength; k++) {
      if (k !== i) {
        newValue = newValue * inputArray[k];
      }
    }
    outPut[i] = newValue;
  }

  return outPut;
}

//attempting to optimize based from O(n)2 -> O(n).
// The O(n)2 is a problem that is created due to the nested loops issue

// const inputArray = [1, 2, 3, 4, 5];

//Note: This is my first attempt to resolve the problem.
//As it stands right now, it is not the most optimized.
function calculateArraySum(inputArray) {
  const outPut = [];
  const inputLength = inputArray.length;
  //we can likely do the math for 0 without the loop since we would already have the length of hte array
  //fill prefix with number of array elements to match . Set the default values to 1 to ensure if we have a 0 value we
  //don't create a multiplication issue.
  const prefixElements = new Array(inputLength).fill(1);
  const postFixElements = new Array(inputLength).fill(1);

  //calculate prefixElements
  for (let i = 1; i < inputLength; i++) {
    prefixElements[i] = prefixElements[i - 1] * inputArray[i - 1];
  }
  //calculate postFixElements
  for (let i = inputLength - 2; i >= 0; i--) {
    postFixElements[i] = postFixElements[i + 1] * postFixElements[i + 1];
  }
  //calculate final output
  for (let i = 0; i < inputLength; i++) {
    output[i] = prefixElements[i] * postFixElements[i];
  }

  return outPut;
}

//Understanding the difference: In the first pass, we see that we are using a nested loop, the reason this isn't the best
//is due to the possibility that the passed in array could be HUGE, which means that each time we iterate over a single element
//we then iterate over the array AGAIN, there by creating a possibility for a massive loop. In the new way, since I'm no longer
// doing nested loops, we can see that I'm taking the array, and splitting the input into two loops, the prefix and postfix
// collections. During the first two loops we take do the math first in a somewhat flipped way, by doing this we get the final
//two arrays that we want for the final output calculations there by doing the math for the output at the last loop.
