var hamburger = document.getElementById("hamborgor");
const sidenav = document.getElementById("sidenav");


function goback() {
  window.history.go(-1);
  return false;
}


function openSideNav() {
  sidenav.style.width = "100vw";
}

function closeSideNav() {
  sidenav.style.width = "0";
}