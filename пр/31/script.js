window.addEventListener('scroll', function() {
    console.log(window.pageYOffset); // Выводим текущую прокрутку от верха сайта
  
    // Проверяем, достиг ли пользователь конца страницы
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      console.log('Вы достигли конца страницы!');
    }
  });