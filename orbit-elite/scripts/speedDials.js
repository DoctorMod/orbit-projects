//getting btn logo

var mdial1 = document.getElementById("dial1");

var mdial2 = document.getElementById("dial2");

var mdial3 = document.getElementById("dial3");

var mdial4 = document.getElementById("dial4");

var mdial5 = document.getElementById("dial5");

var mdial6 = document.getElementById("dial6");

var mdial7 = document.getElementById("dial7");

var mdial8 = document.getElementById("dial8");

var mdial9 = document.getElementById("dial9");

var mdial10 = document.getElementById("dial10");

chrome.storage.sync.get(['dial1'], function(result) {
  if (result.dial1 == "mail") {
    mdial1.classList.add("fas", "fa-envelope");
  } else if (result.dial1.charAt(0) == "/") {
    temp = mdial1.id;
    mdial1.outerHTML = "<span id='" + dial1.id + "'>" + result.dial1.substr(1) + "</span>";
    mdial1 = document.getElementById(temp);
  } else {
    mdial1.classList.add("fab", "fa-" + result.dial1);
  }
});

chrome.storage.sync.get(['dial2'], function(result) {
  if (result.dial2 == "mail") {
    mdial2.classList.add("fas", "fa-envelope");
  } else if (result.dial2.charAt(0) == "/") {
    temp = mdial2.id;
    mdial2.outerHTML = "<span id='" + dial2.id + "'>" + result.dial2.substr(1) + "</span>";
    mdial2 = document.getElementById(temp);
  } else {
    mdial2.classList.add("fab", "fa-" + result.dial2);
  }
});

chrome.storage.sync.get(['dial3'], function(result) {
  if (result.dial3 == "mail") {
    mdial3.classList.add("fas", "fa-envelope");
  } else if (result.dial3.charAt(0) == "/") {
    temp = mdial3.id;
    mdial3.outerHTML = "<span id='" + dial3.id + "'>" + result.dial3.substr(1) + "</span>";
    mdial3 = document.getElementById(temp);
  } else {
    mdial3.classList.add("fab", "fa-" + result.dial3);
  }
});

chrome.storage.sync.get(['dial4'], function(result) {
  if (result.dial4 == "mail") {
    mdial4.classList.add("fas", "fa-envelope");
  } else if (result.dial4.charAt(0) == "/") {
    temp = mdial4.id;
    mdial4.outerHTML = "<span id='" + dial4.id + "'>" + result.dial4.substr(1) + "</span>";
    mdial4 = document.getElementById(temp);
  } else {
    mdial4.classList.add("fab", "fa-" + result.dial4);
  }
});

chrome.storage.sync.get(['dial5'], function(result) {
  if (result.dial5 == "mail") {
    mdial5.classList.add("fas", "fa-envelope");
  } else if (result.dial5.charAt(0) == "/") {
    temp = mdial5.id;
    mdial5.outerHTML = "<span id='" + dial5.id + "'>" + result.dial5.substr(1) + "</span>";
    mdial5 = document.getElementById(temp);
  } else {
    mdial5.classList.add("fab", "fa-" + result.dial5);
  }
});

chrome.storage.sync.get(['dial6'], function(result) {
  if (result.dial6 == "mail") {
    mdial6.classList.add("fas", "fa-envelope");
  } else if (result.dial6.charAt(0) == "/") {
    temp = mdial6.id;
    mdial6.outerHTML = "<span id='" + dial6.id + "'>" + result.dial6.substr(1) + "</span>";
    mdial6 = document.getElementById(temp);
  } else {
    mdial6.classList.add("fab", "fa-" + result.dial6);
  }
});

chrome.storage.sync.get(['dial7'], function(result) {
  if (result.dial7 == "mail") {
    mdial7.classList.add("fas", "fa-envelope");
  } else if (result.dial7.charAt(0) == "/") {
    temp = mdial7.id;
    mdial7.outerHTML = "<span id='" + dial7.id + "'>" + result.dial7.substr(1) + "</span>";
    mdial7 = document.getElementById(temp);
  } else {
    mdial7.classList.add("fab", "fa-" + result.dial7);
  }
});

chrome.storage.sync.get(['dial8'], function(result) {
  if (result.dial8 == "mail") {
    mdial8.classList.add("fas", "fa-envelope");
  } else if (result.dial8.charAt(0) == "/") {
    temp = mdial8.id;
    mdial8.outerHTML = "<span id='" + dial8.id + "'>" + result.dial8.substr(1) + "</span>";
    mdial8 = document.getElementById(temp);
  } else {
    mdial8.classList.add("fab", "fa-" + result.dial8);
  }
});

chrome.storage.sync.get(['dial9'], function(result) {
  if (result.dial9 == "mail") {
    mdial9.classList.add("fas", "fa-envelope");
  } else if (result.dial9.charAt(0) == "/") {
    temp = mdial9.id;
    mdial9.outerHTML = "<span id='" + dial9.id + "'>" + result.dial9.substr(1) + "</span>";
    mdial9 = document.getElementById(temp);
  } else {
    mdial9.classList.add("fab", "fa-" + result.dial9);
  }
});

chrome.storage.sync.get(['dial10'], function(result) {
  if (result.dial10 == "mail") {
    mdial10.classList.add("fas", "fa-envelope");
  } else if (result.dial10.charAt(0) == "/") {
    temp = mdial10.id;
    mdial10.outerHTML = "<span id='" + dial10.id + "'>" + result.dial10.substr(1) + "</span>";
    mdial10 = document.getElementById(temp);
  } else {
    mdial10.classList.add("fab", "fa-" + result.dial10);
  }
});

//getting btn urls
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

chrome.storage.sync.get(['dialalt6'], function(result) {
  if (result.dialalt6 == undefined) {
    dial6p.href = "#";
  } else {
    dial6p.href = result.dialalt6;
  }
});

chrome.storage.sync.get(['dialalt7'], function(result) {
  if (result.dialalt7 == undefined) {
    dial7p.href = "#";
  } else {
    dial7p.href = result.dialalt7;
  }
});

chrome.storage.sync.get(['dialalt8'], function(result) {
  if (result.dialalt8 == undefined) {
    dial8p.href = "#";
  } else {
    dial8p.href = result.dialalt8;
  }
});

chrome.storage.sync.get(['dialalt9'], function(result) {
  if (result.dialalt9 == undefined) {
    dial9p.href = "#";
  } else {
    dial9p.href = result.dialalt9;
  }
});

chrome.storage.sync.get(['dialalt10'], function(result) {
  if (result.dialalt10 == undefined) {
    dial10p.href = "#";
  } else {
    dial10p.href = result.dialalt10;
  }
});
