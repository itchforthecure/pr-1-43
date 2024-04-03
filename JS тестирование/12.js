'use strict'
//Задание 1
const inputField = document.getElementById('inputField');
inputField.addEventListener('blur', function() {
    if (inputField.value.length <= 9) {
        inputField.classList.remove('invalid');
        inputField.classList.add('valid');
    } else {
        inputField.classList.remove('valid');
        inputField.classList.add('invalid');
    }
});