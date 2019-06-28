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

function SubWeather(icon, json) {
  if (localStorage.sub == "Weather") {
    if (localStorage.temp == "true") {
      document.getElementById('MiscText').innerHTML = "<span style='color:" + localStorage.accent + ";'>" + "<i style='color:" + localStorage.accent + ";' class='" + icon + "'></i> " + Math.round((Math.round(json.main.temp) * 9 / 5) + 32) + "&deg; and " + json.weather[0].main + "</span>";
    } else {
      document.getElementById('MiscText').innerHTML = "<span style='color:" + localStorage.accent + ";'>" + "<i style='color:" + localStorage.accent + ";' class='" + icon + "'></i> " + Math.round(json.main.temp) + "&deg; and " + json.weather[0].main + "</span>";
    }
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
