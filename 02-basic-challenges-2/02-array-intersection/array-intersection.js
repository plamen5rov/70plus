function arrayIntersection(arr1, arr2) {
    let arr1Set = new Set(arr1);
    let arr3 = []

    for (let item of arr2) {
        if (arr1Set.has(item)) {
            arr3.push(item);
        }


    } return arr3;
}
module.exports = arrayIntersection;
