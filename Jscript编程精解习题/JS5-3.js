// 循环版本
function every(array, getFunction) {
    for (var i = 0; i < array.length; i++) {
        if (!getFunction(array[i])) {
            break;
        }
    }
    if (i != array.length) {
        return false;
    } else
        return true;
}
// 用some版本
function every2(array, predicate) {
    return !array.some(element => !predicate(element));
}
console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));