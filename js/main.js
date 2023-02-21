const slide0 = document.querySelector('.slide-00');
const slide1 = document.querySelector('.slide-01');
const slide2 = document.querySelector('.slide-02');
const slide3 = document.querySelector('.slide-03');
const slide4 = document.querySelector('.slide-04');

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

slide1.onscroll = function () {scrollEnd1()}; 
function scrollEnd1() {
   if ((slide1.scrollTop + slide1.clientHeight) == slide1.scrollHeight) {
      slide1.classList.add('slide--close');
   } else {
      slide1.classList.remove('slide--close');
   };
};

slide2.onscroll = function () {scrollEnd2()}; 
function scrollEnd2() {
   if ((slide2.scrollTop + slide2.clientHeight) == slide2.scrollHeight) {
      slide2.classList.add('slide--close');
   } else {
      slide2.classList.remove('slide--close');
   };
};

slide3.onscroll = function () {scrollEnd3()}; 
function scrollEnd3() {
   if ((slide3.scrollTop + slide3.clientHeight) == slide3.scrollHeight) {
      slide3.classList.add('slide--close');
   } else {
      slide3.classList.remove('slide--close');
   };
};

slide4.onscroll = function () {scrollEnd4()}; 
function scrollEnd4() {
   if ((slide4.scrollTop + slide4.clientHeight) == slide4.scrollHeight) {
      slide4.classList.add('slide--close');
   } else {
      slide4.classList.remove('slide--close');
   };
};