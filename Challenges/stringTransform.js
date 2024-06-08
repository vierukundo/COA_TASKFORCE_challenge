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

// Example: Input: "Pizza"
// Output: "80 105 122 122 97"
console.log(stringTransform('Pizza'));
