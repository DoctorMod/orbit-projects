var dial1 = document.getElementById("sdial1");

var dial2 = document.getElementById("sdial2");

var dial3 = document.getElementById("sdial3");

var dial4 = document.getElementById("sdial4");

var dial5 = document.getElementById("sdial5");

var dial6 = document.getElementById("sdial6");

var dial7 = document.getElementById("sdial7");

var dial8 = document.getElementById("sdial8");

var dial9 = document.getElementById("sdial9");

var dial10 = document.getElementById("sdial10");


var target;

var selected = document.getElementById("sdial1");

function runitem(value) {
  temp = selected.id;
  selected.outerHTML = "<i id='" + selected.id + "'></i>";
  selected = document.getElementById(temp);
  selected.classList.remove("fab", "fas", "fa-nintendo-switch", "fa-amazon", "fa-etsy", "fa-patreon", "fa-ebay", "fa-facebook-f", "fa-google", "fa-google-drive", "fa-google-play", "fa-linkedin", "fa-github-alt", "fa-dropbox", "fa-deviantart", "fa-pinterest-p", "fa-reddit-alien", "fa-snapchat-ghost", "fa-twitter", "fa-youtube", "fa-instagram", "fa-twitch", "fa-envelope", "fa-discord");
  if (value.target.value == "mail") {
    selected.classList.add("fas", "fa-envelope");
  } else {
    selected.classList.add("fab", "fa-" + value.target.value);
  }
  if (selected.id == "sdial1") {
    chrome.storage.sync.set({
      dial1: value.target.value
    }, function() {

    });
    chrome.storage.sync.set({
      dialalt1: value.target.alt
    }, function() {});

  } else if (selected.id == "sdial2") {
    chrome.storage.sync.set({
      dial2: value.target.value
    }, function() {});

    chrome.storage.sync.set({
      dialalt2: value.target.alt
    }, function() {});

  } else if (selected.id == "sdial3") {
    chrome.storage.sync.set({
      dial3: value.target.value
    }, function() {

    });
    chrome.storage.sync.set({
      dialalt3: value.target.alt
    }, function() {

    });

  } else if (selected.id == "sdial4") {
    chrome.storage.sync.set({
      dial4: value.target.value
    }, function() {

    });
    chrome.storage.sync.set({
      dialalt4: value.target.alt
    }, function() {

    });

  } else if (selected.id == "sdial5") {
    chrome.storage.sync.set({
      dial5: value.target.value
    }, function() {

    });
    chrome.storage.sync.set({
      dialalt6: value.target.alt
    }, function() {});
  } else if (selected.id == "sdial6") {
    chrome.storage.sync.set({
      dial6: value.target.value
    }, function() {

    });
    chrome.storage.sync.set({
      dialalt6: value.target.alt
    }, function() {});
  } else if (selected.id == "sdial7") {
    chrome.storage.sync.set({
      dial7: value.target.value
    }, function() {

    });
    chrome.storage.sync.set({
      dialalt7: value.target.alt
    }, function() {});
  } else if (selected.id == "sdial8") {
    chrome.storage.sync.set({
      dial8: value.target.value
    }, function() {

    });
    chrome.storage.sync.set({
      dialalt8: value.target.alt
    }, function() {});
  } else if (selected.id == "sdial9") {
    chrome.storage.sync.set({
      dial9: value.target.value
    }, function() {

    });
    chrome.storage.sync.set({
      dialalt9: value.target.alt
    }, function() {});
  } else if (selected.id == "sdial10") {
    chrome.storage.sync.set({
      dial10: value.target.value
    }, function() {

    });
    chrome.storage.sync.set({
      dialalt10: value.target.alt
    }, function() {});
  }
}

function setselected(dial) {
  target = dial.target.id;
  if (target == "sdial10") {
    selected = document.getElementById(target);
  } else if (document.getElementById(target.slice(0, -1)) == null) {
    selected = document.getElementById(target);
  } else {
    selected = document.getElementById(target.slice(0, -1));
  }
}

