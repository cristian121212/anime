const items = document.querySelectorAll('#recomandarihover');

items.forEach(recomandarihover => {
  recomandarihover.addEventListener('mouseover', () => {
    items.forEach(item => item.classList.add('blur'));
    recomandarihover.classList.remove('blur');
  });

  recomandarihover.addEventListener('mouseout', () => {
    items.forEach(recomandarihover => recomandari_hover.classList.remove('blur'));
  });
});
