let size = document.querySelectorAll('.font-size'); 
 let book = document.querySelector('.book'); 
  
 for(let i = 0; i < size.length; i++) { 
         size[i].addEventListener('click', (event) => { 
                 event.preventDefault(); 
                 let key = event.target; 
                 for(let i = 0; i < size.length; i++) { 
                         size[i].classList.remove('font-size_active'); 
                 } 
         key.classList.add('font-size_active'); 
  
         let textSize = key.dataset.size; 
  
  
                 switch(textSize) { 
                         case 'small': 
               book.classList.remove('book_fs-big'); 
               book.classList.add('book_fs-small'); 
                                 break; 
                         case 'big': 
               book.classList.remove('book_fs-small'); 
               book.classList.add('book_fs-big'); 
                                 break; 
                         default: 
               book.classList.remove('book_fs-small'); 
               book.classList.remove('book_fs-big'); 
                                 break; 
                 } 
  
         }); 
 }