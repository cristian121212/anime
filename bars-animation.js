const bar = document.querySelector('.hamburger-menu');

bar.addEventListener('click', function() {
  this.classList.toggle('open');
});
