// Animate smooth scroll | not really a DRY code...
$(".about").on('click', function(){
  const about = $('#about').position().top;

  $('html, body').animate({
    scrollTop: about
  }, 500);
});

$(".portfolio").on('click', function(){
  const portfolio = $('#portfolio').position().top;

  $('html, body').animate({
    scrollTop: portfolio
  }, 500);
});

$('.contact').on('click', function(){
  const contact = $('#contact').position().top;

  $('html, body').animate({
    scrollTop: contact
  }, 500);
});

$('.goTop').on('click', function(){
  const pageTop = $('.pageTop').position().top;

  $('html, body').animate({
    scrollTop: pageTop
  }, 300);
});

// Blinking cursor

let cursorBlink = document.querySelectorAll(".cursor");

setInterval(cursorBlinking, 600);

function cursorBlinking(){
  for(let i = 0; i < cursorBlink.length; i++){
    cursorBlink[i].classList.toggle("blink");
  }
}

