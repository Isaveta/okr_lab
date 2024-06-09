// Функція для діалогу з користувачем
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
function showDeveloperInfo(lastName, firstName, position = 'Web Developer') {
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




//////////////////////////////////////////////
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



//
// Знайти всі <p> елементи в документі
//var allParagraphs = document.querySelectorAll("p");

// Інформація про гурт ITZY
//var itzyInfo = "ITZY відомі своїм унікальним стилем та енергійним виступами, що поєднують в собі потужний вокал, хореографію в стилі street dance та яскраві музичні відео. ITZY здобули величезну популярність завдяки своїм хітам, таким як \"Dalla Dalla\", \"Wannabe\" та \"ICY\", відзначаючись сміливими текстами і сучасним звучанням.";

// Змінити текст у першому <p> елементі на інформацію про ITZY
//if (allParagraphs.length > 0) {
//    allParagraphs[0].textContent = itzyInfo;
//}
//;