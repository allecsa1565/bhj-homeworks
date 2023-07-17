'use strict';

let sliderArrow = document.getElementsByClassName('slider__arrow');
let sliderItem = document.querySelectorAll('.slider__item');
let sliderDot = document.querySelectorAll('.slider__dot');
let index = 0;

for (let i = 0; i < sliderArrow.length; i++) {
	sliderArrow[i].onclick = changeSlide;
}

for (let i = 0; i < sliderDot.length; i++) {
	sliderDot[i].onclick = () => {dotSlide(i)};
}

function changeSlide (key) {
	let classSlideArrow = event.target.classList;
	
	sliderItem[index].classList.remove('slider__item_active');


	if(classSlideArrow.contains('slider__arrow_next')) {
		if (index == sliderItem.length - 1) {
			index = 0;
		} else {
			index++;
		}
	}

	if(classSlideArrow.contains('slider__arrow_prev')) {

		if (index == 0) {
			index = sliderItem.length - 1;
		} else {
			index--;
		}
	}

	sliderItem[index].classList.add('slider__item_active');
}

function dotSlide(key) {
	sliderItem[index].classList.remove('slider__item_active');
	sliderItem[key].classList.add('slider__item_active')
	index = key;
}
