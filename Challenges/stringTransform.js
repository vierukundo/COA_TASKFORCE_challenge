/**
 * Transforms a string based on its length.
 *
 * If the length of the string is divisible by 15, it reverses the string,
 * converts each character to its ASCII value, and joins them with spaces.
 * If the length is divisible by 3 but not 15, it simply reverses the string.
 * If the length is divisible by 5 but not 3 or 15, it converts each character
 * to its ASCII value and joins them with spaces. Otherwise, it returns an empty string.
 *
 * @param {string} str - The input string to be transformed.
 * @returns {string} The transformed string based on the length of the input string.
 *
 * @example
 * // Returns "80 105 122 122 97"
 * console.log(stringTransform('Pizza'));
 *
 * @example
 * // Returns "regrubmaH"
 * console.log(stringTransform('Hamburger'));
 */
function stringTransform (str) {
  const stringLength = str.length;
  if (stringLength % 15 === 0) {
    const reversedString = str.split('').reverse().join('');
    const asciiValues = [];
    for (let i = 0; i < reversedString.length; i++) {
      const ascii = reversedString.charCodeAt(i);
      asciiValues.push(ascii);
    }
    const newString = asciiValues.join(' ');
    return newString;
  } else if (stringLength % 3 === 0) {
    return str.split('').reverse().join('');
  } else if (stringLength % 5 === 0) {
    const asciiValues = [];
    for (let i = 0; i < str.length; i++) {
      const ascii = str.charCodeAt(i);
      asciiValues.push(ascii);
    }
    const newString = asciiValues.join(' ');
    return newString;
  } else {
    return '';
  }
}

// Example usage
console.log(stringTransform('Pizza')); // should return 80 105 122 122 97
console.log(stringTransform('Hamburger')); // should return regrubmaH
