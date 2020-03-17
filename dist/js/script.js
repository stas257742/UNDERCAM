/* Показ/скрытие блоков (увидеть больше) */





$('#see-more').click(function() {
    $('.block-slideToggle').slideToggle('slow');
});





/* Слайдер */





/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция сладера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}




/* Скрытие или раскрытие меню */





var header = $('.header'),
    scrollPrev = 0;

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if (scrolled > 1 && scrolled > scrollPrev) {
        header.addClass('out');
    } else {
        header.removeClass('out');
    }
    scrollPrev = scrolled;
});





/* Меню при нажатии */





var actionBookmark = document.querySelectorAll(".menu-burger"); // 1.
console.log(actionBookmark);
console.log(actionBookmark.length);

var popupBasket = document.querySelector(".menu-popup");

var close = popupBasket.querySelector(".modal-close");

for (var i = 0; i < actionBookmark.length; i++) {
    actionBookmark[i].addEventListener("click", function(evt) { //2. 
        evt.preventDefault();
        popupBasket.classList.add("menu-popup-visible");
    })
}

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupBasket.classList.remove("menu-popup-visible");

    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (popupBasket.classList.contains("menu-popup-visible")) {
                popupBasket.classList.remove("menu-popup-visible");
            }
        }
    })
})




/* Плавный переход по якорным ссылкам */





$(document).ready(function() {
    $(".wrapper__menu-list").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top,
            asd = $('.menu-popup');
        $('body,html').animate({
            scrollTop: top
        }, 900);
        asd.removeClass('menu-popup-visible')
    });
});



/* Контакты */





var actionBookmarkk = document.querySelectorAll(".contacts-link"); // 1.
console.log(actionBookmarkk);
console.log(actionBookmarkk.length);

var popupBaskett = document.querySelector(".contacts");

var closee = popupBaskett.querySelector(".contacts-close");

for (var i = 0; i < actionBookmarkk.length; i++) {
    actionBookmarkk[i].addEventListener("click", function(evt) { //2. 
        evt.preventDefault();
        popupBaskett.classList.add("contacts-visible");
    })
}

closee.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupBaskett.classList.remove("contacts-visible");

    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (popupBasket.classList.contains("contacts-visible")) {
                popupBasket.classList.remove("contacts-visible");
            }
        }
    })
})





/* Форма обратной связи-скрипт */





var link = document.querySelector(".envelope-span"); // нашли кнопку по которой будет производиться клик и записали её в переменную "link";
var link1 = document.querySelector(".envelope"); // нашли кнопку по которой будет производиться клик и записали её в переменную "link";

console.log(link)
var popup = document.querySelector(".feedback-form"); // нашли класс формы по которому форма будет показываться;
var close = popup.querySelector(".feedback-form__close"); // нашли кнопку закрытия формы и записали ёё в переменную;

var form = popup.querySelector(".user-form") // нашли форму в попапе для того что бы управлять отправкой формы;
var tel = popup.querySelector(".user-tel"); // нашли инпут которому будем устанавливать фокус;
var email = popup.querySelector(".user-email"); // нашли инпут который будем проверяь на валидность;
var name = popup.querySelector("user-name"); //нашли инпут который будем проверять на валидность;

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

if (link === null || link1 === null) {
    link = 1;
    link1 = 1;
}
console.log(link)

link.addEventListener("click", function(evt) { // поймали событие клика по кнопке;
    evt.preventDefault(); // отменили действие браузера по умолчанию для кнопки;
    popup.classList.add("feedback-form-visible"); // добавили форме класс который отвечает за показ-форма показалась;
    if (storage) { //если storage имеет значаение;
        login.value = storage; // тогда присваиваем login значание storage;
        email.focus; //если нет-сместили фокус на поле email;
    } else {
        login.focus; // если storage не имеет значения ставим фокус на ввод имени;
    }
})

link1.addEventListener("click", function(evt) { // поймали событие клика по кнопке;
    evt.preventDefault(); // отменили действие браузера по умолчанию для кнопки;
    popup.classList.add("feedback-form-visible"); // добавили форме класс который отвечает за показ-форма показалась;
    if (storage) { //если storage имеет значаение;
        login.value = storage; // тогда присваиваем login значание storage;
        email.focus; //если нет-сместили фокус на поле email;
    } else {
        login.focus; // если storage не имеет значения ставим фокус на ввод имени;
    }
})

close.addEventListener("click", function(evt) { // поймали событие клика по кнопке "Закрыть";
    evt.preventDefault(); // отменили стандартное действие браузера;
    popup.classList.remove("feedback-form-visible"); // убрали у попапа класс "modal-show";
    popup.classList.remove("feedback-form-visible");
    popup.classList.remove("modal-error");

})

form.addEventListener("submit", function(evt) { // поймали событие отправки формы;
    evt.preventDefault(); //отменили стандартное дествие браузера;
    if (!tel.value || !email.value || !name.value) { // если хоть одно поле не заполнено, то отменяем отправку формы;
        evt.preventDefault(); //отменяем отправку формы;
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
        console.log("Пожалуйста, заполните поля формы") // и выводим сообщение о необходимости заполнить все поле формы;
    } else { // если все поля формы заполнены, то происходит отправка формы;
        if (isStorageSupport) {
            localStorage.setItem("name", name.value) // и мы записываем логин пользователя в localStorage;
        }
    }
})
window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("feedback-form-visible")) {
            popup.classList.remove("feedback-form-visible");
            popup.classList.remove("modal-error");
        }
    }
})