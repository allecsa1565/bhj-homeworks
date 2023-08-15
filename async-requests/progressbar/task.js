const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  const formData = new FormData(form);
  const xhRequest = new XMLHttpRequest();
  xhRequest.open('POST',' https://students.netoservices.ru/nestjs-backend/upload');
  const progress = document.getElementById('progress');

  xhRequest.upload.onloadstart = function() {
  xhr.upload.onprogress = event => { 
     progress.value = event.loaded / event.total; 
   };  xhRequest.upload.onload = function() {
    progress.value = 1.0;
  }
    
  xhRequest.send(formData);
  e.preventDefault();
});
