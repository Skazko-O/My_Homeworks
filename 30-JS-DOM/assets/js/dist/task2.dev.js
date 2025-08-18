"use strict";

var open = document.getElementById('open');
var close = document.getElementById('close');
var modal = document.getElementById('modal');
open.addEventListener('click', function () {
  modal.style.display = 'flex';
});
close.addEventListener('click', function () {
  modal.style.display = 'none';
});
modal.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});