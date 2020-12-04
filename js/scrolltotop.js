const scrollToTopButton = document.getElementById("topButton");


const scrollFunc = () => {
  let y = window.scrollY;

  if (y > 100) {

    scrollToTopButton.style.display = "inline-flex";
  } else {

    scrollToTopButton.style.display = "none";
  }
};
scrollFunc();

window.addEventListener("scroll", scrollFunc);


const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;

  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);

    window.scrollTo(0, c - c / 10);
  }
};

scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}