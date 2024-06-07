function stringTransform(str) {
    const stringLength = str.length;
    if (stringLength % 15 === 0) {
        let reversedString = str.split("").reverse().join("");
        const asciiValues = [];
        for (let i = 0; i < reversedString.length; i++) {
            const ascii = reversedString.charCodeAt(i);
            asciiValues.push(ascii);
        }
        let newString = asciiValues.join(" ");
        return newString
    } else if (stringLength % 3 === 0) {
        return str.split("").reverse().join("");
    } else if (stringLength % 5 === 0) {
        const asciiValues = [];
        for (let i = 0; i < str.length; i++) {
            const ascii = str.charCodeAt(i);
            asciiValues.push(ascii);
        }
        let newString = asciiValues.join(" ");
        return newString
    } else {
        return "";
    }
}

console.log(stringTransform("Hamburger"));