function customSelect() {
  modal.style.display = "none";
  debugger;
  if (document.getElementById('URL').value.charAt(6) == "/") {
    url = document.getElementById('URL').value;
  } else {
    url = "http://" + document.getElementById('URL').value;
  }
  temp = selected.id;
  selected.outerHTML = "<span id='" + selected.id + "'>" + document.getElementById('Display').value + "</span>";
  selected = document.getElementById(temp);
  if (selected.id == "sdial1") {
    chrome.storage.sync.set({
      dial1: "/" + document.getElementById('Display').value
    }, function() {})
    chrome.storage.sync.set({
      dialalt1: url
    }, function() {})
  } else if (selected.id == "sdial2") {
    chrome.storage.sync.set({
      dial2: "/" + document.getElementById('Display').value
    }, function() {})
    chrome.storage.sync.set({
      dialalt2: url
    }, function() {})
  } else if (selected.id == "sdial3") {
    chrome.storage.sync.set({
      dial3: "/" + document.getElementById('Display').value
    }, function() {})
    chrome.storage.sync.set({
      dialalt3: url
    }, function() {})
  } else if (selected.id == "sdial4") {
    chrome.storage.sync.set({
      dial4: "/" + document.getElementById('Display').value
    }, function() {})
    chrome.storage.sync.set({
      dialalt4: url
    }, function() {})
  } else if (selected.id == "sdial5") {
    chrome.storage.sync.set({
      dial5: "/" + document.getElementById('Display').value
    }, function() {})
    chrome.storage.sync.set({
      dialalt6: url
    }, function() {})
  } else if (selected.id == "sdial6") {
    chrome.storage.sync.set({
      dial6: "/" + document.getElementById('Display').value
    }, function() {})
    chrome.storage.sync.set({
      dialalt6: url
    }, function() {})
  } else if (selected.id == "sdial7") {
    chrome.storage.sync.set({
      dial7: "/" + document.getElementById('Display').value
    }, function() {})
    chrome.storage.sync.set({
      dialalt7: url
    }, function() {})
  } else if (selected.id == "sdial8") {
    chrome.storage.sync.set({
      dial8: "/" + document.getElementById('Display').value
    }, function() {})
    chrome.storage.sync.set({
      dialalt8: url
    }, function() {
      console.log(url);
    })
  } else if (selected.id == "sdial9") {
    chrome.storage.sync.set({
      dial9: "/" + document.getElementById('Display').value
    }, function() {})
    chrome.storage.sync.set({
      dialalt9: url
    }, function() {})
  } else if (selected.id == "sdial10") {
    chrome.storage.sync.set({
      dial10: "/" + document.getElementById('Display').value
    }, function() {})
    chrome.storage.sync.set({
      dialalt10: url
    }, function() {})
  }
}

document.getElementById("facebook").addEventListener("click", runitem);
document.getElementById("discord").addEventListener("click", runitem);
document.getElementById("drive").addEventListener("click", runitem);
document.getElementById("play").addEventListener("click", runitem);
document.getElementById("linked").addEventListener("click", runitem);
document.getElementById("pin").addEventListener("click", runitem);
document.getElementById("reddit").addEventListener("click", runitem);
document.getElementById("snap").addEventListener("click", runitem);
document.getElementById("twitter").addEventListener("click", runitem);
document.getElementById("youtube").addEventListener("click", runitem);
document.getElementById("mail").addEventListener("click", runitem);
document.getElementById("insta").addEventListener("click", runitem);
document.getElementById("twitch").addEventListener("click", runitem);
document.getElementById("google").addEventListener("click", runitem);
document.getElementById("github").addEventListener("click", runitem);
document.getElementById("dropbox").addEventListener("click", runitem);
document.getElementById("deviantart").addEventListener("click", runitem);
document.getElementById("ebay").addEventListener("click", runitem);
document.getElementById("etsy").addEventListener("click", runitem);
document.getElementById("amazon").addEventListener("click", runitem);
document.getElementById("patreon").addEventListener("click", runitem);
document.getElementById("nintendo").addEventListener("click", runitem);

document.getElementById("sdial1p").addEventListener("click", setselected);
document.getElementById("sdial2p").addEventListener("click", setselected);
document.getElementById("sdial3p").addEventListener("click", setselected);
document.getElementById("sdial4p").addEventListener("click", setselected);
document.getElementById("sdial5p").addEventListener("click", setselected);
document.getElementById("sdial6p").addEventListener("click", setselected);
document.getElementById("sdial7p").addEventListener("click", setselected);
document.getElementById("sdial8p").addEventListener("click", setselected);
document.getElementById("sdial9p").addEventListener("click", setselected);
document.getElementById("sdial10p").addEventListener("click", setselected);

document.getElementById("SubButton").addEventListener("click", customSelect);

chrome.storage.sync.get(['dial1'], function(result) {
  if (result.dial1 == "mail") {
    dial1.classList.add("fas", "fa-envelope");
  } else if (result.dial1.charAt(0) == "/") {
    temp = dial1.id;
    dial1.outerHTML = "<span id='" + dial1.id + "'>" + result.dial1.substr(1) + "</span>";
    dial1 = document.getElementById(temp);
  } else {
    dial1.classList.add("fab", "fa-" + result.dial1);
    console.log(dial1);
  }
});

