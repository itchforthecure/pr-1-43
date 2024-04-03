'use strict'
//Задание 1

// const elem = document.getElementById('elem');
//   const btn = document.getElementById('btn');
//   btn.addEventListener('click', () => {
//   const computedStyle = getComputedStyle(elem);
//   console.log(Ширина: ${computedStyle.width}, Высота: ${computedStyle.height});
//   });

// Задание 2

const elem = document.getElementById('elem');
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  const currentWidth = elem.clientWidth;
  const currentHeight = elem.clientHeight;
  elem.style.width =   `${currentWidth * 2}px`;
  elem.style.height = `$ {currentHeight * 2}px`;
});