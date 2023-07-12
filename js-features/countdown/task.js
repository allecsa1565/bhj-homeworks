function counter() { 
     const timer = document.getElementById('timer'); 
     let time = timer.textContent.split(':'); 
  
     if (time.length === 3) { 
         let hours = parseInt(time[0]); 
         let minutes = parseInt(time[1]); 
         let seconds = parseInt(time[2]); 
  
         seconds -= 1; 
  
         if (seconds === 0 && minutes !== 0) { 
             minutes -= 1; 
             seconds = 59; 
         } 
  
         if (minutes === 0 && hours !== 0) { 
             hours -= 1; 
             minutes = 59; 
         } 
  
         hours = hours < 10 ? `0${hours}` : hours; 
         minutes = minutes < 10 ? `0${minutes}` : minutes; 
         seconds = seconds < 10 ? `0${seconds}` : seconds; 
  
         timer.textContent = `${hours}:${minutes}:${seconds}`; 
  
         if (hours === "00" && minutes === "00" && seconds === "00") { 
             alert("Вы победили в конкурсе!"); 
             clearInterval(interval); 
         } 
     } else { 
         timer.textContent -= 1; 
  
         if(parseInt(timer.textContent) === 0){ 
             alert('Вы победили в конкурсе!'); 
             clearInterval(interval); 
         } 
     } 
 } 
 const interval = setInterval(counter, 1000);