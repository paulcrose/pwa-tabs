
function newTab() { 
  window.open( 
    "page_2.html", "_blank"); 
} 



window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}


