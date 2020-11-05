//background image

var backgroundNumber = 0;

var backgroundURL = "";
chrome.storage.sync.get(['backgroundURL'], function(result) {
  backgroundURL = result.backgroundURL;
});


function backgroundImage() {
  if (localStorage.api == "false" && backgroundURL == "") {
    if (localStorage.file != "Reset" && localStorage.file != "null") {
      file = JSON.parse(localStorage.file);
      document.getElementById('bg').style.backgroundImage = "url(" + file[backgroundNumber] + ")";
      if (backgroundNumber > file.length - 2) {
        backgroundNumber = 0;
      } else {
        backgroundNumber++;
      }
      setTimeout(backgroundImage, localStorage.slideTimer * 60000);
    }
  } else if (backgroundURL != "") {
    document.getElementById('bg').style.backgroundImage = "url(" + backgroundURL + ")";
  } else {
    document.getElementById('nasa').checked = "true";
    setTimeout(loadNasa, 100);
  }
}
setTimeout(backgroundImage, 100);

function loadNasa() {
  var client = new HttpClient();
  client.get('https://api.nasa.gov/planetary/apod?api_key=Gi6fF3PqNm9oSLsMEgW7u4Td5zMKIIOO9TVMOtG5', function(response) {
    document.getElementById('bg').style.backgroundImage = "url(" + JSON.parse(response).url + ")";
  });
}

var slidecount = 0;
var filecount = [];

function slideshow() {
  if (document.getElementById("getval").files.length != 0 && localStorage.file != "Reset") {
    chrome.storage.sync.set({
      backgroundURL: ""
    }, function() {})
    console.log(slidecount);
    if (slidecount < document.getElementById("getval").files.length) {
      readURL(document.getElementById("getval").files[slidecount]);
      console.log(slidecount);
      slidecount++;
    } else {
      try {
        localStorage.file = JSON.stringify(filecount);
      } catch (err) {
        modalOpen("There Was A Mistake!", "There was an error with uploading your background/s, either your file size is above 5 MB, or you have too many files selected.", true);
        disableReload = true;
      }
      console.log("Done " + JSON.parse(localStorage.file));
      setTimeout(reload, 200);
    }
  } else if (localStorage.file == "Reset") {
    localStorage.file = "null";
    localStorage.backgroundURL = "";
    setTimeout(reload, 200);
  } else {
    setTimeout(reload, 200);
  }
}

function readURL(__files) {

  localStorage.file = null;
  console.log(__files);
  var file = __files;
  var reader = new FileReader();
  reader.onloadend = function() {

    filecount.push(reader.result);
    slideshow();
  }

  if (file) {
    reader.readAsDataURL(file);
  }
}
visualFile()

function visualFile() {
  if (document.getElementById('getval').files[0] == null) {
    document.getElementById('EnterName').innerHTML = 'Change The Background'
  } else if (document.getElementById('getval').files[0].name.slice(0, 12) == document.getElementById('getval').files[0].name) {
    document.getElementById('EnterName').innerHTML = document.getElementById('getval').files[0].name;
  } else {
    document.getElementById('EnterName').innerHTML = document.getElementById('getval').files[0].name.slice(0, 12) + "...";
  }
  setTimeout(visualFile, 500);
}

document.getElementById('bg').style.filter = "blur(" + localStorage.blur + "px)";
document.getElementById('blurRange').value = localStorage.blur;
