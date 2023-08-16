const loader = document.getElementById('loader');
const items = document.getElementById('items');
const xhrequest = new XMLHttpRequest();
  xhrequest.open('GET',' https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhrequest.setRequestHeader('Content-Type', 'application/json');
xhrequest.send();
xhrequest.addEventListener('readystatechange', ()=>{

    if (xhrequest.readyState === 4) {

        loader.classList.remove('loader_active');

        const data = JSON.parse(xhrequest.responseText).response.Valute;

        for (const valute in data) {
            const item = `<div class="item">
                            <div class="item__code">
                                ${data[valute].CharCode}
                            </div>
                            <div class="item__value">
                                ${data[valute].Value}
                            </div>
                            <div class="item__currency">
                                руб.
                            </div>
                          </div>`;
             items.insertAdjacentHTML('beforeend', item);
        }

    }
});
