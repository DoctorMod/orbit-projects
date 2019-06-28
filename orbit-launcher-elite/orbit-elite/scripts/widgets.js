//RSS Feeds
function checkEnterR(key) {
  var key = key.keyCode;
  if (key == 13) {
    Rss();
  }
}

function Rss() {
  if (document.getElementById('rssURL').value.charAt(6) == "/") {
    localStorage.rss = "https://rss.bloople.net/?url=" + document.getElementById('rssURL').value + "&showicon=true&limit=10&type=js"
  } else {
    localStorage.rss = "https://rss.bloople.net/?url=http://" + document.getElementById('rssURL').value + "&showicon=true&limit=10&type=js"
  }
  location.reload();
}
weatherStart();
load2sec();

function load2sec() {
try {
  for (var i = 0; i < document.getElementsByClassName('feed-item-desc').length; i++) {
    document.getElementsByClassName('feed-item-desc')[i].style.color = localStorage.background;
  }
  for (var i = 0; i < document.getElementsByClassName('feed-item-title').length; i++) {
    document.getElementsByClassName('feed-item-title')[i].style.color = localStorage.background;
  }
  document.getElementsByClassName('feed-title')[0].firstChild.style.color = localStorage.background;
} catch (e) {
  setTimeout(load2sec, 200);
}
}

document.getElementById('RSSFEED').src = localStorage.rss;

if (localStorage.rssActive == "false") {
  document.getElementById("rssOpen").remove();
  document.getElementById("rssToggle").checked = false;
} else {
  document.getElementById("rssToggle").checked = true;
}
//ApiRequests
var _json;
//Weather
function weatherStart() {
  var lat = 51.5074;
  var long = 0.1278;
  navigator.geolocation.getCurrentPosition(successWeather, errorWeather);
}

function successWeather(pos) {
  lat = pos.coords.latitude;
  long = pos.coords.longitude;
  weather(lat, long);
}

function errorWeather() {
  console.log('There was an error');
}

function weather(lat, long) {
  var client = new HttpClient();
  client.get('https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + long, function(response) {
    updateDOM(JSON.parse(response));
  });
}

function updateDOM(json) {
  _json = json;
  if (Math.round(json.coord.lat) == Math.round(lat) && Math.round(json.coord.lon) == Math.round(long)) {
    document.getElementById('loading').remove();
    document.getElementById('WLabel').innerHTML = json.sys.country;
    if (localStorage.temp == "true") {
      document.getElementById('tempToggle').checked = true;
      document.getElementById('WDeg').innerHTML = Math.round((Math.round(json.main.temp) * 9 / 5) + 32) + "&deg;";
    } else {
      document.getElementById('tempToggle').checked = false;
      document.getElementById('WDeg').innerHTML = Math.round(json.main.temp) + "&deg;";
    }
    document.getElementById('WDesc').innerHTML = json.weather[0].description;
    document.getElementById('weatherOpen').classList.remove('fa-cloud', 'fa-sun', 'fa-cloud-rain', 'fa-snowflake', 'fa-smog', "fas");
    document.getElementById('WIcon').classList.remove('fa-cloud', 'fa-sun', 'fa-cloud-rain', 'fa-snowflake', 'fa-smog', "fas");
    if (json.weather[0].main == "Clear") {
      document.getElementById('weatherOpen').classList.add('fa-sun', "far");
      document.getElementById('WIcon').classList.add('fa-sun', "far");
    } else if (json.weather[0].main == "Rain") {
      document.getElementById('weatherOpen').classList.add('fa-cloud-rain', "fas");
      document.getElementById('WIcon').classList.add('fa-cloud-rain', "fas");
    } else if (json.weather[0].main == "Clouds") {
      document.getElementById('weatherOpen').classList.add('fa-cloud', "fas");
      document.getElementById('WIcon').classList.add('fa-cloud', "fas");
    } else if (json.weather[0].main == "Snow") {
      document.getElementById('weatherOpen').classList.add('fa-snowflake', "fas");
      document.getElementById('WIcon').classList.add('fa-snowflake', "fas");
    } else if (json.weather[0].main == "Haze" || json.weather[0].main == "Smoke") {
      document.getElementById('WIcon').classList.add('fa-smog', "fas");
      document.getElementById('weatherOpen').classList.add('fa-smog', "fas");
    } else {
      document.getElementById('WIcon').innerHTML = "ERROR";
      document.getElementById('weatherOpen').classList.add('fa-cloud', "fas");
    }
    SubWeather(document.getElementById('weatherOpen').classList, json);
  } else {
    setTimeout(weatherStart, 500);
  }
}

var HttpClient = function() {
  this.get = function(aUrl, aCallback) {
    var anHttpRequest = new XMLHttpRequest();
    anHttpRequest.onreadystatechange = function() {
      if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
    }

    anHttpRequest.open("GET", aUrl, true);
    anHttpRequest.send(null);
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
