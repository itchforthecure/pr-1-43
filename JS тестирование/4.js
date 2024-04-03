'use strict'
//Задание 1
const elem = document.getElementById('elem');
const border = elem.style.border;

document.getElementById('btn').addEventListener('click', function() {
  const borderParts = border.split(' ');
  const borderWidth = borderParts[0];
  const borderType = borderParts[1];
  const borderColor = borderParts[2];

  console.log({borderWidth});
  console.log({borderType});
  console.log({borderColor});
});
