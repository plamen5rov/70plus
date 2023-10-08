function areAllCharactersUnique(str) {
    // If the string is empty, return true.
    if (str.length === 0) {
        return true;
    }

    // Create a set to store the unique characters in the string.
    const uniqueCharacters = new Set();

    // Iterate over the string and add each character to the set.
    for (const character of str) {
        // If the character is already in the set, return false.
        if (uniqueCharacters.has(character)) {
            return false;
        }

        // Add the character to the set.
        uniqueCharacters.add(character);
    }

    // If we reach this point, all characters in the string are unique.
    return true;
}

module.exports = areAllCharactersUnique;
