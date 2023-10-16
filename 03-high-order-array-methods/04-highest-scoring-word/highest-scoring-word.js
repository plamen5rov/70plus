function highestScoringWord(str) {
    const wordsArray = str.split(' ');
    let arrSum = [];
    let sum = 0;
    wordsArray.forEach(word => {
        for (let i = 0; i < word.length; i++) {
            sum = sum + (word.charCodeAt(i) - 96);
        }
        arrSum.push(sum)
    });

    const index = arrSum.indexOf(Math.max(...arrSum));

    return wordsArray[index];

}

module.exports = highestScoringWord;
