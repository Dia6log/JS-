window.addEventListener('DOMContentLoaded', function() {
'use strict';
let tab = document.querySelectorAll('.info-header-tab'),
    tabContent = document.querySelectorAll('.info-tabcontent'),
    header = document.querySelector('.info-header');

function hideTabContent(index) {
    for (let i = index; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
    }
}

hideTabContent(1); 

function showTabContent(tabIndex) {
    if (tabContent[tabIndex].classList.contains('hide')) {
    tabContent[tabIndex].classList.remove('hide');
    tabContent[tabIndex].classList.add('show');
    }
}

//showTabContent(2);

header.addEventListener('click', function(e){
    let target = e.target;
    if (target && target.classList.contains('info-header-tab')){
        for (let i = 0; i < tab.length; i++) {
            if (tab[i] == target) {
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        }

    }

});

});