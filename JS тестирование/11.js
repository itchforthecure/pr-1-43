'use strict'
//Задание 1
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => {
    paragraph.addEventListener('click', () => {
        if (paragraph.style.color === 'red') {
            paragraph.style.color = 'black';
        } else {
            paragraph.style.color = 'red';
        }
    });
});