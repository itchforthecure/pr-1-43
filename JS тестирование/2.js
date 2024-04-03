'use strict'
//Задание 1 

// const myDiv = document.getElementById('myDiv');
// const changeSizeBtn = document.getElementById('changeSizeBtn');
// changeSizeBtn.addEventListener('click', function() {
//     myDiv.style.width = '400px';
//     myDiv.style.height = '300px';
//     myDiv.style.backgroundColor = 'green';
// });

//Задание 2

// function getDimensions() {
//     var elem = document.getElementById('elem');
//     var width = elem.offsetWidth;
//     var height = elem.offsetHeight;
//     alert('Ширина: ' + width + '\nВысота: ' + height);
// }

//Задание 3

function getFontSize() {
    var elem = document.getElementById('elem');
    var computedStyle = window.getComputedStyle(elem);
    var fontSize = computedStyle.getPropertyValue('font-size');
    var fontSizeWithoutUnits = parseFloat(fontSize);
    alert('Размер шрифта: ' + fontSizeWithoutUnits);
}