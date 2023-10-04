function countVowels(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let string = str.toLowerCase();
    let count = 0;
    for (const char of string) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

module.exports = countVowels;
