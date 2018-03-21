
  var link = document.querySelector(".btn-login");
  var popup = document.querySelector(".modal");
  var close = popup.querySelector(".btn-cnl-form");
  var close1 = popup.querySelector(".close-form");
  var form = popup.querySelector("form");
  var login = popup.querySelector("[name=login]");
  var password = popup.querySelector("[name=password]");
  var storage = localStorage.getItem("login");//выведем (getItem) текущее значение логин

  link.addEventListener("click", function(event) { //поиск клика
    event.preventDefault(); //отмена действия по умолчанию
    popup.classList.add("modal-show"); //добавить класс .modal-show
    if (storage) { //если значение в storage существует
      login.value = storage; //введеное значение выводится (getItem)
      password.focus();//при введенном логине фокус на password
    }
    else {
      login.focus();//иначе на login
    }
  });

  close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-show"); //удалить класс .modal-show
  form.classList.remove("modal-error");//удалить класс .modal-error
});

  close1.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-show");//удалить класс .modal-show
  form.classList.remove("modal-error");//удалить класс .modal-error
});

  form.addEventListener("submit", function() { //поиск собыитя submit
    if (!login.value || !password.value) { // не введен логин или пароль
    event.preventDefault(); // отмена дейсвия по умолчанию submit не отправится
    form.classList.add("modal-error"); //добавить класс modal-error
    } else {
      localStorage.setItem("login", login.value); //сохраняем(setItem) текущее значение (login.value) введеное в input [name-login]
    }
});

  window.addEventListener("keydown", function(event) {//событие на "окно" браузера- нажатие клавиши
    if (event.keyCode===27) {//клавиша "27"-клавиша ESC.
      if (popup.classList.contains("modal-show")) {//contains-есть ли этот класс у этого элемента
          popup.classList.remove("modal-show");//удалем класс .modal-show
      }
    }
  });
