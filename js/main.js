const body = document.querySelector('body')
const slide0 = document.querySelector('.slide-00');
const slide1 = document.querySelector('.slide-01');
const slide2 = document.querySelector('.slide-02');
const slide3 = document.querySelector('.slide-03');
const slide4 = document.querySelector('.slide-04');
const resetButton = document.querySelector('.background__link');

slide0.addEventListener('wheel', checkScrollDirection);
function checkScrollDirection(event) {
   if (checkScrollDirectionIsDown(event)) {
      slide0.classList.add('slide--close');
   };
};
function checkScrollDirectionIsDown(event) {
   if (event.wheelDelta) {
      return event.wheelDelta < 0;
   };
   return event.deltaY > 0;
};

slide1.onscroll = function () { scrollEnd1() };
function scrollEnd1() {
   if ((slide1.scrollTop + slide1.clientHeight) == slide1.scrollHeight) {
      slide1.classList.add('slide--close');
   } else {
      slide1.classList.remove('slide--close');
   };
};

slide2.onscroll = function () { scrollEnd2() };
function scrollEnd2() {
   if ((slide2.scrollTop + slide2.clientHeight) == slide2.scrollHeight) {
      slide2.classList.add('slide--close');
   } else {
      slide2.classList.remove('slide--close');
   };
};

slide3.onscroll = function () { scrollEnd3() };
function scrollEnd3() {
   if ((slide3.scrollTop + slide3.clientHeight) == slide3.scrollHeight) {
      slide3.classList.add('slide--close');
   } else {
      slide3.classList.remove('slide--close');
   };
};

slide4.onscroll = function () { scrollEnd4() };
function scrollEnd4() {
   if ((slide4.scrollTop + slide4.clientHeight) == slide4.scrollHeight) {
      slide4.classList.add('slide--close');
   } else {
      slide4.classList.remove('slide--close');
   };
};

resetButton.onclick = function () { resetSlide0(), resetSlide1(), resetSlide2(), resetSlide3(), resetSlide4() };
function resetSlide0() {
   slide0.classList.remove('slide--close');
};

function resetSlide1() {
   slide1.classList.remove('slide--close');
};
function resetSlide2() {
   slide2.classList.remove('slide--close');
};
function resetSlide3() {
   slide3.classList.remove('slide--close');
};
function resetSlide4() {
   slide4.classList.remove('slide--close');
};

window.onload = function () { mobileDisableScrollEnd() };
function mobileDisableScrollEnd() {
if (window.innerWidth < 376) {
   checkScrollDirection = function () { };
   checkScrollDirectionIsDown = function () { };
   scrollEnd1 = function () { };
   scrollEnd2 = function () { };
   scrollEnd3 = function () { };
   scrollEnd4 = function () { };
   };
   //    checkScrollDirection = checkScrollDirection;
   //    checkScrollDirectionIsDown = checkScrollDirectionIsDown;
   //    scrollEnd1 = scrollEnd1;
   //    scrollEnd2 = scrollEnd2;
   //    scrollEnd3 = scrollEnd3;
   //    scrollEnd4 = scrollEnd4;
   //    console.log('No');
};