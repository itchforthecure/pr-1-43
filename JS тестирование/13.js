'use strict'
//Задание 1
const inputField = document.getElementById('inputField');
    inputField.addEventListener('blur', function() {
        const inputValue = parseInt(inputField.value);
        if (inputValue < 10) {
            inputField.dataset.type = 'success';
        } else if (inputValue >= 10 && inputValue < 20) {
            inputField.dataset.type = 'warning';
        } else {
            inputField.dataset.type = 'error';
        }
    });