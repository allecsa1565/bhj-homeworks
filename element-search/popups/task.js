'use strict';

let modalMain = document.getElementById('modal_main');
modalMain.className += ' modal_active';

let modalClose = document.querySelector('div.modal__close');
for(let i = 0; i < modalClose.length; i++) {
	modalClose[i].onclick = () => moduleClose();
}

let modalSuccess = document.getElementById('modal_success');
let showSuccess = document.querySelector('.show-success');

showSuccess.onclick = () => {
	moduleClose();
	modalSuccess.className += ' modal_active';
};

function moduleClose () {
	let elementActive = document.querySelector('.modal_active');
	elementActive.className = elementActive.className.replace(' modal_active', '');
}
