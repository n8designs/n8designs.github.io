function aboutMe() {
  var MAINPAGE = document.getElementById('mainPage');
  var ABOUTME = document.getElementById('AboutMe');
  MAINPAGE.style.transform = 'scale(0)';
  ABOUTME.style.transform = 'scale(1)';
  // MAINPAGE.style.width = "0";
  // ABOUTME.style.width = "10000px";
}

function returnMain() {
  var MAINPAGE = document.getElementById('mainPage');
  var ABOUTME = document.getElementById('AboutMe');
  MAINPAGE.style.transform = 'scale(1)';

  ABOUTME.style.transform = 'scale(0)';

}



const blobCursor = (() => {
  const CURSOR = document.querySelector('.cursor');
  const CARDS = document.querySelectorAll('.projectcards');
  const BUTTONS = document.querySelectorAll('.button');
  const ANCHORS = document.querySelectorAll('a');
  const setCursorPos = (e) => {
    const {
      pageX: posX,
      pageY: posY
    } = e;
    CURSOR.style.top = `${posY - (CURSOR.offsetHeight / 2 ) }px`;
    CURSOR.style.left = `${posX - (CURSOR.offsetWidth / 2 )}px`;
  };


  document.addEventListener('mousemove', setCursorPos);

  const setCursorHover = () => CURSOR.style.transform = 'scale(3.5)';
  const removeCursorHover = () => CURSOR.style.transform = '';

  const setCursorHover2 = () => CURSOR.style.transform = 'scale(1.8)';
  const removeCursorHover2 = () => CURSOR.style.transform = '';

  ANCHORS.forEach(card => card.addEventListener('mouseover', setCursorHover2));
  ANCHORS.forEach(card => card.addEventListener('mouseleave', removeCursorHover2));
  CARDS.forEach(card => card.addEventListener('mouseover', setCursorHover));
  CARDS.forEach(card => card.addEventListener('mouseleave', removeCursorHover));
  BUTTONS.forEach(card => card.addEventListener('mouseover', setCursorHover2));
  BUTTONS.forEach(card => card.addEventListener('mouseleave', removeCursorHover2));

})();