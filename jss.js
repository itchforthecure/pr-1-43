// Задание 15.1
// let testElement = document.querySelector('#testElement');

// Задание 16.1
// const myElement = document.getElementById('myElement');
// const myButton = document.getElementById('myButton');

// myButton.addEventListener('click', function() {
//     console.log('Ширина элемента:', myElement.clientWidth);
//     console.log('Высота элемента:', myElement.clientHeight);
// });

// Задание 17.1
// const myElement = document.getElementById('myElement');
// const myButton = document.getElementById('myButton');

// myButton.addEventListener('click', function() {
//     console.log('Полная ширина элемента:', myElement.offsetWidth);
//     console.log('Полная высота элемента:', myElement.offsetHeight);
// });

// Задание 17.2
// const myElement = document.getElementById('myElement');

// const computedStyle = getComputedStyle(myElement);
// const borderLeftWidth = parseInt(computedStyle.borderLeftWidth);
// const borderRightWidth = parseInt(computedStyle.borderRightWidth);

// const borderWidth = borderLeftWidth + borderRightWidth;

// console.log('Ширина границы элемента:', borderWidth);

// Задание 19.1
// const myElement = document.getElementById('myElement');
// const scrollButton = document.getElementById('scrollButton');

// scrollButton.addEventListener('click', function() {
//   console.log('Прокрутка по вертикали:', myElement.scrollTop);
// });

// Задание 19.2-19.5
// const myElement = document.getElementById('myElement');
// const checkScrollButton = document.getElementById('checkScrollButton');
// const calculateScrollHeightButton = document.getElementById('calculateScrollHeightButton');

// checkScrollButton.addEventListener('click', function() {
//   if (myElement.scrollTop > 0) {
//     console.log('Элемент прокручен по вертикали');
//   } else {
//     console.log('Элемент не прокручен по вертикали');
//   }
// });

// calculateScrollHeightButton.addEventListener('click', function() {
//   const fullScroll = myElement.scrollHeight;
//   const scrolledAmount = myElement.scrollTop;
//   const remainingScroll = fullScroll - scrolledAmount;
  
//   console.log('scrollHeight элемента:', fullScroll);
//   console.log('Полная прокрутка:', remainingScroll);
// });

// Задание 20.1-20.4
// let elem = document.getElementById('yourElementId');
// let button = document.getElementById('yourButtonId');

// button.addEventListener('click', function() {
//   elem.scrollTop = 100;
//   elem.scrollLeft = 50;
// });

// let elem = document.getElementById('yourElementId');
// let button = document.getElementById('yourButtonId');

// button.addEventListener('click', function() {
//   elem.scrollTop += 50;
// });

// let elem = document.getElementById('yourElementId');
// let button = document.getElementById('yourButtonId');

// button.addEventListener('click', function() {
//   elem.scrollTop = 0;
// });

// let elem = document.getElementById('yourElementId');
// let button = document.getElementById('yourButtonId');

// button.addEventListener('click', function() {
//   elem.scrollTop = elem.scrollHeight - elem.clientHeight;
// });

// Задание 21.1-21.2
// let elem = document.getElementById('yourElementId');
// let button = document.getElementById('yourButtonId');

// button.addEventListener('click', function() {
//   elem.scrollTop = elem.scrollHeight - elem.clientHeight;
// });

// let elem = document.getElementById('yourElementId');
// let button = document.getElementById('yourButtonId');

// button.addEventListener('click', function() {
//   if (elem.scrollTop + elem.clientHeight >= elem.scrollHeight) {
//     console.log('Элемент прокручен до конца по вертикали');
//   } else {
//     console.log('Элемент не прокручен до конца по вертикали');
//   }
// });

// Задание 22.1
// let elem = document.getElementById('yourElementId');
// let button = document.getElementById('yourButtonId');

// button.addEventListener('click', function() {
//   elem.style.height = elem.scrollHeight + 'px';
// });

// Задание 23.1
// let div = document.createElement('div');
// div.style.overflowY = 'scroll';
// div.style.width = '50px';
// div.style.height = '50px';
// document.body.append(div);

// let scrollWidth = div.offsetWidth - div.clientWidth;
// div.remove();

// let button = document.getElementById('yourButtonId');

// button.addEventListener('click', function() {
//   console.log(scrollWidth);
// });

// Задание 24.1-24.3

// let w1 = document.documentElement.clientWidth;
// let w2 = window.innerWidth;
// let h1 = document.documentElement.clientHeight;
// let h2 = window.innerHeight;

// let button = document.getElementById('yourButtonId');

// button.addEventListener('click', function() {
//   console.log(w1, h1); // Размеры окна без учета прокрутки
//   console.log(w2, h2); // Размеры окна с учетом прокрутки
//   console.log(w2 - w1); // Размер полосы прокрутки по ширине
//   console.log(h2 - h1); // Размер полосы прокрутки по высоте
// });

// let button = document.getElementById('yourButtonId');

// button.addEventListener('click', function() {
//   if (document.documentElement.clientHeight < window.innerHeight) {
//     console.log('Вертикальная прокрутка присутствует');
//   } else {
//     console.log('Вертикальная прокрутка отсутствует');
//   }
// });

// let button = document.getElementById('yourButtonId');

// button.addEventListener('click', function() {
//   if (document.documentElement.clientWidth < window.innerWidth) {
//     console.log('Горизонтальная прокрутка присутствует');
//   } else {
//     console.log('Горизонтальная прокрутка отсутствует');
//   }
// });

// Задание 25.1-25.3

//     let scrollHeight = Math.max(
//     document.body.scrollHeight, document.documentElement.scrollHeight,
//     document.body.offsetHeight, document.documentElement.offsetHeight,
//     document.body.clientHeight, document.documentElement.clientHeight
//    );
   
//    let button = document.getElementById('yourButtonId');
   
//    button.addEventListener('click', function() {
//      console.log(scrollHeight);
//    });
