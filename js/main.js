const img = document.querySelector('.slider__image');
const dots = document.querySelectorAll('.slider__dot');

const imgArr = [
  "images/HTML5_sticker.png",
  "images/1_m7oyUcMoJsW5wyzGfh6ydA.png",
];

let currentIndex = 0;

addDotsHandler();

function addDotsHandler() {
  dots.forEach((dot, index) => {
    dot.addEventListener('click', changeIndex.bind(this, index));
  });
}

function changeIndex(index) {
  currentIndex = index;
  slide(currentIndex);
}

function nextIndex(direction) {
  currentIndex += direction;
  if (currentIndex >= imgArr.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = imgArr.length - 1;
  }
  slide(currentIndex);
}

function slide(index) {
  img.style.display = 'none';
  
  setTimeout(() => {
    img.style.display = "block";
  }, 0);

  img.src = imgArr[index];
  updateDots(index);
}

function updateDots(index) {
  for(let dot of dots) {
    dot.classList.remove('active');
  }

  dots[index].classList.add('active');
}