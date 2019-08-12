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

let deadline = '2019-08-13';

function getTime(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()), 
        seconds, minutes, hours;
    if (t < 0) {
        seconds = 0;
        minutes = 0;
        hours = 0;
        t = 0;
    }    else {
                seconds = Math.floor((t/1000) % 60);
                minutes = Math.floor((t/1000/60) % 60);
                hours = Math.floor(t/1000/60/60);
            }
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
        if (t.total == 0) {
            clearInterval(timeInterval);
        }
    }
        
}

setTime('timer', deadline);
});