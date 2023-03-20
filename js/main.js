// Global variables
const slide0 = document.querySelector('.slide-00');
const slide1 = document.querySelector('.slide-01');
const slide2 = document.querySelector('.slide-02');
const slide3 = document.querySelector('.slide-03');
const slide4 = document.querySelector('.slide-04');
const resetButton = document.querySelector('.background__reset');

// Remove slides after end of scroll
slide0.addEventListener('wheel', checkScrollDirection);
function checkScrollDirection(event) {
   if (checkScrollDirectionIsDown(event)) {
      slide0.classList.add('slide--close');
      slide1.classList.remove('scroll--disabled');
   };
};
function checkScrollDirectionIsDown(event) {
   if (event.wheelDelta) {
      return event.wheelDelta < 0;
   };
   return event.deltaY > 0;
};

slide1.onscroll = scrollEnd1;
function scrollEnd1() {
   if ((slide1.scrollTop + slide1.clientHeight) == slide1.scrollHeight) {
      slide1.classList.add('slide--close');
      slide2.classList.remove('scroll--disabled');
   };
};

slide2.onscroll = scrollEnd2;
function scrollEnd2() {
   if ((slide2.scrollTop + slide2.clientHeight) == slide2.scrollHeight) {
      slide2.classList.add('slide--close');
      slide3.classList.remove('scroll--disabled');
   };
};

slide3.onscroll = scrollEnd3;
function scrollEnd3() {
   if ((slide3.scrollTop + slide3.clientHeight) == slide3.scrollHeight) {
      slide3.classList.add('slide--close');
      slide4.classList.remove('scroll--disabled');
   };
};

slide4.onscroll = scrollEnd4;
function scrollEnd4() {
   if ((slide4.scrollTop + slide4.clientHeight) == slide4.scrollHeight) {
      slide4.classList.add('slide--close');
   };
};

// Reset slides to initial states
resetButton.onclick = resetSlides;
function resetSlides() {
   setTimeout(() => slide0.classList.remove('slide--close'), 1800);
   setTimeout(() => {
      slide1.classList.remove('slide--close');
      slide1.classList.add('scroll--disabled');
      slide1.scrollTop = 0;
   }, 1400);
   setTimeout(() => {
      slide2.classList.remove('slide--close');
      slide2.classList.add('scroll--disabled');
      slide2.scrollTop = 0;
   }, 1000);
   setTimeout(() => {
      slide3.classList.remove('slide--close');
      slide3.classList.add('scroll--disabled');
      slide3.scrollTop = 0;
   }, 600);
   setTimeout(() => {
      slide4.classList.remove('slide--close');
      slide4.classList.add('scroll--disabled');
      slide4.scrollTop = 0;
   }, 200);
};

// Mobile version listener to disable desktop functions
window.onload = mobileDisableScrollEnd;
function mobileDisableScrollEnd() {
   if (window.innerWidth <= 415) {
      checkScrollDirectionIsDown = () => { };
   };
};