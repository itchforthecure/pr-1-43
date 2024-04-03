'use strict'
//Задание 1
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => {
    const number = parseInt(paragraph.textContent);
    if (number % 2 === 0) {
        paragraph.classList.add('red');
    } else {
        paragraph.classList.add('green');
    }
});
