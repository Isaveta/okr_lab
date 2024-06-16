// Функція для діалогу з користувачем 6.1
function userDialog() {
    var userName = prompt("Введіть ваше ім'я:");

    // Перевіряємо, чи користувач ввів ім'я і не натиснув "Скасувати"
    if (userName !== null) {
        if (userName.trim() !== "") {
            alert("Привіт, " + userName + "! Ласкаво просимо на нашу сторінку!");
        } else {
            alert("Привіт незнайомцю! Ласкаво просимо на нашу сторінку!");
        }

        var result = confirm("Натисніть 'ОК', якщо вам подобається ця сторінка");
        if (result) {
            alert("Дякуємо за ваш відгук 😍🥰");
        } else {
            alert("Дуже шкода, що вам не сподобалось 😟😭");
        }
    } else {
        // Якщо користувач натиснув "Скасувати" у вікні prompt
        alert("Ви скасували введення імені. Ласкаво просимо на нашу сторінку!");
    }
}

// Функція для виведення інформації про розробника
function showDeveloperInfo(lastName, firstName, position= 'Web Developer') {
    alert("Інформація про розробника:\n\nПрізвище: " + lastName + "\nІм'я: " + firstName + "\nПосада: " + position);
}

function compareStrings() {
    // Запитати перший рядок
    var str1 = prompt("Введіть перший рядок для порівняння:");

    // Запитати другий рядок
    var str2 = prompt("Введіть другий рядок для порівняння:");

    if (str1.length > str2.length) {
        alert("Рядок '" + str1 + "' є довшим за рядок '" + str2 + "'.");
    } else if (str2.length > str1.length) {
        alert("Рядок '" + str2 + "' є довшим за рядок '" + str1 + "'.");
    } else {
        alert("Рядки мають однакову довжину.");
    }
}




////////////////////////////////////////////// 6.2
// Змінити фон сторінки на 30 секунд
document.body.style.backgroundColor = "#FFC0CB"; // Зміна фону на рожевий

// Після 30 секунд змінити фон на початковий колір
setTimeout(function() {
    document.body.style.backgroundColor = ""; // Повернення до початкового фону
}, 3000); // 30 секунд = 3000 мілісекунд



// Перенаправлення браузера через 5 секунд на іншу сторінку
//setTimeout(function() {
   // document.location.href = "group_info.html"; // Замінити URL на потрібний
//}, 5000); // 5 секунд = 5000 мілісекунд




// Знайти всі <p> елементи в документі
//var allParagraphs = document.querySelectorAll("p");

// Інформація про гурт ITZY
//var itzyInfo = "ITZY відомі своїм унікальним стилем та енергійним виступами, що поєднують в собі потужний вокал, хореографію в стилі street dance та яскраві музичні відео. ITZY здобули величезну популярність завдяки своїм хітам, таким як \"Dalla Dalla\", \"Wannabe\" та \"ICY\", відзначаючись сміливими текстами і сучасним звучанням.";

// Змінити текст у першому <p> елементі на інформацію про ITZY
//if (allParagraphs.length > 0) {
//    allParagraphs[0].textContent = itzyInfo;
//}
//;




////////////// 7.1
// Функція-обробник події призначена через атрибут onclick
function handleClick() {
    alert("Ви натиснули кнопку!");
}

// Пошук кнопки за id
var button2 = document.getElementById("myButton2");

// Функція-обробник для першого обробника
function handler1() {
    alert("Обробник 1: Ви натиснули кнопку!");
}

// Функція-обробник для другого обробника
function handler2() {
    alert("Обробник 2: Ви натиснули кнопку!");
}

// Призначення обробників за допомогою addEventListener
button2.addEventListener("click", handler1);
button2.addEventListener("click", handler2);

// Об'єкт з методом handleEvent для обробки подій
var eventHandler = {
    handleEvent: function(event) {
        // Виведення елемента, на якому спрацював обробник
        alert("Спрацював обробник на елементі: " + event.currentTarget.tagName);
    }
};


// Клас для обробки подій mouseover і mouseout
class EventHandler {
    constructor(element) {
        this.messageElement = element;
    }

    handleEvent(event) {
        if (event.type === 'mouseover') {
            this.handleMouseOver(event);
        } else if (event.type === 'mouseout') {
            this.handleMouseOut(event);
        }
    }

    handleMouseOver(event) {
        this.messageElement.textContent = 'Ласкаво просимо!';
        this.messageElement.style.display = 'block';

        setTimeout(() => {
            this.messageElement.style.display = 'none';
        }, 10000);

        console.log('Mouse over on:', event.currentTarget);
    }

    handleMouseOut(event) {
        this.messageElement.textContent = 'Насолоджуйтесь сайтом!';
        this.messageElement.style.display = 'block';

        setTimeout(() => {
            this.messageElement.style.display = 'none';
        }, 10000);

        console.log('Mouse out on:', event.currentTarget);
    }
}

// Отримуємо елемент повідомлення
var messageElement = document.getElementById('message');

// Створюємо об'єкт EventHandler
var eventHandler = new EventHandler(messageElement);

// Додаємо обробники подій до кнопок меню
document.querySelectorAll('.menu-button').forEach(button => {
    button.addEventListener('mouseover', eventHandler);
    button.addEventListener('mouseout', eventHandler);
});

// Функції для кожної дії
function newsAction() {
    console.log('Перехід до розділу Новини');
    location.href = 'https://t.me/itzy_ukraine'; // Приклад посилання на сторінку з новинами
}

function albumsAction() {
    console.log('Перехід до розділу Альбоми');
    location.href = 'https://www.instagram.com/magic.shop._.ua?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='; // Приклад посилання на сторінку з альбомами
}

function videosAction() {
    console.log('Перехід до розділу Ютуб');
    location.href = 'https://www.youtube.com/@ITZY'; // Приклад посилання на сторінку з Ютуб
}

function merchAction() {
    console.log('Перехід до розділу Мерч');
    window.open('https://www.instagram.com/itz_isa.png?igsh=dXhnZ3pmOGRrc2F4', '_blank'); // Приклад зовнішнього посилання на мерч
}

// Отримуємо посилання на меню
var menu = document.getElementById('menu');

// Додаємо обробник подій до меню
menu.addEventListener('click', function(event) {
    var target = event.target;

    // Перевіряємо, чи клікнули на кнопку меню
    if (target.classList.contains('menu-button')) {
        // Отримуємо дію з атрибута data-action
        var action = target.getAttribute('data-action');

        // Викликаємо відповідну функцію в залежності від дії
        switch (action) {
            case 'news':
                newsAction();
                break;
            case 'albums':
                albumsAction();
                break;
            case 'videos':
                videosAction();
                break;
            case 'merch':
                merchAction();
                break;
            default:
                console.log('Невідома дія:', action);
        }
    }
});


