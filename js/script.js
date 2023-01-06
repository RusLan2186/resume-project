// ................BURGER................................................

$(document).ready(function () {
   // на header burger вешаем событие клик
   $('.header__burger').click(function (event) {
      // при клике на бургер и хедер меню добавился класс aktive (нажали-добав класс, нажали-убрался класс) 
      $('.header__burger, .header__menu').toggleClass('active');
      // при открытом бургере блокируем прокрутку страницы
      $('body').toggleClass('lock');
   });
});

// закрытие бургера, при нажатии на меню
const headerLinks = document.querySelectorAll('.header__menu')
headerLinks.forEach((el) => {
   el.addEventListener('click', () => {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   })
})

// ............................................................................................................

new Swiper('.portfolio__slider', {
   slidesPerView: 3,
   spaceBetween: 56,
   autowidth: true,

   navigation: {
      nextEl: '.portfolio__arrow-right',
      prevEl: '.portfolio__arrow-left'
   },
   nested: true,
   speed: 800,
   // autoplay: {
   //    delay: 500,
   //    Infinity: true,
   // },


   breakpoints: {
      320: {
         slidesPerView: 1.2,
         spaceBetween: 10,
         autoHeight: true,
      },
      600: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      767: {
         slidesPerView: 3,
         spaceBetween: 20,
      },
      // 991: {
      //    slidesPerView: 3
      // },
      1198: {
         spaceBetween: 20,
      }
   }
});

$(document).ready(function () {
   $('.career__tabs_item').click(function (e) {
      e.preventDefault()

      // класс где лежат ссылки(табы)
      // 2класс - тело, где лежит контент
      $('.career__tabs_item').removeClass('career__tabs_item--active');
      $('.tabs-block').removeClass('tabs-block--active');

      $(this).addClass('career__tabs_item--active');
      $($(this).attr('href')).addClass('tabs-block--active')

   });
   $('.career__tabs_item:first').click();

});

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
   anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
         behavior: "smooth",
         block: "start"
      })
   })
}

// спойлер
$(document).ready(function () {
   $('.item-spoiler__link').click(function (event) {
      if ($('.career__spoiler').hasClass('one')) {
         $('.item-spoiler__link').not($(this)).removeClass('hidden');
         $('.item-spoiler__block').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('hidden').next().slideToggle(300);
   });
});