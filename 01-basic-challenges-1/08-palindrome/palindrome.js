function isPalindrome(str) {
    let reversedString = str.split('').reverse().join('');
    // console.log(reversedString);
    return str == reversedString;
}



module.exports = isPalindrome;
