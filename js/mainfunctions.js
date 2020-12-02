var modal = document.getElementById("melontimemodal");

var melontimebtn = document.getElementById("melontimebtn");

var span = document.getElementsByClassName("close")[0];

melontimebtn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function goback() {
  window.history.go(-1);
  return false;
}