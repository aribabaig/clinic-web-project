

var tl = gsap.timeline({scrollTrigger:{
  trigger:"#main",
  // markers:true,
  start:"47% 51%",
  end:"100% 28%",
  scrub:2,
  pin:true
}});
tl
.to(".text",{
  top: "-7%",
},'a')
.to("#card-one",{
  top: "50%",
},'a')
.to("#card-two",{
  top: "148%"
},'a')
.to("#card-two",{
  top: "46%"
},'b')
.to("#card-one",{
  width: "100%",
  height: "80vh",
},'b')
.to("#card-three",{
  top: "180%"
}, 'b')
.to("#card-three",{
  top: "47%"
}, 'c')
.to("#card-two",{
  width: "100%",
  height: "85vh"
},'c')

const header = $(document).ready(function () {
  $(window).scroll(function () {
      if ($(document).scrollTop() > 80) {
          $("header").addClass("header-alt");
      } else {
          $("header").removeClass("header-alt");
      }
  });
});
// scroll 
ScrollReveal({
  reset : true,
  distance : '60px',
  duration : 2500,
  delay : 400,
});
ScrollReveal().reveal('.animate-right', { delay : 400, origin: 'right'});
ScrollReveal().reveal('.animate-left', { delay: 200 , origin: 'left'});
// ScrollReveal().reveal('animate-bottom',{ delay: 300 , origin: 'bottom'});
// ScrollReveal().reveal('.', { delay: 700 , origin: 'right'});
// ScrollReveal().reveal('', { delay: 700 , origin: 'left'});
// ScrollReveal().reveal('', { delay: 500 , origin: 'bottom' });