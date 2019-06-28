//todolist
if (localStorage.storedList) {
  loadList();
}
document.getElementById("todoOpen").style.opacity = 1;

function addItem() {
  if (cheatcode(document.getElementById("box").value) == false) {
    var newItem = document.createElement("h4");
    var itemChild = document.createElement("span");
    newItem.appendChild(document.createTextNode(document.getElementById("box").value));
    newItem.classList.add("strike", "sideAccent");
    newItem.addEventListener("click", finishItem);
    itemChild.innerHTML = "&times;";
    itemChild.addEventListener("click", removeItem);
    newItem.appendChild(itemChild);
    document.getElementById("list").appendChild(newItem);
    document.getElementById("box").value = "";
    saveList();
  }
}

function removeItem() {
  document.getElementById("list").removeChild(this.parentNode);
  saveList();
}

function saveList() {

  var sideAccent = document.getElementsByClassName("sideAccent");
  for (var i = 0; i < sideAccent.length; i++) {
    sideAccent[i].style.color = localStorage.background;
  }
  localStorage.storedList = document.getElementById("list").innerHTML;
}

function loadList() {
  document.getElementById("list").innerHTML = localStorage.storedList;
  for (var i = 0; i < list.children.length; i++) {
    list.children[i].children[0].addEventListener("click", removeItem);
    list.children[i].addEventListener("click", finishItem);
  }
}

function finishItem() {
  if (this.classList.value.includes("finished")) {
    this.classList.remove('finished');
  } else {
    this.classList.add('finished');
  }
}

function checkEnterT(key) {
  var key = key.keyCode;
  if (key == 13) {
    addItem();
  }
}
