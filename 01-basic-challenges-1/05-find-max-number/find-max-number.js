function findMaxNumber(arr) {
    let maxNumber = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }
    return maxNumber;
}
module.exports = findMaxNumber;
