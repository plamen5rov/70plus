function removeDuplicates(array) {

    const uniqueSet = new Set();

    for (const element of array) {
        uniqueSet.add(element);
    }

    return Array.from(uniqueSet);
}

module.exports = removeDuplicates;
