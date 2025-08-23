"use strict";

/*StarRating https://www.jqueryscript.net/other/SVG-Based-Star-Rating-Plugin-For-jQuery-star-rating-svg-js.html*/
$(".stars").starRating({
  totalStars: 5,
  starSize: 30,
  emptyColor: '#8D91A3',
  hoverColor: '#FFDD3F',
  activeColor: '#FFDD3F',
  ratedColor: '#FFDD3F',
  minRating: 1,
  useFullStars: true,
  starShape: 'rounded',
  disableAfterRate: false
});
/*DONUT Rating https://www.jqueryscript.net/chart-graph/Pie-Donut-Chart-SVG-jChart.html*/

var myData = [{
  value: 300,
  draw: true
}, {
  value: 100,
  color: '#77dd4f',
  draw: true,
  push: true
}, {
  value: 100,
  color: '#dd5723',
  draw: true
}];
$("#element").jChart({
  data: myData,
  appearance: {
    type: 'donut',
    strokeWidth: 1,
    title: {
      showValue: true,
      showPercentage: false,
      showSummary: true,
      summaryTitle: '',
      summarySegment: 1
    }
  }
});
/*TAB`S*/

document.querySelectorAll('.tab-buttons button').forEach(function (button) {
  //знаходимо усі таби і запускаємо цикл по кожній кнопці
  button.addEventListener('click', function () {
    // додаємо обробник клік,
    document.querySelectorAll('.tab-buttons button').forEach(function (btn) {
      return btn.classList.remove('active');
    }); // прибираємо клас active

    button.classList.add('active'); // додаємо клас active на натиснутий таб

    var tab = button.getAttribute('data-tab'); //Зчитує значення атрибута data-tab з кнопки

    document.querySelectorAll('.tab-content').forEach(function (content) {
      //цикл по контенту вкладок
      content.classList.toggle('active', content.getAttribute('data-content') === tab); //додаємо клас active
    });
  });
});