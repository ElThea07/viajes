//tolltip
$(function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });
});
//Barra navbar
var nav = document.querySelector('nav');
      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 500) {
          nav.classList.add('bg-dark', 'shadow');
        } else {
          nav.classList.remove('bg-dark', 'shadow');
        }
      });

      
          //Ocultar y mostrar Tarjetas
  
  $('.card-img1').click(function () {
    $('.card-text1').toggle();
});
$('.card-img2').click(function () {
  $('.card-text2').toggle();
});
$('.card-img3').click(function () {
  $('.card-text3').toggle();
});
$('.card-img4').click(function () {
  $('.card-text4').toggle();
});
 