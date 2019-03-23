'use strict';

(function(){
  var writeUsButton = document.querySelector('.write-us');
  var writeUsPopup = document.querySelector('.modal.contact-us');

  var openMap = document.querySelector('.modal.map');
  var map = document.querySelector('.contact-map');

  var popup = document.querySelectorAll('.modal');
  var close = document.querySelectorAll('.modal-close');

  var form = document.querySelector('.modal-form');
  var login = form.querySelector("[name=login]");
  var password = form.querySelector("[name=password]");

  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

  var openPopup = function (evt) {
    if(evt.target.tagName === 'IMG'){
      openMap.classList.add('modal-show');
    }
    if(evt.target.tagName === 'A'){
      writeUsPopup.classList.add('modal-show');
      if (storage) {
        login.value = storage;
        password.focus();
      } else {
        login.focus();
      }
    }
  };

  var closePopup =  function () {
    [].forEach.call(popup, function (el) {
      el.classList.remove('modal-show');
      el.classList.remove("modal-error");
    });
  };

  writeUsButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      openPopup(evt);
    });

  [].forEach.call(close, function (el) {
    el.addEventListener('click', function (evt) {
      evt.preventDefault();
      closePopup();
    });
  });

  map.addEventListener('click', function (evt) {
   evt.preventDefault();
   openPopup(evt);
  });

 window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
     evt.preventDefault();
     popup = document.querySelectorAll('.modal');
     [].forEach.call(popup, function (el) {
       if (el.classList.contains("modal-show")) {
         el.classList.remove("modal-show");
       }
     })
   }
 });

 form.addEventListener("submit", function (evt) {
   if (!login.value || !password.value) {
     evt.preventDefault();
     evt.target.classList.remove('modal-error');
     setTimeout(function() { evt.target.classList.add("modal-error")}, 100);
   } else {
     if (isStorageSupport) {
       localStorage.setItem("login", login.value);
     }
   }
 });

 window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
     evt.preventDefault();
     if (popup.classList.contains("modal-show")) {
       popup.classList.remove("modal-show");
       popup.classList.add("modal-error");
     }
   }
 });
}())
