var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    grabCursor: true,
    centerSlide:'true',
    loop:true,
    fade:'true',
    grabCursor: true,
  
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
          slidesPerView:1
        },
        470:{
            slidesPerView:2
        },
        740:{
          slidesPerView:3,
          
        },
        1075:{
          slidesPerView:5
        }
      }
  });