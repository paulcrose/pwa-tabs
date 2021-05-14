
function newTab() { 
  window.open( 
    "page_2.html", "_blank"); 
} 

function closeTab() { 
  window.close(); 
} 

window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}


