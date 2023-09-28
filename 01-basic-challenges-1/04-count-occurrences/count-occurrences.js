function countOccurrences(str, char) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (char === str[i]) {
            result++;
        }

    } return result;
}
module.exports = countOccurrences;
