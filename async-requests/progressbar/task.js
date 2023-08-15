const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  const formData = new FormData(form);
  const xhRequest = new XMLHttpRequest();
  xhRequest.open('GET',' https://students.netoservices.ru/nestjs-backend/upload');
  const progress = document.getElementById('progress');

  xhRequest.upload.onloadstart = function() {

    progress.value = 0.1

    function increase() {

      if(progress.value <= 0.9) {
        progress.value = progress.value + 0.1;
      }            
    } 

    setInterval(increase, 2000);
  };  

  xhRequest.upload.onload = function() {
    progress.value = 1.0;
  }
    
  xhRequest.send(formData);
  e.preventDefault();
});
