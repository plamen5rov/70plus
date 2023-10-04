function isPalindrome(str) {
    let string = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reversedString = string.split('').reverse().join('');
    // console.log(reversedString);
    return string === reversedString;
}



module.exports = isPalindrome;
