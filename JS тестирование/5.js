'use strict'
//Задание 1
// const elem = document.getElementById('elem');
// const hideBtn = document.getElementById('hideBtn');
// const showBtn = document.getElementById('showBtn');
// hideBtn.addEventListener('click', function() {
//   elem.style.display = 'none';
// });
// showBtn.addEventListener('click', function() {
//   elem.style.display = '';
// });

//Задание 2
const elem = document.getElementById('elem');
const colorBtn = document.getElementById('colorBtn');
const resetBtn = document.getElementById('resetBtn');
let originalColor = elem.style.backgroundColor;
colorBtn.addEventListener('click', function() {
  elem.style.backgroundColor = 'red';
});
resetBtn.addEventListener('click', function() {
  elem.style.backgroundColor = originalColor;
});