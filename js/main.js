// Global variables
const slides = document.getElementsByClassName('slide');
const resetButton = document.querySelector('.background__reset');

// Remove slides after end of scroll
slides[0].onwheel = checkScrollDirection;
function checkScrollDirection(event) {
   if (checkScrollDirectionIsDown(event)) {
      slides[0].classList.add('slide--close');
      slides[1].classList.remove('scroll--disabled');
   };
};
function checkScrollDirectionIsDown(event) {
   if (event.wheelDelta) {
      return event.wheelDelta < 0;
   };
   return event.deltaY > 0;
};

slides[1].onscroll = () => {
   if ((slides[1].scrollTop + slides[1].clientHeight) == slides[1].scrollHeight) {
      slides[1].classList.add('slide--close');
      slides[2].classList.remove('scroll--disabled');
   };
};

slides[2].onscroll = () => {
   if ((slides[2].scrollTop + slides[2].clientHeight) == slides[2].scrollHeight) {
      slides[2].classList.add('slide--close');
      slides[3].classList.remove('scroll--disabled');
   };
};

slides[3].onscroll = () => {
   if ((slides[3].scrollTop + slides[3].clientHeight) == slides[3].scrollHeight) {
      slides[3].classList.add('slide--close');
      slides[4].classList.remove('scroll--disabled');
   };
};

slides[4].onscroll = () => {
   if ((slides[4].scrollTop + slides[4].clientHeight) == slides[4].scrollHeight) {
      slides[4].classList.add('slide--close');
   };
};

// Reset slides to initial states
resetButton.onclick = () => {
   setTimeout(() => slides[0].classList.remove('slide--close'), 1800);
   setTimeout(() => {
      slides[1].classList.remove('slide--close');
      slides[1].classList.add('scroll--disabled');
      slides[1].scrollTop = 0;
   }, 1400);
   setTimeout(() => {
      slides[2].classList.remove('slide--close');
      slides[2].classList.add('scroll--disabled');
      slides[2].scrollTop = 0;
   }, 1000);
   setTimeout(() => {
      slides[3].classList.remove('slide--close');
      slides[3].classList.add('scroll--disabled');
      slides[3].scrollTop = 0;
   }, 600);
   setTimeout(() => {
      slides[4].classList.remove('slide--close');
      slides[4].classList.add('scroll--disabled');
      slides[4].scrollTop = 0;
   }, 200);
};

// Mobile version listener to disable desktop functions
window.onload = () => {
   if (window.innerWidth <= 415) {
      checkScrollDirectionIsDown = () => { };
   };
};