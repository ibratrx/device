'use strict';

(function(){
  var loginLink = document.querySelectorAll('.contacts');
  var popup = document.querySelectorAll('.modal');
  var writeUs = document.querySelector('.modal.contact-us');
  var close = document.querySelectorAll('.modal-close');


  var openPopup = function (evt) {
    if(evt.target.tagName === 'IMG'){
      openMap.classList.add('modal-show');
    }
    if(evt.target.tagName === 'A'){
      writeUs.classList.add('modal-show');
    }
  };

  var closePopup =  function () {
    [].forEach.call(popup, function (el) {
      el.classList.remove('modal-show');
    })
  };

  [].forEach.call(loginLink, function (el) {
    el.addEventListener('click', function (evt) {
      evt.preventDefault();
      openPopup(evt);
    });
  });

  [].forEach.call(close, function (el) {
    el.addEventListener('click', function (evt) {
      evt.preventDefault();
      closePopup();
    });
  });

 try {
   var openMap = document.querySelector('.modal.map');
   var map = document.querySelector('.contact-map');


   map.addEventListener('click', function (evt) {
    evt.preventDefault();
    openPopup(evt);
   });
 } catch (e) {
 }

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
}())
