window.addEventListener('DOMContentLoaded', function() {
'use strict';

class Overlay {
    constructor(classBtn) {
        this.btn = document.querySelectorAll('.'+ classBtn);
    }
    
    clickBtn(i) {
        i = i || 0;
        this.btn[i].addEventListener('click', function() {
        overlay.style.display = 'block';
        // this.btn[i].classList.add('more-splash');
        window.document.body.style.overflow = 'hidden';  
        });
    }
}

let tab = document.querySelectorAll('.info-header-tab'),
    tabContent = document.querySelectorAll('.info-tabcontent'),
    header = document.querySelector('.info-header'),
    overlay = document.querySelector('.overlay'),
    closeBtn = document.querySelector('.popup-close'),
    tabMoreBtn = new Overlay('description-btn');


function hideTabContent(index) {
    for (let i = index; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
    }
}

hideTabContent(1);
tabMoreBtn.clickBtn();


function showTabContent(tabIndex) {
    if (tabContent[tabIndex].classList.contains('hide')) {
    tabContent[tabIndex].classList.remove('hide');
    tabContent[tabIndex].classList.add('show');
    }
    tabMoreBtn.clickBtn(tabIndex);
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

let deadline = '2019-08-18';

function getTime(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor(t/1000/60/60);

    return {
        'total' : t,
        "hours" : hours,
        'minutes': minutes,
        'seconds' : seconds
    };
}

function setTime(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateTime, 1000);
    
    function updateTime() {
        let t = getTime(endtime);
            hours.textContent = (''+t.hours).replace(/\b\d\b/, '0$&');
            minutes.textContent = (''+t.minutes).replace(/\b\d\b/, '0$&');
            seconds.textContent = (''+t.seconds).replace(/\b\d\b/, '0$&');
        if (t.total <= 0) {
            clearInterval(timeInterval);
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        }
    }
        
}

setTime('timer', deadline);


// let moreBtn = document.querySelector('.more');
 
// moreBtn.addEventListener('click', function() {
//     overlay.style.display = 'block';
//     this.classList.add('more-splash');
//     document.body.style.overflow = 'hidden';

// });

closeBtn.addEventListener('click', function() {
    overlay.style.display = 'none';
    //moreBtn.classList.remove('more-splash');
    document.body.style.overflow = '';
});

let timerMoreBtn = new Overlay('more');
    timerMoreBtn.clickBtn();





});