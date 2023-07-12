const cookieClickCounter = document.getElementById('clicker__counter'); 
 const cookieClickSpeed = document.getElementById('clicker__speed'); 
  
 let clickTime = Date.now(); 
  
 function cookieClick() { 
     cookieClickCounter.textContent = parseInt(cookieClickCounter.textContent) + 1; 
     cookieClickSpeed.textContent = (1 / ((Date.now() - clickTime) / 1000)).toFixed(2); 
     clickTime = Date.now(); 
  
     if(cookieClickCounter.textContent % 2 !== 0) { 
         this.width *= 1.3; 
     } else { 
         this.width /= 1.3; 
     } 
 } 
 cookie.onclick = cookieClick;