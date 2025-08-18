"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoffeComponents = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CoffeComponents =
/*#__PURE__*/
function () {
  function CoffeComponents() {
    _classCallCheck(this, CoffeComponents);
  }

  _createClass(CoffeComponents, [{
    key: "render",
    value: function render() {
      var coffees = ["Coffe", "Cappuchino", "Mocha"];
      var div = document.createElement("div");

      for (var _i = 0, _coffees = coffees; _i < _coffees.length; _i++) {
        var coffee = _coffees[_i];
        var p = document.createElement("p");
        p.textContent = coffee;
        div.append(p);
      }

      return div;
    }
  }]);

  return CoffeComponents;
}();

exports.CoffeComponents = CoffeComponents;