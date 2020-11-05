var manifestData = chrome.runtime.getManifest();

document.getElementById("version").innerHTML = "(" + manifestData.version + ")";


chrome.storage.sync.get(['dial1'], function(result) {
  if (result.dial1 == "mail") {
    dial1.classList.add("fas", "fa-envelope");
  } else if (result.dial1.charAt(0) == "/") {
    temp = dial1.id;
    dial1.outerHTML = "<span id='" + dial1.id + "'>" + result.dial1.substr(1) + "</span>";
    dial1 = document.getElementById(temp);
  } else {
    dial1.classList.add("fab", "fa-" + result.dial1);
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
});





chrome.storage.sync.get(['dialalt1'], function(result) {
  dial1p.href = result.dialalt1;
});

chrome.storage.sync.get(['dialalt2'], function(result) {
  dial2p.href = result.dialalt2;
});

chrome.storage.sync.get(['dialalt3'], function(result) {
  dial3p.href = result.dialalt3;
});

chrome.storage.sync.get(['dialalt4'], function(result) {
  dial4p.href = result.dialalt4;
});

chrome.storage.sync.get(['dialalt5'], function(result) {
  dial5p.href = result.dialalt5;
});
