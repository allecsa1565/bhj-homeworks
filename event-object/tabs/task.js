let tabs = document.querySelectorAll('.tab');
let tabContent = document.querySelectorAll('.tab__content');

for (let tab of tabs) {
    tab.addEventListener('click', changeTabs)
}

function changeTabs(e) {
    for (let tab of tabs) {
        tab.className = 'tab';
    }
    e.target.className = 'tab tab_active';

    for (let content of tabContent) {
        content.className = 'tab__content';
    }
    
    const arrIndex = Array.from(tabs).indexOf(e.target);
    tabContent[arrIndex].className = 'tab__content tab__content_active';
}