chrome.storage.sync.get(['dial2'], function(result) {
  if (result.dial2 == "mail") {
    dial2.classList.add("fas", "fa-envelope");
  } else if (result.dial2.charAt(0) == "/") {
    temp = dial2.id;
    dial2.outerHTML = "<span id='" + dial2.id + "'>" + result.dial2.substr(1) + "</span>";
    dial2 = document.getElementById(temp);
  } else {
    dial2.classList.add("fab", "fa-" + result.dial2);
  }
});

chrome.storage.sync.get(['dial3'], function(result) {
  if (result.dial3 == "mail") {
    dial3.classList.add("fas", "fa-envelope");
  } else if (result.dial3.charAt(0) == "/") {
    temp = dial3.id;
    dial3.outerHTML = "<span id='" + dial3.id + "'>" + result.dial3.substr(1) + "</span>";
    dial3 = document.getElementById(temp);
  } else {
    dial3.classList.add("fab", "fa-" + result.dial3);
  }
});

chrome.storage.sync.get(['dial4'], function(result) {
  if (result.dial4 == "mail") {
    dial4.classList.add("fas", "fa-envelope");
  } else if (result.dial4.charAt(0) == "/") {
    temp = dial4.id;
    dial4.outerHTML = "<span id='" + dial4.id + "'>" + result.dial4.substr(1) + "</span>";
    dial4 = document.getElementById(temp);
  } else {
    dial4.classList.add("fab", "fa-" + result.dial4);
  }
});

chrome.storage.sync.get(['dial5'], function(result) {
  if (result.dial5 == "mail") {
    dial5.classList.add("fas", "fa-envelope");
  } else if (result.dial5.charAt(0) == "/") {
    temp = dial5.id;
    dial5.outerHTML = "<span id='" + dial5.id + "'>" + result.dial5.substr(1) + "</span>";
    dial5 = document.getElementById(temp);
  } else {
    dial5.classList.add("fab", "fa-" + result.dial5);
  }
  console.log(result)
});

chrome.storage.sync.get(['dial6'], function(result) {
  if (result.dial6 == "mail") {
    dial6.classList.add("fas", "fa-envelope");
  } else if (result.dial6.charAt(0) == "/") {
    temp = dial6.id;
    dial6.outerHTML = "<span id='" + dial6.id + "'>" + result.dial6.substr(1) + "</span>";
    dial6 = document.getElementById(temp);
  } else {
    dial6.classList.add("fab", "fa-" + result.dial6);
  }
  console.log(result)
});

chrome.storage.sync.get(['dial7'], function(result) {
  if (result.dial7 == "mail") {
    dial7.classList.add("fas", "fa-envelope");
  } else if (result.dial7.charAt(0) == "/") {
    temp = dial7.id;
    dial7.outerHTML = "<span id='" + dial7.id + "'>" + result.dial7.substr(1) + "</span>";
    dial7 = document.getElementById(temp);
  } else {
    dial7.classList.add("fab", "fa-" + result.dial7);
  }
  console.log(result)
});

chrome.storage.sync.get(['dial8'], function(result) {
  if (result.dial8 == "mail") {
    dial8.classList.add("fas", "fa-envelope");
  } else if (result.dial8.charAt(0) == "/") {
    temp = dial8.id;
    dial8.outerHTML = "<span id='" + dial8.id + "'>" + result.dial8.substr(1) + "</span>";
    dial8 = document.getElementById(temp);
  } else {
    dial8.classList.add("fab", "fa-" + result.dial8);
  }
  console.log(result)
});

chrome.storage.sync.get(['dial9'], function(result) {
  if (result.dial9 == "mail") {
    dial9.classList.add("fas", "fa-envelope");
  } else if (result.dial9.charAt(0) == "/") {
    temp = dial9.id;
    dial9.outerHTML = "<span id='" + dial9.id + "'>" + result.dial9.substr(1) + "</span>";
    dial9 = document.getElementById(temp);
  } else {
    dial9.classList.add("fab", "fa-" + result.dial9);
  }
  console.log(result)
});

chrome.storage.sync.get(['dial10'], function(result) {
  if (result.dial10 == "mail") {
    dial10.classList.add("fas", "fa-envelope");
  } else if (result.dial10.charAt(0) == "/") {
    temp = dial10.id;
    dial10.outerHTML = "<span id='" + dial10.id + "'>" + result.dial10.substr(1) + "</span>";
    dial10 = document.getElementById(temp);
  } else {
    dial10.classList.add("fab", "fa-" + result.dial10);
  }
  console.log(result)
});

var modal = document.getElementById('myModal');


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
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
loop();

function loop() {
  document.getElementById("text").innerHTML = document.getElementById("Display").value;
  setTimeout(loop, 100);
}
