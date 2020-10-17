window.onscroll = function () { myFunction() };
var header = document.getElementById("headertwo");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    document.getElementById('forsticky1').style.display = 'block';
    document.getElementById('forsticky2').style.display = 'block';
  } else {
    header.classList.remove("sticky");
    document.getElementById('forsticky1').style.display = 'none';
    document.getElementById('forsticky2').style.display = 'none';
  }
};
// document.getElementById('elev').onclick = function (){
//   console.log('clicked');
//   document.getElementById('myVideo').play();
// };

$('.ul-pos li').on('click', 'a', function () {
  $('.ul-pos li a').removeClass('active');
  $(this).addClass('active');
});

$('#forsticky2').click(function () {
  var div = $('#top');
  var pos = div.offset().top;

  $('html, body').animate({ scrollTop: pos }, 2000); // will take two seconds to scroll to the element
});

// var lastScrollTop = 0;
// $(window).scroll(function(event){
//    var st = $(this).scrollTop();
//    if (window.pageYOffset > sticky + 200) {
//     if (st > lastScrollTop){
//       header.classList.remove("sticky");
//       document.getElementById('forsticky1').style.display = 'none';
//       document.getElementById('forsticky2').style.display = 'none';
//      } else {
//       header.classList.add("sticky");
//       document.getElementById('forsticky1').style.display = 'block';
//       document.getElementById('forsticky2').style.display = 'block';
//      }
//    }
//    lastScrollTop = st;
// });

$(window).scroll(function () {
  var scrollTop = $(document).scrollTop();
  var anchors = $('body').find('.menuClass');

  for (var i = 0; i < anchors.length; i++) {
    if (scrollTop > $(anchors[i]).offset().top - 50 && scrollTop < $(anchors[i]).offset().top + $(anchors[i]).height() - 50) {
      $('.ul-pos li a[href="#' + $(anchors[i]).attr('id') + '"]').addClass('active');
    } else {
      $('.ul-pos li a[href="#' + $(anchors[i]).attr('id') + '"]').removeClass('active');
    }
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  });
});

var desctop = $('.desctop-version');
var headerId = $('.header-style');
if ($(desctop).css('display') == "none") {
  $(headerId).removeAttr('id');
}

$(document).ready(function () {
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

$('#MasterVideo').on('ended', function () {
  this.load();
  this.play();
});
$('#RawgVideo').on('ended', function () {
  this.load();
  this.play();
});