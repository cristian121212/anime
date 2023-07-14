const goTopBtn = document.querySelector('.Back-to-top-buttton');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
  if(window.scrollY > 400) {
    goTopBtn.style.display = "flex"
  } else {
    goTopBtn.style.display = "none"
  }
}

goTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})