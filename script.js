const projects = [
  {
    id: 1,
    img: "rs-lang",
    name: "RS Lang (co-project)",
    deploy: "https://rslang-kramans1990-team-112.netlify.app/",
  },
  {
    id: 2,
    img: "project-management-sys",
    name: "Project Management app (co-project)",
    deploy: "http://project-management-app-arumakin.netlify.app",
  },
  {
    id: 3,
    img: "note-app",
    name: "Note app",
    deploy: "https://app-making-notes.netlify.app/",
  },
  {
    id: 4,
    img: "memo",
    name: "Memo Game",
    deploy: "https://tatianarusak.github.io/memory-game/",
  },
  {
    id: 5,
    img: "online-store",
    name: "Online Store",
    deploy: "https://tatianarusak.github.io/online-store/",
  },
  {
    id: 6,
    img: "player",
    name: "Audio player",
    deploy: "https://tatianarusak.github.io/rsschool_stage0_player/",
  },
  {
    id: 7,
    img: "portfolio",
    name: "Portfolio",
    deploy: "https://tatianarusak.github.io/rsschool_stage0_portfolio/",
  },
  {
    id: 8,
    img: "shelter",
    name: "Shelter",
    deploy: "https://tatianarusak.github.io/shelter/",
  },
  {
    id: 9,
    img: "piroll",
    name: "Piroll",
    deploy: "https://tatianarusak.github.io/piroll/",
  },
]

// ==================== константы =========================

const carousel = document.getElementById('carousel'),
      arrowRight = document.getElementById('arrow_right'),
      arrowLeft = document.getElementById('arrow_left'),
      imageInGallery = document.querySelector('.slider__img'),
      sliderWrapperInner = document.querySelector('.slider__wrapper_inner'),
      hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      overlay = document.querySelector('.overlay'),
      skills = document.querySelectorAll('.skills__img-wrapper'),
      menuItems = document.querySelectorAll('.menu__item');

// ==================== данамическая загрузка проектов в слайдер =========================

window.addEventListener('load', () => {
  for (let i = 0; i <= projects.length; i++) {
    const card = document.createElement("div");
    const link = document.createElement("a");
    link.setAttribute('href', projects[i].deploy);
    link.setAttribute('target', '_blank');

    const pic = document.createElement("img");
    const picName = document.createElement("p");
    pic.classList.add("slider__img");
    picName.innerText = projects[i].name;
    picName.classList.add("slider__name");
    pic.setAttribute('src', `./assets/images/gallery/${projects[i].img}.jpg`);
    
    link.appendChild(pic);
    card.appendChild(link);
    card.appendChild(picName);
    carousel.appendChild(card);
  }
});

// ==================== карусель =========================

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
    
    let currentOffset = parseInt(carousel.style.left);
    const numberOfcardsInSlider = getNumberOfCards();
    let maxOffset = (parseInt(document.querySelector('.slider__img').offsetWidth) + parseInt(carousel.style.columnGap )) * (projects.length - numberOfcardsInSlider);
    
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
    carousel.style.left = (parseInt(curPos) +  offsetValue) + 'px';
    
    let offset = parseInt(carousel.style.left);
    
    if (offset === 0) {
      arrowLeft.classList.add('disabled')
    }
    
    arrowRight.classList.remove('disabled')
  }
}

arrowLeft.addEventListener('click', arrowLeftHandleClick)
arrowRight.addEventListener('click', arrowRightHandleClick)

// ==================== burger меню =========================

function toggleMenu() {
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');
  overlay.classList.toggle('open');
  document.querySelector('body').classList.toggle('not-scroll');
}

hamburger.addEventListener('click', toggleMenu);

function hideMenu() {
  menu.classList.remove('open');
  overlay.classList.toggle('open');
  hamburger.classList.toggle('open');
  document.querySelector('body').classList.toggle('not-scroll');
}

menu.addEventListener('click', hideMenu)

// ==================== анимация skills при клике =========================
skills.forEach(skill => {
  skill.addEventListener("click", function() {
    skill.classList.add('rotate');
  });

  skill.addEventListener("animationend", function () {
    skill.classList.remove('rotate'); 
  });
})

// ==================== активный пункт меню  =========================


function activeItem() {
  menuItems.forEach(item => {
    item.classList.remove('active');
  })

  this.classList.add("active");
}

menuItems.forEach(item => {
  item.addEventListener('click', activeItem)
})