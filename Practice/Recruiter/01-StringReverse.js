/**
 *  This question was asked during a interview I took, and is a more common one then you may think
 *  Given a string of any size, write a function that will reverse it, do not use built in
 *  JS methods
 *
 *
 */

const word = "Hello world";

//There are 3 routes we can go

//Using built in functionality we could...
function returnWordAlpha(word) {
  //Though not needed, lets add some validation;
  if (typeof word != "string") return;

  return str.split("").reverse().join("");
}

//decrementing loop
function returnWordBravo(word) {
  if (typeof word != "string") return;

  let reversedString;

  for (const i = word.length - 1; i >= 0; i--) {
    reversedString += word[i];
  }

  return reversedString;
}

//Most efficient:
function returnWordCharlie(word) {
  return str === "" ? "" : returnWordCharlie(str.substr(1)) + str.charAt(0);
}
