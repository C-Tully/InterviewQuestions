/**
*(4) To give us a sense of your experience, please complete the following task using JavaScript.

Write a function that takes 2 colors as arguments and returns the average color.
* The parameters will be two 6-digit hexadecimal strings. This does not need to be validated.
* The return value should be a 6-digit hexadecimal string.
* The hexadecimal strings represent colors in RGB, much like in CSS, but without the leading #.
* The average color is to be determined by taking the arithmetic mean for each component: red, green and blue.

Enter your solution into the text box below.
*
*/

/**
 * @Author Christopher Tully
 * email: christully12@gmail.com
 *
 * @param {string} colorOne
 * @param {string} colorTwo
 * @returns {string}
 */

function averageHexColourFinder(colorOne, colorTwo) {
  //Ignoring validation per instructions.
  // If it were a requirement,
  // Validation would be done here, HexCharacters are :: A to F or between 0 and 9.
  // Regex for validation if needed

  //hexadecimal string : 00008b
  //Hexadecimal characters range from A-F and 0-9
  //Similar :: https://bito.ai/resources/javascript-number-to-hex-javascript-explained/

  //Grabbing the colours of a hex code see
  //https://www.pluralsight.com/resources/blog/upskilling/understanding-hexadecimal-colors-simple

  //Get the standalone RGB values
  const colorOneRed = parseInt(colorOne.substring(0, 2), 16);
  const colorOneGreen = parseInt(colorOne.substring(2, 4), 16);
  const colorOneBlue = parseInt(colorOne.substring(4, 6), 16);

  const colorTwoRed = parseInt(colorTwo.substring(0, 2), 16);
  const colorTwoGreen = parseInt(colorTwo.substring(2, 4), 16);
  const colorTwoBlue = parseInt(colorTwo.substring(4, 6), 16);

  //Helper (should be in a support file if used normally)
  //We need to use padStart to ensure that we are covering the edge case
  //where the returned value (a single digit) from the calculation isn't
  //being handled right  for correct formatting.

  //Adding very basic validation here, just to ensure we don't get a invalid value
  //and blow the whole thing up. Error handling here would be included in a correct format E.G sent to a log

  const calcAvg = (x, y) => {
    if (isNaN(x) || isNaN(y))
      throw new Error("CalcAvg:: Not a Number received");
    if (x < 0 || y < 0)
      throw new Error(`CalcAvg:: Incorrect values received:: ${x}, ${y}`);

    return Math.round((x + y) / 2)
      .toString(16)
      .padStart(2, "0");
  };
  //Returning on a single line here as the function and return statement should align for self documenting code
  //and it isn't it isn't too complex a final return. On larger calls, this would be avoided.

  return `#${calcAvg(colorOneRed, colorTwoRed)}${calcAvg(
    colorOneGreen,
    colorTwoGreen
  )}${calcAvg(colorOneBlue, colorTwoBlue)}`;
}
