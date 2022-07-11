const myBtn = document.getElementById("top_scroll");

window.onscroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const slides = document.getElementsByClassName('scoop_slide');
const prevBtn = document.getElementById('left-button');
const nextBtn = document.getElementById('right-button');

let slideIndex = 1;

const showsSlides = (n) => {
  if (n < 1) {
    slideIndex = slides.length;
  } else if (n > slides.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}

const slideChanging = (n) => {
  showsSlides(slideIndex += n);
}

prevBtn.addEventListener('click', () => {slideChanging(-1)});
nextBtn.addEventListener('click', () => {slideChanging(1)});
