"use strict";

var h1 = document.querySelector('h1');
var txtzone = document.createElement('div');
var textarea = document.createElement('textarea');
txtzone.innerText = "\n\u0426\u0435 \u0442\u0435\u0441\u0442\u043E\u0432\u0438\u0439 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F!";
txtzone.className = 'txtzone';
h1.insertAdjacentElement('afterend', txtzone);
document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.code === 'KeyE') {
    e.preventDefault();
    txtzone.replaceWith(textarea);
    textarea.value = txtzone.textContent;
    textarea.id = 'editor';
    textarea.className = 'editor';
  }

  if (e.ctrlKey && e.code === 'KeyS') {
    e.preventDefault();
    textarea.replaceWith(txtzone);
    txtzone.textContent = textarea.value;
  }
});