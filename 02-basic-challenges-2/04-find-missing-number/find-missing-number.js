// function findMissingNumber(arr) {
//     if (!arr) return 'undefined';
//     if (arr.length = 0) return '1';


//     let n = arr.length + 1;
//     let sum = n * (n + 1) / 2;
//     for (let i = n - 2; i <= arr.length; i--) {
//         sum -= arr[i]
//     }
//     console.log(sum);
//     return sum
// }
function findMissingNumber(arr) {
    // If an empty array is passed in, return 1.
    if (arr.length === 0) {
        return 1;
    }

    // Calculate the sum of the numbers from 1 to n (inclusive).
    const sumOfNumbersFrom1ToN = (arr.length + 1) * (arr.length + 2) / 2;

    // Calculate the sum of the numbers in the array.
    const sumOfNumbersInArray = arr.reduce((sum, currentNumber) => sum + currentNumber, 0);

    // Subtract the sum of the numbers in the array from the sum of the numbers from 1 to n (inclusive).
    return sumOfNumbersFrom1ToN - sumOfNumbersInArray;
}
module.exports = findMissingNumber;
