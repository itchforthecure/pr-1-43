const scrollToElement = document.getElementById('scroll-to-element');
const scrollButton = document.getElementById('scroll-button');

scrollButton.addEventListener('click', function() {
  scrollToElement.scrollIntoView({ behavior: 'smooth' });
});