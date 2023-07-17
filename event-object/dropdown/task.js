'use strict'

const dropDownValue = Array.from(document.getElementsByClassName('dropdown__value'));
const dropDownList = Array.from(document.getElementsByClassName('dropdown__list'));

function showMenu(){

    dropDownValue.forEach(function(element,i){
        document.addEventListener('click',function(event){
            event.preventDefault();
            if(event.target.classList.contains('dropdown__value')){
                dropDownList[i].classList.add('dropdown__list_active');
            }else{
                if(event.target.classList.contains('dropdown__link')){
                    const text = event.target.text;
                    dropDownValue[i].textContent = text;
                    dropDownList[i].classList.remove('dropdown__list_active');
                }
            }
            
        })        
    });
}
