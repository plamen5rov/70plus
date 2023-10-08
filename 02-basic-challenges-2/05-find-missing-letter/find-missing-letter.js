function findMissingLetter(arr) {
    // If no letters are in the array, return an empty string.
    if (arr.length === 0) {
        return "";
    }

    // Get the alphabet in a string.
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Get the index of the first letter in the array in the alphabet string.
    const firstLetterIndex = alphabet.indexOf(arr[0]);

    // Get the index of the last letter in the array in the alphabet string.
    const lastLetterIndex = alphabet.indexOf(arr[arr.length - 1]);

    // Iterate over the alphabet string from the index of the first letter to the index of the last letter, inclusive.
    for (let i = firstLetterIndex; i <= lastLetterIndex; i++) {
        // If the current letter is not in the array, return it.
        if (!arr.includes(alphabet[i])) {
            return alphabet[i];
        }
    }

    // If we reach this point, there is no missing letter.
    return "";
}

module.exports = findMissingLetter;
