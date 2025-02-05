/*This problem was recently asked by Google.
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?


const collection = [10, 15, 3, 7]
const k = 17;
0: 10 + 15 ?
  10 + 3
  10 + 7

1: 15 + 3
  15 + 7
  15 + 10

2:
  3 + 7
  3 + 10
  3
  */

function checkCollectionForSum(collection, k) {
  let flag = false;

  for (let i = 0; i < collection.length; i++) {
    //Get the first value in the collection to check
    const x = collection[i];

    for (let j = 0; j < collection.length; j++) {
      if (i !== j && x + collection[j] === k) {
        flag = true;
        break; //Exit as soon as a match is found
      }
    }

    if (flag) return true;
  }
  return false;
}
