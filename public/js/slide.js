const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swi = new Swiper(".my2", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 2.1,
      spaceBetween: 20,
    },
    786: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3.1,
      spaceBetween: 15,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});


// 2
var swiper = new Swiper(".mySwiper2", {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    786: {
      slidesPerView: 2.2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3.1,
      spaceBetween: 15,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },  
});



// 3
var swiper = new Swiper(".mySwiper3", {
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    786: {
      slidesPerView: 3.2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4.2,
      spaceBetween: 15,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },  
});

// 4
var swiper = new Swiper(".mySwiper4", {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    786: {
      slidesPerView: 2.2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3.1,
      spaceBetween: 15,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next4",
    prevEl: ".swiper-button-prev4",
  },  
});


// 4
var swiper = new Swiper(".mySwiper5", {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    786: {
      slidesPerView: 2.2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3.1,
      spaceBetween: 15,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next5",
    prevEl: ".swiper-button-prev5",
  },  
});

