$(function () {

  $('.header__burger').click(function (event) {
    $('.header__burger,.header__mobile').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $(document).scroll(function (e) {
    $(window).scrollTop() > 50 ? $('.header').addClass('header-bg') : $('.header').removeClass('header-bg');
  });

  $('.news__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    speed: 1000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        }
      },
    ]
  });

  $('.__gallery-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        }
      },
    ]
  });

  Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options for a specific gallery
  });


});


window.addEventListener('load', function () {



  let vipad = document.querySelectorAll('.faq__item-plug');
  vipad.forEach(element => {
    element.addEventListener('click', event => {
      let currentelement = document.querySelector('.faq__item-plug.down');
      if (currentelement && currentelement !== element) {
        currentelement.classList.remove('down');
        currentelement.nextElementSibling.style.maxHeight = 0;
      }
      element.classList.toggle('down');
      let answer = element.nextElementSibling;
      if (element.classList.contains('down')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.opacity = '1';
      }
      else {
        answer.style.maxHeight = 0;
        answer.style.opacity = '0';
      }
    })
  })


  const mediaQuery = window.matchMedia('(max-width: 1170px)')


  let sub_menu = document.querySelectorAll('.menu-item-has-children');
  sub_menu.forEach(element => {
    element.addEventListener('click', event => {
      let currentelement = document.querySelector('.sub-menu.down');
      if (currentelement && currentelement !== element) {
        currentelement.classList.remove('down');
        currentelement.nextElementSibling.style.maxHeight = 0;
      }
      element.classList.toggle('down');
      let answer = element.nextElementSibling;
      if (element.classList.contains('down')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.opacity = '1';
      }

    })
  })

});