'use strict'
//Задание 1
const elem = document.getElementById('elem');
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const computedStyle = window.getComputedStyle(elem);
    const fontSize = computedStyle.fontSize;
    alert(`Размер шрифта элемента: ${fontSize}`);
});
