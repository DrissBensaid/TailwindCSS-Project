/*~~~~~~~~~~~~~~ TOGGULE BUTTON ~~~~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('left-[0]');
    hamburger.classList.toggle('ri-close-large-line')
});


navLink.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('left-[0]');
        hamburger.classList.remove('ri-close-large-line');
    })
})


// ~~~~~~~~~~~~~~ SWIPER JS ~~~~~~~~~~~~~~~~~~*/
const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed:400,
  spaceBetween: 30,
  autoplay:{
    delay:3000,
    disableOnInteraction:false
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    
  }
});


// ~~~~~~~~~~~~~~ SCROLL UP ~~~~~~~~~~~~~~~~~~*/
const scrollup = () =>{
    const scrollup = document.getElementById('scroll-up');

    if(this.scrollY >= 250)
    {
        scrollup.classList.remove('-bottom-1/2');
        scrollup.classList.add('bottom-4');
    }else{
        scrollup.classList.add('-bottom-1/2');
        scrollup.classList.remove('bottom-4');
    }
}

window.addEventListener('scroll', scrollup);