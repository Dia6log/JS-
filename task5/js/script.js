let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.querySelectorAll('.menu .menu-item'),
    title = document.getElementById('title');
    adv = document.getElementsByClassName('adv')[0];
    five = document.createElement('li'),
    id = document.getElementById('prompt');

    document.body.style.backgroundImage = "url('img/apple_true.jpg')";
    title.textContent = 'Мы продаем только подлинную технику Apple';
    menu.insertBefore(menuItem[2], menuItem[1]);
    five.textContent = 'Пятый пункт';
    five.classList.add('menu-item');
menu.appendChild(five);
adv.remove();
id.textContent = prompt('Какаво Ваше отношение к техники Apple?', '');

