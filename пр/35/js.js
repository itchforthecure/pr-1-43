// Задание 1
let map = new Map();
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

map.set(arr1, 'data1');
map.set(arr2, 'data2');
map.set(arr3, 'data3');

let keys = [...map.keys()];

for (let key of keys) {
    console.log(key);
}

// Задание 2
let map = new Map();
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

map.set(arr1, 'data1');
map.set(arr2, 'data2');
map.set(arr3, 'data3');

let values = [...map.values()];

for (let value of values) {
    console.log(value);
}
