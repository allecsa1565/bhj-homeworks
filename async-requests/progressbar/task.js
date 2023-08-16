const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const xhrequest = new XMLHttpRequest();
  xhrequest.open('POST',' https://students.netoservices.ru/nestjs-backend/upload'); xhrequest.setRequestHeader("Content-Type", "multipart/form-data");
  const progress = document.getElementById('progress');

  xhrequest.upload.onprogress = event => { 
     progress.value = event.loaded / event.total; 
   };  
  xhrequest.upload.onload = function() {
    progress.value = 1.0;
  }
    
  xhrequest.send(formData);
});
