'use strict' 
  
 const reveals = document.querySelectorAll('.reveal'); 
 reveals.forEach(element => { 
    document.addEventListener('scroll',(event) =>  { 
         if (window.innerHeight > element.getBoundingClientRect().top) element.classList.add('reveal_active') 
         else{ 
             element.classList.remove('reveal_active') 
         };        
    });  
 });