function titleCase(string) {
    const wordsArray = string.split(' ');
    let resultArray = [];
    let newWord = '';
    wordsArray.forEach(element => {
        newWord = element[0].toUpperCase() + element.slice(1);
        resultArray.push(newWord);
    });
    result = resultArray.join(' ')
    return result
}

module.exports = titleCase;
