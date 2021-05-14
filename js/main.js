
var username; {
  if (localStorage.length === 0) {
      username = "Guest";
  } else {
      username = localStorage.getItem("name");
  }
}

function addUserName() {
  document.getElementById('currentname').innerHTML = username;
}

function changeName(){
  username = document.getElementById("userNameSlot").value;
  localStorage.setItem("name", document.getElementById("userNameSlot").value);
  document.getElementById('currentname').innerHTML = username;
  console.log(username);
}

function NewTab() { 
  window.open( 
    "page_2.html", "_blank"); 
} 

window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
  addUserName();
}


