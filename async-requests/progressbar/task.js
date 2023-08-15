const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const xhRequest = new XMLHttpRequest();
  xhRequest.open('POST',' https://students.netoservices.ru/nestjs-backend/upload'); xhRequest.setRequestHeader("Content-Type", "multipart/form-date");
  const progress = document.getElementById('progress');

  xhRequest.upload.onloadstart = function() {
  xhRequest.upload.onprogress = event => { 
     progress.value = event.loaded / event.total; 
   };  
  xhRequest.upload.onload = function() {
    progress.value = 1.0;
  }
    
  xhRequest.send(formData);
  e.preventDefault();
});
