var modal = document.getElementById("melontimemodal");
var hatchedmodal = document.getElementById("hatchedmodal");
var agodamodal = document.getElementById("agodamodal");
var shellsmodal = document.getElementById("shellsmodal");

var melontimebtn = document.getElementById("melontimebtn");
var hatchedbtn = document.getElementById("hatchedbtn");
var agodabtn = document.getElementById("agodabtn");
var shellsbtn = document.getElementById("shellsbtn");

var span = document.getElementById("melonclose");
var hatchspan = document.getElementById("hatchedclose");
var agodaspan = document.getElementById("agodaclose");
var shellsspan = document.getElementById("shellsclose");

melontimebtn.onclick = function() {
  modal.style.display = "block";
}

hatchedbtn.onclick = function() {
  hatchedmodal.style.display = "block";
}

agodabtn.onclick = function() {
  agodamodal.style.display = "block";
}

shellsbtn.onclick = function() {
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
}