/* Показ/скрытие блоков (увидеть больше) */





$('#see-more').click(function() {
    $('.block-slideToggle').slideToggle('slow');
});

$('#see-moree').click(function() {
    $('.block-slideTogglee').slideToggle('slow');
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

/* Основная функция слайдера */
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

var itemm = $('.itemm'); /* При разрешении*/
if ($(window).width() < 1024) {
    itemm.addClass('item1');
}


/*Слайдер для команды*/

// Первый раз код нужен для того, что бы когда впервые открывашь браузер на ширине менее 1024 пикселя сразу открывался слайдер(иначе все "item1" были display: block)
// Второй раз этот код нужен для того, что бы когда экран меньше 1024 персоны становились слайдером
// Третий раз этот код нужен для того, что бы когда экран становился больше 1024 персоны становились в линию.

var slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlide1() {
    showSlides1(slideIndex1 += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide1() {
    showSlides1(slideIndex1 -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide1(m) {
    showSlides1(slideIndex1 = m);
}


function showSlides1(m) {
    var j;
    var slides1 = document.getElementsByClassName("item1");
    var dots1 = document.getElementsByClassName("slider-dots_item1");
    if (m > slides1.length) {
        slideIndex1 = 1
    }
    if (m < 1) {
        slideIndex1 = slides1.length
    }
    for (j = 0; j < slides1.length; j++) {
        slides1[j].style.display = "none";
    }
    for (j = 0; j < dots1.length; j++) {
        dots1[j].className = dots1[j].className.replace(" active1", "");
    }
    slides1[slideIndex1 - 1].style.display = "block";
    dots1[slideIndex1 - 1].className += " active1";
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





var actionBookmark = document.querySelectorAll(".wrapper-burger-menu"); // 1.
console.log(actionBookmark);
console.log(actionBookmark.length);

var closeMenu = document.querySelector(".header");
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
                closeMenu.classList.remove("out");
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
        asd.removeClass('menu-popup-visible');
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






// Форма обратной связи - скрипт


var link = document.querySelector(".envelope"); // нашли кнопку по которой будет производиться клик и записали её в переменную "link";
console.log(link)
var popup = document.querySelector(".feedback-form"); // нашли класс формы по которому форма будет показываться;
var close = popup.querySelector(".feedback-form__close"); // нашли кнопку закрытия формы и записали ёё в переменную;

var form = popup.querySelector(".user-form") // нашли форму в попапе для того что бы управлть отправкой формы;
var login = popup.querySelector("#user-login"); // нашли инпут которому будем устанавливать фокус;
var email = popup.querySelector(".user-name"); // нашли инпут который будем проверяь на валидность;
var text = popup.querySelector(".user-email"); //нашли инпут который будем проверять на валидность;


link.addEventListener("click", function(evt) { // поймали событие клика по кнопке;
    evt.preventDefault(); // отменили действие браузера по умолчанию для кнопки;
    popup.classList.add("feedback-form-visible"); // добавили форме класс который отвечает за показ-форма показалась;
})

close.addEventListener("click", function(evt) { // поймали событие клика по кнопке "Закрыть";
    evt.preventDefault(); // отменили стандартное действие браузера;
    popup.classList.remove("feedback-form-visible"); // убрали у попапа класс "modal-show";

})

form.addEventListener("submit", function(evt) { // поймали событие отправки формы;
    evt.preventDefault(); //отменили стандартное дествие браузера;
    if (!login.value || !name.value || !email.value) { // если хоть одно поле не заполнено, то отменяем отправку формы;
        evt.preventDefault(); //отменяем отправку формы;
        popup.offsetWidth = popup.offsetWidth;
        console.log("Пожалуйста, заполните поля формы") // и выводим сообщение о необходимости заполнить все поле формы;
    }
})

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("feedback-form-visible")) {
            popup.classList.remove("feedback-form-visible");
        }
    }
})