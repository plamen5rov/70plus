function validAnagrams(str1, str2) {
    const arr1 = str1.split('').sort();
    const arr2 = str2.split('').sort();
    const word1 = arr1.join('');
    const word2 = arr2.join('');
    // console.log(word1, word2);

    return word1 === word2;
}

module.exports = validAnagrams;
