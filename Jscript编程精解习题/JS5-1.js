let arrays = [
    [1, 2, 3],
    [4, 5],
    [6]
];
let newArr = arrays.reduce((pre, cur) => {
    return pre.concat(cur)
}, [])
console.log(newArr); // [0, 1, 2, 3, 4, 5]