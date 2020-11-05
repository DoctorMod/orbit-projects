//Color picker
document.getElementById("background").value = localStorage.background;
document.getElementById("accent").value = localStorage.accent;

var backgroundCol = document.getElementsByClassName("backgroundCol");
for (var i = 0; i < backgroundCol.length; i++) {
  backgroundCol[i].style.backgroundColor = localStorage.background;
}
var accentCol = document.getElementsByClassName("accentCol");
for (var i = 0; i < accentCol.length; i++) {
  accentCol[i].style.color = localStorage.accent;
}

document.getElementById("inputBox").style.borderColor = localStorage.accent;

var sideAccent = document.getElementsByClassName("sideAccent");
for (var i = 0; i < sideAccent.length; i++) {
  sideAccent[i].style.color = localStorage.background;
}

var sideBackground = document.getElementsByClassName("sideBackground");
for (var i = 0; i < sideBackground.length; i++) {
  sideBackground[i].style.backgroundColor = localStorage.accent;
}

//bodge of the year
var x = document.createElement("STYLE");
var t = document.createTextNode(".btn::before {background: " + localStorage.accent +
  ";} .btn i, .btn span{color: " + localStorage.accent +
  ";} .btn:hover i, .btn:hover span {color: " + localStorage.background +
  ";} ::placeholder{color: " + localStorage.accent +
  ";} .sliderRange::-webkit-slider-thumb{background: " + localStorage.background +
  ";} ::selection {color:" + localStorage.accent + "; background:" + localStorage.background +
  ";}");
x.appendChild(t);
document.head.appendChild(x);

//Color picker stuffes
var accentVal;
var backgroundVal;

function colorInputs() {
  if (accentVal == document.getElementById('accent').value) {
    if (document.getElementById('accentBox').value.charAt(0) == "#") {
      document.getElementById('accent').value = document.getElementById('accentBox').value;
    } else {
      document.getElementById('accent').value = "#" + document.getElementById('accentBox').value;
    }
  } else {
    document.getElementById('accentBox').value = document.getElementById('accent').value;
  }
  accentVal = document.getElementById('accent').value;
  if (backgroundVal == document.getElementById('background').value) {
    if (document.getElementById('backgroundBox').value.charAt(0) == "#") {
      document.getElementById('background').value = document.getElementById('backgroundBox').value;
    } else {
      document.getElementById('background').value = "#" + document.getElementById('backgroundBox').value;
    }
  } else {
    document.getElementById('backgroundBox').value = document.getElementById('background').value;
  }
  backgroundVal = document.getElementById('background').value;
  setTimeout(colorInputs, 100);
}
colorInputs();
