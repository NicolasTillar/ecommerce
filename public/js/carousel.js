var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centerSlide:'true',
    fade:'true',
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints:{
      0:{
        slidesPerView:1
      },
      775:{
        slidesPerView:2,
        spaceBetween: 40,
      },
      1075:{
        slidesPerView:3
      }
    }
  });