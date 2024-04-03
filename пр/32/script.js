// Задача 1
let map = new Map();
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

map.set(arr1, 'data1');
map.set(arr2, 'data2');
map.set(arr3, 'data3');

console.log(map.get(arr1)); // выводит 'data1'
console.log(map.get(arr2)); // выводит 'data2'
console.log(map.get(arr3)); // выводит 'data3'


// Задача 2
let map = new Map();
let obj1 = {name: 'obj1'};
let obj2 = {name: 'obj2'};
let obj3 = {name: 'obj3'};
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

map.set(obj1, arr1);
map.set(obj2, arr2);
map.set(obj3, arr3);

console.log(map.get(obj1)); // выводит [1, 2]
console.log(map.get(obj2)); // выводит [3, 4]
console.log(map.get(obj3)); // выводит [5, 6]