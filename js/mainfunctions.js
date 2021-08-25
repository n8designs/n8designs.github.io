var modal = document.getElementById("melontimemodal");
var hatchedmodal = document.getElementById("hatchedmodal");
var agodamodal = document.getElementById("agodamodal");
var shellsmodal = document.getElementById("shellsmodal");

var melonanimate = document.getElementById("melonmodal-animate");

var melontimebtn = document.getElementById("melontimebtn");
var hatchedbtn = document.getElementById("hatchedbtn");
var agodabtn = document.getElementById("agodabtn");
var shellsbtn = document.getElementById("shellsbtn");

var span = document.getElementById("melonclose");
var hatchspan = document.getElementById("hatchedclose");
var agodaspan = document.getElementById("agodaclose");
var shellsspan = document.getElementById("shellsclose");

const footer = document.getElementById("footer");
var mainarea = document.getElementById("mainClick");
var cards = document.getElementById("cards");


melontimebtn.onclick = function() {
  //  footer.style.height = "0";
  modal.style.display = "block";
}

hatchedbtn.onclick = function() {
  //  footer.style.height = "0";
  hatchedmodal.style.display = "block";
}

agodabtn.onclick = function() {
  //  footer.style.height = "0";
  agodamodal.style.display = "block";
}

shellsbtn.onclick = function() {
  //  footer.style.height = "0";
  shellsmodal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

hatchspan.onclick = function() {
  hatchedmodal.style.display = "none";
}

agodaspan.onclick = function() {
  agodamodal.style.display = "none";
}

shellsspan.onclick = function() {
  shellsmodal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

  if (event.target == hatchedmodal) {
    hatchedmodal.style.display = "none";
  }

  if (event.target == agodamodal) {
    agodamodal.style.display = "none";
  }

  if (event.target == shellsmodal) {
    shellsmodal.style.display = "none";
  }

  if (event.target == mainarea) {
    footer.style.height = "0";
  }

  if (event.target == cards) {
    footer.style.height = "0";
  }

}

function openFooter() {
  footer.style.height = "10rem";
}


function closeFooter() {
  footer.style.height = "0";
}