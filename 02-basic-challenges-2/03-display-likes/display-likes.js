function displayLikes(arr) {
    let arrLength = arr.length;

    switch (arrLength) {
        case 0:
            return 'no one likes this';
            break;
        case 1:
            return `${arr[0]} likes this`;
            break;
        case 2:
            return `${arr[0]} and ${arr[1]} like this`;
            break;
        case 3:
            return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
            break;
        default:
            return `${arr[0]}, ${arr[1]} and ${arrLength - 2} others like this`;
            break;

    }
}

module.exports = displayLikes;
