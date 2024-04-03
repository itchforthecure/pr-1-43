let arr = [1, 2, 3, 1, 3, 4];
let res = [...new Set(arr)];

console.log(res); // выведет [1, 2, 3, 4]

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(arr)