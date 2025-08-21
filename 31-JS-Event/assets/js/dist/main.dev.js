"use strict";

var h1 = document.querySelector('h1');
var txtzone = document.createElement('div');
txtzone.textContent = 'Це тестовий текст для редагування!';
txtzone.className = 'txtzone';
txtzone.setAttribute('contenteditable', 'false');
h1.insertAdjacentElement('afterend', txtzone);
document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.code === 'KeyE') {
    e.preventDefault();
    txtzone.setAttribute('contenteditable', 'true');
    txtzone.classList.add('edit');
    txtzone.focus();
  }

  if (e.ctrlKey && e.code === 'KeyS') {
    e.preventDefault();
    txtzone.setAttribute('contenteditable', 'false');
    txtzone.classList.remove('edit');
  }
});