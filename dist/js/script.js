// Форма обратной связи-скрипт


var link = document.querySelector(".envelope"); // нашли кнопку по которой будет производиться клик и записали её в переменную "link";
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

if (link === null) {
    link = 1;
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

close.addEventListener("click", function(evt) { // поймали событие клика по кнопке "Закрыть";
    evt.preventDefault(); // отменили стандартное действие браузера;
    popup.classList.remove("feedback-form-visible"); // убрали у попапа класс "modal-show";
    popup.classList.remove("feedback-form-visible");

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