//SubText

document.getElementById('MiscTextSett').value = localStorage.sub;

if (localStorage.sub == "Quote") {
  var subJson;
  var client = new HttpClient();
  client.get('http://quotes.rest/qod.json', function(response) {
    subJson = JSON.parse(response);
    SubJson();
  });

  function SubJson() {
    document.getElementById('MiscText').innerHTML = subJson.contents.quotes[0].quote + " - <i>" + subJson.contents.quotes[0].author + "</i>";
  }

}

//Modal

if (localStorage.doModalNext == "true") {
  localStorage.doModalNext = false;
  modalOpen('<img src="img/orbit-logo.png" id="modalInstallLogo"></img><h1>Orbit Newtab</h1><br><br><br>', '<p>Give a clean and modern look to your default homepage</p>', true);
}

var modal = document.getElementById('myModal');

var mReset = false;
var mClose = document.getElementById("modalClose");

function modalOpen(ver, content, reset) {
  document.getElementById('mTitle').innerHTML = ver;
  document.getElementById('mContent').innerHTML = content;
  modal.style.display = "block";
  mReset = reset;
}


mClose.onclick = function() {
  modal.remove();
  if (mReset) {
    location.reload();
  }
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.remove();
    location.reload();
  }
}

//Transparency
if (localStorage.opacity == null) {
  localStorage.opactiy = 0;
}
document.getElementById('OpacitySliderRange').value = localStorage.opacity;
if (localStorage.opacity.length == 1) {
  localStorage.opacity = "0" + localStorage.opacity;
}
document.getElementById('inputBox').style.backgroundColor = "#FFFFFF" + localStorage.opacity.toString(16);
for (i = 0; i < document.getElementsByClassName('btn').length; i++) {
  document.getElementsByClassName('btn')[i].style.backgroundColor = "#FFFFFF" + localStorage.opacity.toString(16);
}
