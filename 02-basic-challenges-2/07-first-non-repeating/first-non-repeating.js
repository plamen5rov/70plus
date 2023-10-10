
function findFirstNonRepeatingCharacter(str) {
    // If the string is empty, return null.
    if (str.length === 0) {
        return null;
    }

    // Create a Set to store the unique characters in the string.
    const uniqueCharacters = new Set();

    // Iterate over the string and add each character to the Set.
    for (const char of str) {
        if (uniqueCharacters.has(char)) {
            // If the character is already in the Set, remove it.
            uniqueCharacters.delete(char);
        } else {
            // If the character is not in the Set, add it.
            uniqueCharacters.add(char);
        }
    }

    // If the Set is empty, there are no non-repeating characters in the string.
    if (uniqueCharacters.size === 0) {
        return null;
    }

    // Return the first character in the Set.
    return uniqueCharacters.values().next().value;
}


module.exports = findFirstNonRepeatingCharacter;
