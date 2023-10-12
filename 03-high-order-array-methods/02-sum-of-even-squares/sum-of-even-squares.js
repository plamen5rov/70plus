function sumOfEvenSquares(arr) {
    const evenNumbers = arr.filter((num) => num % 2 === 0);
    const squareNumbers = evenNumbers.map((num) => num * num);
    const sum = squareNumbers.reduce((sum, num) => sum + num, 0);

    return sum;
}

module.exports = sumOfEvenSquares;
