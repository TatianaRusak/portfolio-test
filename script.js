const projects = [
  {
    "id": 1,
    "name": "image1",
  },
  {
    "id": 2,
    "name": "image2",
  },
  {
    "id": 3,
    "name": "image3",
  },
  {
    "id": 4,
    "name": "image4",
  },
  {
    "id": 5,
    "name": "image5",
  },
]

const carousel = document.getElementById('carousel'),
      arrowRight = document.getElementById('arrow_right'),
      arrowLeft = document.getElementById('arrow_left'),
      imageInGallery = document.querySelector('.slider__img'),
      sliderWrapperInner = document.querySelector('.slider__wrapper_inner');

window.addEventListener('load', () => {
  for (let i = 0; i <= projects.length; i++) {
    const card = document.createElement("img");
    card.classList.add("slider__img");
    card.setAttribute('src', `./assets/images/gallery/${projects[i].name}.webp`);
    carousel.appendChild(card);
  }
});

function getNumberOfCards() { 
  const width = parseInt(sliderWrapperInner.style.width);
    
  if (width < 600) {
      return 1;
  } else { 
    return 2;
  }
}

carousel.style.left = '0px';
carousel.style.columnGap = '30px';

const arrowRightHandleClick = () => {
  const offsetValue = document.querySelector('.slider__img').width + parseInt(carousel.style.columnGap);
  
  if (!arrowRight.classList.contains('disabled')) {
    let curPos = carousel.style.left;
    carousel.style.left = (parseInt(curPos) -  offsetValue) + 'px';
    console.log('offsetValue', offsetValue);
    
    let currentOffset = parseInt(carousel.style.left);
    const numberOfcardsInSlider = getNumberOfCards();
    let maxOffset = (parseInt(document.querySelector('.slider__img').offsetWidth) + parseInt(carousel.style.columnGap )) * (projects.length - numberOfcardsInSlider);
    console.log('maxOffset', maxOffset);
    
    if (currentOffset <= -maxOffset) {
      arrowRight.classList.add('disabled')
    }
  
    arrowLeft.classList.remove('disabled')
  }

}

const arrowLeftHandleClick = () => {
  const offsetValue = document.querySelector('.slider__img').width + parseInt(carousel.style.columnGap);

  if (!arrowLeft.classList.contains('disabled')) {
    let curPos = carousel.style.left;
    console.log(curPos)
    carousel.style.left = (parseInt(curPos) +  offsetValue) + 'px';
    
    let offset = parseInt(carousel.style.left);
    console.log(curPos)
    
    if (offset === 0) {
      arrowLeft.classList.add('disabled')
    }
    
    arrowRight.classList.remove('disabled')
  }
}

arrowLeft.addEventListener('click', arrowLeftHandleClick)
arrowRight.addEventListener('click', arrowRightHandleClick)
