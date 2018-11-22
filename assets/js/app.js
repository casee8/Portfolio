// Animate smooth scroll

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

// Terminal style header

let strTitle = " I can code";
let strTitleArray = strTitle.split(""); 
let loopTimer;

function frameLooper(){
  if (strTitleArray.length > 0) {
    document.querySelector("#strTitlePlace").innerText += strTitleArray.shift();
  } else {
    clearTimeout(loopTimer);
    return false;
  }
  loopTimer = setTimeout("frameLooper()", 100);
}
frameLooper();

// Blinking cursor

const cursorBlink = document.querySelectorAll(".cursor");

setInterval(cursorBlinking, 600);

function cursorBlinking(){
  for(let i = 0; i < cursorBlink.length; i++){
    cursorBlink[i].classList.toggle("blink");
  }
}

// PeoplePerHour Widget
(function(d, s) {
  var useSSL = 'https:' == document.location.protocol;
  var js, where = d.getElementsByTagName(s)[0],
  js = d.createElement(s);
  js.src = (useSSL ? 'https:' : 'http:') +  '//www.peopleperhour.com/hire/51472059/2477149.js?width=300&height=135&orientation=vertical&theme=dark&rnd='+parseInt(Math.random()*10000, 10);
  try { where.parentNode.insertBefore(js, where); } catch (e) { if (typeof console !== 'undefined' && console.log && e.stack) { console.log(e.stack); } }
}(document, 'script'));